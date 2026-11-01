# crack-help-page

Wish Core · HAP-GPT 한국어 사용설명서 1차 초안임.

## 구성

- `index.md`: 시작하기
- `core.md`: 기본 사용법
- `backup.md`: Koofr / Firebase Realtime Database / Google Drive
- `gpt.md`: GPT 전송과 보조 AI
- `bridge.md`: Android Termux·Windows PowerShell GPT 브리지
- `sources.md`: 근거 자료와 다음 작성 항목

GitHub Pages 기본 Jekyll을 사용함. 원고는 Markdown, 공통 화면은 `_layouts/default.html`, 스타일과 명령어 복사는 `assets/`에 있음. 별도 npm 설치나 번들러가 필요하지 않음.

## GitHub Pages 공개

저장소 Settings → Pages → Build and deployment에서 **Deploy from a branch**, **main / (root)**를 선택하고 저장함.

예상 공개 주소: https://eun033.github.io/crack-help-page/

현재 커밋만으로 Pages 활성화·배포 완료를 보장하지 않음. Pages 설정 후 GitHub Actions의 pages build and deployment 결과를 확인할 것.

## 수정 방법

해당 Markdown 파일의 본문을 수정함. 명령어는 fenced code block으로 작성하면 복사 버튼이 자동으로 붙음. 복사 권한이 거부되면 직접 선택해 복사할 수 있도록 안내함.

초안의 미확인 내용과 화면 보강 순서는 sources.md에 기록함.
