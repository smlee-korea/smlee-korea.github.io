# 포트폴리오 사이트

만든 앱과 공부 자료(PDF 등)를 "아이콘 : 설명" 목록으로 한눈에 보여주는 정적 웹사이트입니다.
밝고 따뜻한 크림·주황 톤 테마이며, "전체"에서는 카테고리별로 묶여서 보입니다.
별도 빌드 과정 없이 HTML/CSS/JS 파일만으로 동작하며, GitHub Pages로 무료 배포합니다.

## 폴더 구조

```
Portfolio/
├── index.html          # 사이트 본체 (거의 고칠 일 없음)
├── data/works.js       # ★ 사이트 설정 + 작업물 목록 (여기만 고치면 됨)
├── files/              # 첨부파일 (PDF 등)
├── images/             # 썸네일 이미지
├── assets/css/style.css
├── assets/js/main.js
└── .nojekyll           # GitHub Pages 설정용 빈 파일 (지우지 말 것)
```

## 작업물 추가하는 방법

1. 첨부할 파일을 `files/` 폴더에 넣습니다. (예: `files/react-basics.pdf`)
   - 파일 이름은 **영어·숫자·하이픈**으로 짓는 것을 권장합니다. (한글·띄어쓰기는 링크가 깨질 수 있음)
   - 파일 하나당 50MB 이하로 유지합니다. (GitHub 제한)
2. 아이콘은 이모지(예: `"🎵"`)로 지정하면 됩니다. 직접 만든 아이콘 이미지를 쓰려면 `images/` 폴더에 넣고 경로를 적습니다. (비워두면 카테고리 아이콘이 나옵니다)
3. `data/works.js`의 `WORKS` 배열에 항목을 하나 추가합니다.

```js
{
  id: "react-basics",                 // 고유 이름 (영어/숫자/하이픈)
  icon: "⚛️",                          // 왼쪽 아이콘 (이모지 또는 "images/파일.png")
  title: "React 기초 정리",
  category: "study",                  // app | web | study | etc
  date: "2026-11-23",                 // 최신 날짜가 맨 앞에 표시됨
  summary: "목록에 보이는 한 줄 소개",
  description: "상세 보기에 나오는 긴 설명.\n줄바꿈 가능",
  tags: ["React", "프론트엔드"],
  thumbnail: "images/react-basics.png",  // 상세 보기 상단 큰 이미지, 없으면 ""
  files: [
    { label: "정리 노트", path: "files/react-basics.pdf" },
  ],
  links: [
    { label: "GitHub 저장소", url: "https://github.com/..." },
  ],
},
```

> 쉼표(`,`)와 따옴표(`"`)를 빠뜨리면 사이트가 비어 보입니다. 직접 고치기 어렵다면 Claude에게 "이 PDF 포트폴리오에 올려줘"라고 요청하면 됩니다.

## 공유 링크

작업물을 누른 뒤 상세 보기 아래의 **"이 작업물 링크 복사"** 버튼을 누르면
`https://주소/#작업물id` 형태의 링크가 복사되고, 이 링크로 들어오면 해당 작업물이 바로 열립니다.

## 내 컴퓨터에서 미리 보기

`index.html`을 더블클릭하면 바로 열립니다.
(PDF 미리보기까지 정확히 확인하려면 이 폴더에서 `python3 -m http.server 8000` 실행 후 http://localhost:8000 접속)

## 카테고리 바꾸기/추가하기

`data/works.js`의 `CATEGORIES`를 수정합니다. 예: `design: { name: "디자인", icon: "🎨" }`을 추가하면 `category: "design"`을 쓸 수 있습니다.
적은 순서대로 화면에 묶여서 나옵니다.

## 색 바꾸기

`assets/css/style.css` 맨 위 `:root`의 색 값(`--bg`, `--accent` 등)만 바꾸면 사이트 전체 색이 바뀝니다.
