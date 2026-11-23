/*
 * 사이트 설정과 작업물 목록
 * 새 작업물을 올릴 때는 이 파일의 WORKS 배열에 항목 하나만 추가하면 된다.
 * 자세한 방법은 README.md 참고.
 */

window.SITE = {
  hello: "👋 반가워요",                      // 제목 위 작은 인사말 (비우면 안 보임)
  title: "포트폴리오",                       // 사이트 제목 (브라우저 탭과 상단에 표시)
  intro: "직접 만든 앱과 공부한 내용을 정리해 공유하는 공간입니다.",
  links: [
    { label: "🐙 GitHub", url: "https://github.com/smlee-korea" },
    // 예: { label: "✉️ 이메일", url: "mailto:주소" },
  ],
  footer: "© 2026",
};

// 카테고리 (key는 작업물의 category 값과 맞춘다, 적은 순서대로 화면에 묶여서 나온다)
window.CATEGORIES = {
  app: { name: "앱", icon: "📱" },
  study: { name: "공부 자료", icon: "📚" },
  etc: { name: "기타", icon: "✨" },
};

/*
 * 작업물 목록
 * icon: 왼쪽 아이콘. 이모지("🎵") 또는 이미지 경로("images/my-app.png").
 *       비워두면 카테고리 아이콘이 나온다.
 * ※ 아래 "예시:" 항목들은 화면 확인용이다. 실제 작업물을 올리면 지운다.
 */
window.WORKS = [
  {
    id: "sample-study",                       // 영문/숫자/하이픈. 공유 링크 주소(#sample-study)에 쓰인다
    icon: "📝",
    title: "예시: 공부 정리 자료",
    category: "study",
    date: "2026-11-23",
    summary: "PDF 첨부파일이 있는 공부 자료 예시입니다.",
    description:
      "카드를 누르면 이렇게 상세 내용이 나옵니다.\n줄바꿈도 그대로 표시됩니다.\n\n실제 자료를 올리면 이 예시는 지워 주세요.",
    tags: ["예시", "PDF"],
    thumbnail: "",                            // 상세 보기 상단 큰 이미지 (예: "images/sample.png"). 비워두면 없음
    files: [
      { label: "예시 PDF", path: "files/sample.pdf" },
    ],
    links: [],
  },
  {
    id: "sample-wordbook",
    icon: "🔤",
    title: "예시: 영어 단어장",
    category: "study",
    date: "2026-11-15",
    summary: "매일 외운 단어를 주제별로 정리한 자료입니다.",
    description: "공부 자료 예시입니다.",
    tags: ["예시", "영어"],
    thumbnail: "",
    files: [],
    links: [],
  },
  {
    id: "sample-app",
    icon: "🎵",
    title: "예시: 음악 플레이어",
    category: "app",
    date: "2026-11-20",
    summary: "좋아하는 노래를 모아 듣는 웹 음악 플레이어입니다.",
    description: "앱 소개, 사용한 기술, 만든 이유 등을 자유롭게 적으면 됩니다.",
    tags: ["예시", "웹앱"],
    thumbnail: "",
    files: [],
    links: [
      { label: "앱 열어보기", url: "https://example.com" },
    ],
  },
  {
    id: "sample-budget",
    icon: "💰",
    title: "예시: 가계부 앱",
    category: "app",
    date: "2026-11-10",
    summary: "지출을 기록하고 한 달 소비를 그래프로 보여주는 앱입니다.",
    description: "앱 예시입니다.",
    tags: ["예시", "웹앱"],
    thumbnail: "",
    files: [],
    links: [
      { label: "앱 열어보기", url: "https://example.com" },
    ],
  },
  {
    id: "sample-usage",
    icon: "⏱️",
    title: "예시: 사용량 표시 막대",
    category: "app",
    date: "2026-11-05",
    summary: "메뉴바에서 사용량을 한눈에 확인하는 작은 도구입니다.",
    description: "앱 예시입니다.",
    tags: ["예시", "도구"],
    thumbnail: "",
    files: [],
    links: [],
  },
  {
    id: "sample-youtube",
    icon: "🎬",
    title: "예시: 유튜브 기획 노트",
    category: "etc",
    date: "2026-11-01",
    summary: "영상 아이디어와 대본 초안을 모아 둔 노트입니다.",
    description: "기타 작업물 예시입니다.",
    tags: ["예시", "유튜브"],
    thumbnail: "",
    files: [],
    links: [],
  },
];
