/*
 * 사이트 설정과 작업물 목록
 * 새 작업물을 올릴 때는 이 파일의 WORKS 배열에 항목 하나만 추가하면 된다.
 * 자세한 방법은 README.md 참고.
 */

window.SITE = {
  title: "포트폴리오",                       // 사이트 제목 (브라우저 탭과 상단에 표시)
  intro: "직접 만든 앱과 공부한 내용을 정리해 공유하는 공간입니다.",
  links: [
    { label: "GitHub", url: "https://github.com/smlee-korea" },
    // 예: { label: "이메일", url: "mailto:주소" },
  ],
  footer: "© 2026",
};

// 카테고리 이름 (key는 작업물의 category 값과 맞춘다)
window.CATEGORIES = {
  app: "앱",
  study: "공부 자료",
  etc: "기타",
};

window.WORKS = [
  {
    id: "sample-study",                       // 영문/숫자/하이픈. 공유 링크 주소(#sample-study)에 쓰인다
    title: "예시: 공부 정리 자료",
    category: "study",
    date: "2026-11-23",
    summary: "PDF 첨부파일이 있는 공부 자료 예시입니다.",
    description:
      "카드를 누르면 이렇게 상세 내용이 나옵니다.\n줄바꿈도 그대로 표시됩니다.\n\n실제 자료를 올리면 이 예시는 지워 주세요.",
    tags: ["예시", "PDF"],
    thumbnail: "",                            // 썸네일 이미지 경로 (예: "images/sample.png"). 비워두면 기본 표지
    files: [
      { label: "예시 PDF", path: "files/sample.pdf" },
    ],
    links: [],
  },
  {
    id: "sample-app",
    title: "예시: 내가 만든 앱",
    category: "app",
    date: "2026-11-20",
    summary: "외부 링크(앱 주소, 스토어 등)를 연결한 앱 예시입니다.",
    description: "앱 소개, 사용한 기술, 만든 이유 등을 자유롭게 적으면 됩니다.",
    tags: ["예시", "웹앱"],
    thumbnail: "",
    files: [],
    links: [
      { label: "앱 열어보기", url: "https://example.com" },
    ],
  },
];
