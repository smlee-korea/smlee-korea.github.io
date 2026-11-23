/* 포트폴리오 갤러리: data/works.js의 내용을 읽어 화면을 그린다 */
(function () {
  "use strict";

  const SITE = window.SITE || {};
  const CATEGORIES = window.CATEGORIES || {};
  const WORKS = (window.WORKS || []).slice().sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  const $ = (sel) => document.querySelector(sel);
  const state = { category: "all", query: "" };

  // HTML 특수문자 처리 (데이터에 들어간 글자가 태그로 해석되지 않게)
  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  const categoryName = (key) => CATEGORIES[key] || key || "기타";
  const fileExt = (path) => (String(path).split("?")[0].split(".").pop() || "").toLowerCase();
  const isPdf = (path) => fileExt(path) === "pdf";

  function formatDate(date) {
    if (!date) return "";
    const [y, m, d] = date.split("-");
    return d ? `${y}.${m}.${d}` : date;
  }

  // 썸네일이 없을 때 쓰는 기본 표지
  function coverHtml(work) {
    if (work.thumbnail) {
      return `<img src="${esc(work.thumbnail)}" alt="" loading="lazy">`;
    }
    const initial = esc((work.title || "?").replace(/^예시:\s*/, "").trim().charAt(0));
    return `<div class="cover cover-${esc(work.category || "etc")}"><span>${initial}</span></div>`;
  }

  /* ---------- 상단 정보 ---------- */
  function renderHeader() {
    if (SITE.title) {
      document.title = SITE.title;
      $("#site-title").textContent = SITE.title;
    }
    $("#site-intro").textContent = SITE.intro || "";
    $("#site-links").innerHTML = (SITE.links || [])
      .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("");
    $("#footer-text").textContent = SITE.footer || "";
  }

  /* ---------- 카테고리 필터 ---------- */
  function renderFilters() {
    const used = [...new Set(WORKS.map((w) => w.category || "etc"))];
    const keys = Object.keys(CATEGORIES).filter((k) => used.includes(k))
      .concat(used.filter((k) => !(k in CATEGORIES)));
    const buttons = [["all", "전체", WORKS.length]].concat(
      keys.map((k) => [k, categoryName(k), WORKS.filter((w) => (w.category || "etc") === k).length])
    );
    $("#filters").innerHTML = buttons
      .map(([key, label, n]) =>
        `<button type="button" role="tab" data-cat="${esc(key)}" aria-selected="${state.category === key}">
          ${esc(label)} <span class="n">${n}</span>
        </button>`)
      .join("");
  }

  /* ---------- 카드 목록 ---------- */
  function matches(work) {
    if (state.category !== "all" && (work.category || "etc") !== state.category) return false;
    if (!state.query) return true;
    const hay = [work.title, work.summary, work.description, ...(work.tags || [])].join(" ").toLowerCase();
    return hay.includes(state.query);
  }

  function renderGrid() {
    const list = WORKS.filter(matches);
    $("#grid").innerHTML = list
      .map((w) => {
        const fileCount = (w.files || []).length;
        const linkCount = (w.links || []).length;
        return `
        <button type="button" class="card" data-id="${esc(w.id)}">
          <div class="thumb">${coverHtml(w)}</div>
          <div class="card-body">
            <div class="meta">
              <span class="badge">${esc(categoryName(w.category))}</span>
              <time>${esc(formatDate(w.date))}</time>
            </div>
            <h2>${esc(w.title)}</h2>
            <p>${esc(w.summary)}</p>
            <div class="card-foot">
              <div class="tags">${(w.tags || []).map((t) => `<span>#${esc(t)}</span>`).join("")}</div>
              <div class="attach">
                ${fileCount ? `<span title="첨부파일">📎 ${fileCount}</span>` : ""}
                ${linkCount ? `<span title="링크">🔗 ${linkCount}</span>` : ""}
              </div>
            </div>
          </div>
        </button>`;
      })
      .join("");
    $("#empty").hidden = list.length > 0;
    $("#count").textContent = `작업물 ${list.length}개`;
  }

  /* ---------- 상세 보기 ---------- */
  const dialog = $("#detail");

  function openDetail(id, updateHash = true) {
    const w = WORKS.find((x) => x.id === id);
    if (!w) return;

    const files = (w.files || []).map((f, i) => `
      <li class="file">
        <div class="file-row">
          <span class="file-name"><span class="ext">${esc(fileExt(f.path).toUpperCase() || "FILE")}</span>${esc(f.label || f.path)}</span>
          <span class="file-actions">
            ${isPdf(f.path) ? `<button type="button" class="btn ghost preview-btn" data-index="${i}">미리보기</button>` : ""}
            <a class="btn ghost" href="${esc(f.path)}" target="_blank" rel="noopener">열기</a>
            <a class="btn" href="${esc(f.path)}" download>다운로드</a>
          </span>
        </div>
        ${isPdf(f.path) ? `<div class="preview" data-index="${i}" hidden></div>` : ""}
      </li>`).join("");

    const links = (w.links || []).map((l) =>
      `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("");

    $("#detail-body").innerHTML = `
      ${w.thumbnail ? `<div class="detail-thumb"><img src="${esc(w.thumbnail)}" alt=""></div>` : ""}
      <div class="meta">
        <span class="badge">${esc(categoryName(w.category))}</span>
        <time>${esc(formatDate(w.date))}</time>
      </div>
      <h2 id="detail-title">${esc(w.title)}</h2>
      <div class="tags">${(w.tags || []).map((t) => `<span>#${esc(t)}</span>`).join("")}</div>
      <p class="desc">${esc(w.description || w.summary)}</p>
      ${links ? `<h3>링크</h3><div class="link-list">${links}</div>` : ""}
      ${files ? `<h3>첨부파일</h3><ul class="file-list">${files}</ul>` : ""}
      <div class="share"><button type="button" class="btn ghost copy-link">이 작업물 링크 복사</button></div>
    `;

    // PDF 미리보기 열고 닫기 (처음 누를 때만 불러온다)
    $("#detail-body").querySelectorAll(".preview-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const box = $("#detail-body").querySelector(`.preview[data-index="${btn.dataset.index}"]`);
        const file = w.files[Number(btn.dataset.index)];
        if (!box.firstChild) box.innerHTML = `<iframe src="${esc(file.path)}" title="${esc(file.label)} 미리보기"></iframe>`;
        box.hidden = !box.hidden;
        btn.textContent = box.hidden ? "미리보기" : "미리보기 닫기";
      });
    });

    $("#detail-body").querySelector(".copy-link").addEventListener("click", async (e) => {
      const url = location.href.split("#")[0] + "#" + w.id;
      try {
        await navigator.clipboard.writeText(url);
        e.target.textContent = "복사했습니다";
      } catch {
        e.target.textContent = url;
      }
    });

    if (updateHash && location.hash !== "#" + w.id) history.pushState(null, "", "#" + w.id);
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
  }

  function closeDetail() {
    if (dialog.open) dialog.close();
  }

  dialog.addEventListener("close", () => {
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  });
  dialog.querySelector(".close").addEventListener("click", closeDetail);
  // 바깥 어두운 영역을 누르면 닫기
  dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDetail(); });

  /* ---------- 이벤트 ---------- */
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderFilters();
    renderGrid();
  });

  $("#search").addEventListener("input", (e) => {
    state.query = e.target.value.trim().toLowerCase();
    renderGrid();
  });

  $("#grid").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openDetail(card.dataset.id);
  });

  // 주소 뒤에 #작업물id 가 붙어 있으면 바로 상세 보기를 연다 (공유 링크용)
  function syncHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id) openDetail(id, false);
    else closeDetail();
  }
  window.addEventListener("popstate", syncHash);

  renderHeader();
  renderFilters();
  renderGrid();
  syncHash();
})();
