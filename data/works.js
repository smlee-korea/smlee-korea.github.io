/*
 * 사이트 설정과 작업물 목록
 * 새 작업물을 올릴 때는 이 파일의 WORKS 배열에 항목 하나만 추가하면 된다.
 * 자세한 방법은 README.md 참고.
 */

window.SITE = {
  hello: "👋 반가워요",                      // 제목 위 작은 인사말 (비우면 안 보임)
  title: "성민's AI 도전기",                     // 사이트 제목 (브라우저 탭과 상단에 표시)
  intro: "몽땅 유능한 것들로 가득 채워볼게유~",
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
    id: "notes",
    icon: "📝",
    title: "오답노트",
    category: "study",
    date: "2026-11-26",
    summary: "작업하다 막혔던 문제와 그 원인, 해결 과정을 한곳에 모아 둔 노트입니다.",
    description:
      "AI와 함께 이것저것 만들다 보면 같은 곳에서 두 번 막히는 일이 생깁니다. 그래서 막혔던 문제를 풀 때마다 같은 틀로 정리해 두기로 했습니다.\n\n" +
      "■ 노트 한 장의 구성\n" +
      "· 증상: 실제로 나온 오류 문구\n" +
      "· 원인: 왜 막혔는지\n" +
      "· 해결: 실제로 한 조치와 명령어\n" +
      "· 확인: 어떻게 테스트해서 해결을 확인했는지\n" +
      "· 다시 막히면: 재발했을 때 먼저 할 일\n" +
      "· 배운 점\n\n" +
      "■ 첫 노트\n" +
      "· YouTube 레퍼런스 영상을 받으려는데 yt-dlp가 계속 실패함 (Youtube 쇼츠 시스템)",
    tags: ["오답노트", "문제 해결", "기록"],
    thumbnail: "",
    files: [],
    links: [
      { label: "오답노트 모아 보기", url: "notes/" },
    ],
  },
  {
    id: "bank-ledger",
    icon: "images/bank-ledger-icon.png",
    title: "알림 가계부 자동화",
    category: "app",
    date: "2026-11-25",
    summary: "은행 결제·이체 푸시 알림을 받아 Mac의 엑셀 가계부에 자동으로 적고, 소비 습관을 분석해 생활 규칙을 제안하는 도구입니다.",
    description:
      "카카오뱅크는 PC와 연동되지 않아서 거래 내역을 자동으로 가져올 방법이 없었습니다. 그래서 휴대폰에 오는 푸시 알림을 데이터로 삼아, 손으로 입력하지 않아도 가계부가 채워지게 만들었습니다.\n\n" +
      "■ 작동 방식\n" +
      "· 휴대폰(Android)의 MacroDroid가 은행 앱 알림만 골라 구글 Apps Script로 보냄\n" +
      "· 구글 시트가 우편함 역할을 해서 Mac이 꺼져 있어도 알림이 쌓임\n" +
      "· Mac이 30분마다 가져와 금액, 수입·지출, 거래처, 카테고리를 해석해 가계부.xlsx에 기록\n" +
      "· 세이프박스 이동, 본인 계좌 간 이체, 중복 알림은 거르고 결제 취소는 자동으로 차감\n\n" +
      "■ 대시보드 (7개 탭)\n" +
      "· 요약, 지출 분석, 요일·시간대 소비 패턴, 거래 내역, 엑셀 시트 보기\n" +
      "· 생활 규칙: 배달 횟수, 밤 결제, 소액 결제 같은 패턴을 찾아 근거와 함께 규칙 제안\n" +
      "· 만원챌린지: 하루 1만 원으로 살기 도전의 성공 달력 (남은 돈은 다음 날로 이월)\n\n" +
      "■ 만든 방법\n" +
      "Python 표준 라이브러리 + openpyxl, Google Apps Script, launchd, AppleScript로 만들었고, 대시보드는 라이브러리 없이 HTML/JS로 직접 그렸습니다. 금융 데이터라서 분석은 모두 내 Mac 안(127.0.0.1)에서만 하고 외부 API를 쓰지 않습니다. macOS 보안 때문에 Python에 넓은 권한을 주는 대신, 데스크탑 폴더 권한만 받은 미니앱이 실행하도록 했습니다.\n\n" +
      "■ 다운로드해서 쓰려면\n" +
      "· Android 휴대폰, Mac, 구글 계정, Python 3 + openpyxl\n" +
      "· zip 안의 README.md 순서대로 구글 시트, MacroDroid, Mac을 설정합니다.\n" +
      "· 은행마다 알림 문구가 달라서 rules.json의 키워드를 내 은행에 맞게 고쳐야 할 수 있습니다.\n" +
      "· 소개 페이지의 대시보드 데모는 모두 가짜 샘플 데이터입니다.",
    tags: ["Python", "Apps Script", "자동화", "가계부", "macOS"],
    thumbnail: "images/bank-ledger-shot.jpg",
    files: [
      { label: "알림 가계부 코드 (macOS·Android, zip)", path: "files/bank-ledger.zip" },
    ],
    links: [
      { label: "작동 방식 소개 + 대시보드 데모", url: "bank-ledger/" },
    ],
  },
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
