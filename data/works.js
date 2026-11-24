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
  web: { name: "홈페이지", icon: "🌐" },
  study: { name: "공부 자료", icon: "📚" },
  etc: { name: "기타", icon: "✨" },
};

/*
 * 작업물 목록
 * icon: 왼쪽 아이콘. 이모지("🎵") 또는 이미지 경로("images/my-app.png").
 *       비워두면 카테고리 아이콘이 나온다.
 */
window.WORKS = [
  {
    id: "detailpage-kit",
    icon: "🛍️",
    title: "상세페이지 자동 제작 키트 (Claude Code 스킬)",
    category: "app",
    date: "2026-11-24",
    summary: "제품 사진 한 장을 주면 Claude Code가 쇼핑몰 상세페이지 JPG, 썸네일, 쿠팡 등록용 정리까지 만들어 주는 스킬입니다.",
    description:
      "스토어에 상품을 올릴 때마다 상세페이지를 직접 디자인하는 수고를 줄이려고 만든 Claude Code 스킬(/detailpage)입니다.\n\n" +
      "■ 하는 일\n" +
      "· 제품 사진이나 공급처 링크를 받아 제품 종류, 옵션, 구성을 파악\n" +
      "· 쿠팡 판매량 상위 상품을 벤치마킹해 가격, 옵션, 강조점을 정리\n" +
      "· 공식몰·제조사의 같은 제품 실제 사진을 찾아 넣고 출처를 기록\n" +
      "· 깔끔한 모바일 쇼핑몰 스타일 상세페이지를 780px JPG로 렌더링하고 1000px 대표·추가 이미지 생성\n" +
      "· 쿠팡 등록값(상품명, 옵션, 태그, 카테고리, 가격)과 올리기 전 확인할 점을 README로 정리\n\n" +
      "■ 만든 방법\n" +
      "Claude Code 스킬(SKILL.md) + HTML 템플릿 + Python(Pillow) 스크립트로 구성했고, 헤드리스 Chrome으로 HTML을 JPG로 찍습니다. 벤치마킹과 사진 검색은 Claude in Chrome을 씁니다.\n\n" +
      "■ 다운로드해서 쓰려면\n" +
      "· Windows 또는 Mac, Claude Pro 이상 구독 (Claude Code + Claude in Chrome)\n" +
      "· Python 3.10 이상, Google Chrome (Windows는 Git for Windows도 필요)\n" +
      "· zip을 풀고 안에 있는 SETUP.md 순서대로 한 번만 설정하면, 그 폴더에서 claude 실행 후 /detailpage 사진경로 로 씁니다.\n" +
      "· 캐릭터·브랜드 상품은 라이선스 증빙이 없으면 판매하지 마세요.",
    tags: ["Claude Code", "스킬", "상세페이지", "쿠팡", "Python"],
    thumbnail: "",
    files: [
      { label: "상세페이지 제작 키트 (Windows·Mac, zip)", path: "files/detailpage-kit.zip" },
    ],
    links: [],
  },
  {
    id: "claude-usage-bar",                   // 영문/숫자/하이픈. 공유 링크 주소(#claude-usage-bar)에 쓰인다
    icon: "✳️",
    title: "Claude 사용량 메뉴바",
    category: "app",
    date: "2026-11-23",
    summary: "macOS 메뉴바에 Claude 구독 사용량(5시간 · 주간)을 항상 띄워 주는 작은 앱입니다.",
    description:
      "Claude를 쓰다 보면 \"지금 얼마나 썼지?\"가 궁금할 때가 많아서, 설정 화면에 들어가지 않고도 메뉴바에서 바로 확인할 수 있게 만들었습니다.\n\n" +
      "■ 주요 기능\n" +
      "· 메뉴바 표시: ✳︎ 23% · 41% (5시간 세션 사용률 · 주간 사용률)\n" +
      "· 70% 이상은 주황, 90% 이상은 빨강으로 바뀌어 한눈에 알 수 있음\n" +
      "· 클릭하거나 ⌃⌥⌘U를 누르면 게이지, 리셋까지 남은 시간, 리셋 시각이 나오는 상세 메뉴\n" +
      "· 5분마다 자동 갱신, 잠자기에서 깨어나면 바로 갱신\n" +
      "· 로그인 시 자동 실행 켜기/끄기\n\n" +
      "■ 동작 원리\n" +
      "Claude Code가 키체인에 저장해 둔 로그인 정보로 claude.ai 사용량 화면과 같은 데이터를 불러옵니다. 로그인 정보는 어디에도 따로 저장하지 않습니다.\n\n" +
      "■ 다운로드해서 쓰려면\n" +
      "· Apple Silicon Mac, macOS 13 이상\n" +
      "· Claude Code에 로그인되어 있어야 합니다 (터미널에서 claude 실행)\n" +
      "· 개인이 만든 서명되지 않은 앱이라 처음 열 때 보안 경고가 뜹니다. 앱을 마우스 오른쪽 버튼으로 누르고 \"열기\"를 선택하거나, 시스템 설정 > 개인정보 보호 및 보안에서 \"그래도 열기\"를 누르세요.\n" +
      "· 비공식 내부 API를 쓰기 때문에 Anthropic이 바꾸면 동작이 멈출 수 있습니다.",
    tags: ["macOS", "Swift", "메뉴바", "Claude"],
    thumbnail: "images/claude-usage-bar-shot.jpg",                            // 상세 보기 상단 큰 이미지 (예: "images/sample.png"). 비워두면 없음
    files: [
      { label: "ClaudeUsageBar 앱 (macOS, zip)", path: "files/claude-usage-bar.zip" },
    ],
    links: [],
  },
  {
    id: "ai-study",
    icon: "images/ai-study-icon.png",
    title: "AI Study",
    category: "app",
    date: "2026-11-22",
    summary: "AI에게 의도를 잘 전달하는 프롬프트 연습과 복습을 매일 도와주는 macOS 학습 앱입니다.",
    description:
      "\"~해줘\"를 \"나는 ~를 원해, 왜냐하면 ~\"으로 바꾸는 연습을 매일 할 수 있게 만든 나만의 공부 앱입니다. 답을 쓰면 AI가 채점하고, 피드백을 보고 다시 써야 한 세트가 끝납니다.\n\n" +
      "■ 주요 기능\n" +
      "· 오늘의 과제: 매일 문제 2~3개와 복습 카드\n" +
      "· 문제 풀기: 처음 쓰기 → AI 채점(5가지 기준, 10점 만점) → 다시 쓰기 → 재채점 → 모범 답안\n" +
      "· 복습 카드: 잘 아는 카드는 점점 늦게 나오는 간격 반복\n" +
      "· 자주 빠뜨리는 것, 공부 노트 검색, 내 실력 그래프, 단계(Lv.1~4)\n\n" +
      "■ 저절로 일어나는 일\n" +
      "· 매일 아침 Claude가 내 약점을 보고 새 문제, 카드, 노트를 추가\n" +
      "· 한 세트를 마칠 때마다 오답노트 PDF를 새로 만듦\n" +
      "· Mac 로그인, 잠금 해제 때 앱이 자동으로 열림\n\n" +
      "■ 만든 방법\n" +
      "SwiftUI로 만든 네이티브 macOS 앱이며 외부 라이브러리를 쓰지 않았습니다. AI 채점은 Claude Code(claude -p)를 사용합니다.\n\n" +
      "■ 다운로드해서 쓰려면\n" +
      "· 내 컴퓨터의 공부 폴더(Desktop/Claude/study)와 Claude Code를 함께 쓰도록 만든 개인용 앱이라, 다른 Mac에서는 화면만 보이고 내용이 비어 있을 수 있습니다.\n" +
      "· Apple Silicon Mac, macOS 14 이상\n" +
      "· 서명되지 않은 앱이라 처음 열 때 보안 경고가 뜹니다. 앱을 마우스 오른쪽 버튼으로 누르고 \"열기\"를 선택하세요.",
    tags: ["macOS", "SwiftUI", "학습", "프롬프트", "Claude"],
    thumbnail: "images/ai-study-shot.jpg",
    files: [
      { label: "AI Study 앱 (macOS, zip)", path: "files/ai-study.zip" },
    ],
    links: [],
  },
  {
    id: "must-physical",
    icon: "🏃",
    title: "Must Physical 레슨장 홈페이지",
    category: "web",
    date: "2026-11-18",
    summary: "육상 기반 스피드·기초체력 트레이닝 레슨장의 소개, 프로그램, 가격, 상담 문의 홈페이지입니다.",
    description:
      "오픈을 준비 중인 스포츠 트레이닝 레슨장 \"Must Physical\"(가칭)의 홈페이지입니다. 슬로건은 \"스피드는 선택이 아니라 필수\"입니다.\n\n" +
      "■ 구성\n" +
      "· 대상별 안내: 엘리트 선수, 초3~중학생 기초체력, 성인·시니어 체력교실\n" +
      "· 프로그램과 가격, 코치 소개, 자주 묻는 질문, 오시는 길\n" +
      "· 무료 체험 수업 신청과 상담 문의\n\n" +
      "■ 특징\n" +
      "· 파일 하나로 된 반응형 페이지 (PC, 태블릿, 휴대폰 모두 대응)\n" +
      "· 휴대폰에서는 햄버거 메뉴와 하단 고정 [전화 상담][카카오톡 문의] 바\n\n" +
      "※ 제작 중인 시안입니다. 전화번호, 센터 주소 등 아직 정해지지 않은 정보는 [대괄호]로 비워 두었습니다.",
    tags: ["홈페이지", "HTML", "CSS", "반응형", "스포츠"],
    thumbnail: "images/lesson-homepage.jpg",
    files: [],
    links: [
      { label: "홈페이지 열어보기", url: "lesson/" },
    ],
  },
];
