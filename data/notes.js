/*
 * 오답노트 목록 (notes/index.html이 이 파일을 읽어 화면을 그린다)
 * 새 노트를 추가할 때는 NOTES 배열 맨 앞에 항목 하나를 넣으면 된다.
 *
 * 글 안에서 쓸 수 있는 표기
 *   - `코드`        : 한 줄 안의 명령어·파일명
 *   - { code: "…" } : 여러 줄 코드 블록 (배열 원소로 넣는다)
 *   - "· 항목"      : 점으로 시작하는 줄은 목록으로 보인다
 *
 * 공개 사이트이므로 내 컴퓨터 경로(/Users/...), IP, 계정 정보는 적지 않는다.
 */

window.NOTES = [
  {
    id: "youtube-download-ytdlp",
    title: "YouTube 레퍼런스 영상을 받으려는데 yt-dlp가 계속 실패함",
    project: "Youtube 쇼츠 시스템",
    date: "2026-11-26",
    tags: ["yt-dlp", "Python", "deno", "uv"],
    oneline: "Python 3.9에 묶여 yt-dlp를 1년 넘게 업데이트하지 못한 사이 YouTube가 구조를 바꿨다. Python 3.12 전용 환경을 따로 만들고 최신 yt-dlp와 deno를 깔아 해결했다.",
    symptom: [
      "쇼츠 분석용 레퍼런스 영상을 yt-dlp로 받으려고 하면 아래 오류가 나면서 멈췄다.",
      { code:
        "WARNING: Some web client https formats have been skipped as they are missing a url.\n" +
        "         YouTube is forcing SABR streaming for this client.\n" +
        "ERROR:   [youtube] Vs9pWBgYn0U: The page needs to be reloaded." },
      "· 실행할 때마다 `Support for Python version 3.9 has been deprecated` 경고도 함께 떴다.",
      "· 접속 방식을 바꾸는 옵션(`player_client=android_vr`)을 쓰면 영상 정보는 받아졌지만, 실제 다운로드 중에 `HTTP Error 403: Forbidden`으로 자주 끊겼다.",
    ],
    workaround: [
      "원인을 찾기 전에는 브라우저에서 영상을 재생하면서 화면과 소리를 녹화하는 방식으로 대신 받았다.",
      "· 영상 길이만큼 시간이 걸리고, 다시 녹화한 것이라 원본보다 화질이 떨어진다.",
      "· 이 방법을 기록해 두지 않아서 다음 작업에서도 같은 데서 다시 막혔다.",
    ],
    cause: [
      "· **yt-dlp가 1년 넘게 묵은 버전(2025.10.14)이었다.** YouTube는 다운로드 도구를 막으려고 구조를 자주 바꾸고, yt-dlp는 업데이트로 대응한다. 그래서 오래된 버전은 금방 안 통하게 된다.",
      "· **Python 3.9 때문에 업데이트를 할 수 없었다.** yt-dlp가 3.9 지원을 끊어서, 3.9 환경에서 pip로 설치할 수 있는 최신판이 바로 그 오래된 버전이었다.",
      "· **최신 yt-dlp는 JavaScript 실행기를 요구한다.** YouTube의 JS 보안 검사(n/sig challenge)를 풀려면 deno나 node가 있어야 하는데, 컴퓨터에 하나도 없었다.",
      "· YouTube가 일반 웹 접속에는 영상 파일 주소 대신 자기 플레이어 전용 전송 방식(SABR)만 주기 시작한 것도 겹쳤다.",
    ],
    fix: [
      "기존 제작 환경(Python 3.9)은 그대로 두고, 다운로드 전용 환경을 따로 만들었다. 모두 무료다.",
      "· **1. Python 3.12 설치**: 이미 깔려 있던 `uv`로 설치했다.",
      { code: "uv python install 3.12\nuv venv --python 3.12 .venv-dl" },
      "· **2. 최신 yt-dlp와 deno 설치**: deno도 PyPI에 올라와 있어서 pip 한 번으로 같이 설치된다. `yt-dlp[default]`를 쓰면 보안 검사 풀이 스크립트(`yt-dlp-ejs`)도 함께 설치된다.",
      { code: "uv pip install --python .venv-dl/bin/python -U \"yt-dlp[default]\" deno imageio-ffmpeg" },
      "· **3. 다운로드 스크립트로 묶기**: `download.sh <영상ID>` 한 줄로 받게 만들었다. deno를 찾을 수 있게 가상환경의 `bin` 폴더를 PATH 앞에 두고, 편집 호환성을 위해 H.264+AAC 형식을 먼저 고르게 했다. 기본값으로 받으면 AV1 코덱이 와서 이렇게 했다.",
      { code: "yt-dlp -f \"bv*[vcodec^=avc1]+ba[acodec^=mp4a]/bv*+ba/b\" \\\n  --merge-output-format mp4 -o \"%(id)s.%(ext)s\" -- <영상ID>" },
    ],
    verify: [
      "우회 옵션 없이 기본 설정으로 받아 봤다.",
      "· 10.5초 쇼츠: 성공. 1080×1920, 소리 정상, 화면 캡처로도 확인했다.",
      "· 처음에 막혔던 48초 쇼츠: 성공. 녹화본이 아닌 원본으로 받아졌다.",
      "· 로그에 `Solving JS challenges using deno`가 찍혀 deno가 보안 검사를 직접 푼 것을 확인했다.",
    ],
    again: [
      "YouTube가 또 구조를 바꾸면 다시 막힐 수 있다. 그때는 우회 방법부터 찾지 말고, 먼저 업데이트부터 한다.",
      { code: "uv pip install --python .venv-dl/bin/python -U \"yt-dlp[default]\" deno" },
      "· 그래도 안 되면 `yt-dlp -v`로 `JS runtimes:` 줄에 deno가 잡히는지 확인한다.",
    ],
    lesson: [
      "· 도구가 갑자기 안 되면 우회 방법보다 **버전부터** 확인한다. 이번에는 오래된 Python이 업데이트를 막고 있던 게 진짜 원인이었다.",
      "· 시스템 Python을 건드리지 않고 **용도별 가상환경을 따로 만들면** 기존 작업을 망가뜨리지 않고 새 버전을 쓸 수 있다.",
      "· 임시 방편은 기록해 두지 않으면 다음에도 같은 자리에서 막힌다. 그래서 이 오답노트를 시작했다.",
    ],
    note: "받은 영상은 분석·레퍼런스용으로만 쓰고 그대로 다시 올리지 않는다. 다운로드는 YouTube 약관에 걸릴 수 있으니 저작권과 약관을 지키는 범위에서만 쓴다.",
  },
];
