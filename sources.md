---
title: 참고 자료와 작성 현황
description: 확인된 내용과 앞으로 보강할 내용을 구분해 기록함.
---
## 설명의 기준: 공개 배포 스크립트

- [Wish_RP_Core_HAP_GPT.user.js](https://github.com/eun033/RpCleanerEpub/blob/main/main/wish-core-hap-gpt/Wish_RP_Core_HAP_GPT.user.js)
- 확인 버전: **0.1.4** / 내장 Core: **2.0.5**
- 확인한 파일 blob SHA: `f16babf3a30ad4f742b9150a5d80a8c19b39c08e`

메뉴·설정 설명은 이 공개 파일의 UI 생성 함수와 처리 코드를 기준으로 대조했음. 개발 README의 최신 기능을 공개 배포본의 기능처럼 안내하지 않음. 실제 계정 로그인·AI 호출·Android 및 Windows 실기기 동작을 검증한 것은 아님.

| 확인 영역 | 코드 근거 |
| --- | --- |
| 자동정리 주기 | `U3.saveSettings`, `vSettings`: 인물 2~100턴, 기억은 두 배 |
| 기억·OOC·캐릭터 | `vMemory`, `mExtra`, `mChar`, 프리셋 저장 처리 |
| 주입 후보·AI 재검토 | `vMemory`, `vSettings`, 후보 선별 코드 |
| 방 복사·재구축·정리 | `vTools`, `vExternalRebuild` |
| 클라우드 백업 | `WishKoofr`, Firebase·Drive 패널과 요청 처리 |
| ChatGPT 구독 주소 | `ai(d)`: 단일 로컬 브리지 연결 주소 입력 |

## 브리지 설치의 보조 자료

브리지 서버는 별도 프로그램이므로 설치·실행 안내는 아래 자료를 함께 참고함.

- [공개 배포 ZIP·Git 설치 README](https://github.com/eun033/RpCleanerEpub/blob/main/main/wish-core-hap-gpt/README.md)
- [공개 브리지 README](https://github.com/eun033/RpCleanerEpub/blob/main/main/wish-core-hap-gpt/termux-bridge/README.md)
- [GPT 브리지 디시용 HTML](https://github.com/eun033/gpt-codex-work/blob/wish-core-patch/work-hap-gpt/GPT브리지_디시사용법.html)

브리지 탭의 ZIP·Git 설치는 공개 배포 저장소 기준임. 확인한 ZIP은 0.1.4이며 개발 저장소 설치 경로와 혼합하지 않음. Windows 직접 실행은 공개 브리지 0.2.8의 Node.js 22 이상 조건과 `src/server.mjs` 경로를 확인해 작성함. Windows ZIP 안내는 공개 0.1.4 압축의 내부 경로와 필수 파일을 직접 확인해 작성함. macOS는 지원 준비 중으로 표시함.

## 게시글 참고 자료

**273481**의 본문을 확인해 Firebase 보안 규칙·인증 설정과 Drive OAuth 설정을 백업 문서에 반영했음. 나머지 두 게시글은 본문 확인 대기임.

- [디시 게시글 285899](https://gall.dcinside.com/mini/board/view/?id=wrtnw&no=285899)
- [디시 게시글 273481](https://gall.dcinside.com/mini/board/view/?id=wrtnw&no=273481)
- [디시 게시글 274924](https://gall.dcinside.com/mini/board/view/?id=wrtnw&no=274924)

## 다음 수정과 필요한 실제 화면

1. 기본 사용법: 확인 탭의 OFF·주입 시작, 기억 → 기타·OOC와 프리셋, 인물 → 캐릭터
2. 설정: 자동 정리의 인물·기억 주기, API 사용량 절약, 선택된 기억 AI 재검토
3. 자료 관리: 외부 AI로 재구축, 다른 방 자료 복사하기, 백업 · 복원
4. 서비스별 콘솔 설정과 공개 ZIP 설치 상세 안내

전달받은 원본 화면 캡처 가운데 설정·자료 관리 탭의 중복을 제외한 3장을 추가함. 실제 화면은 설치 버전에 따라 문구와 배치가 달라질 수 있음.

## 제공받은 화면과 추천 설정

첨부 화면의 표시 버전은 **Core 2.0.5 (+0.1.5 hap-gpt)**임. 확인 탭의 주입 시작, 기타·OOC와 기본 프리셋, 자료 관리의 재구축, 설정의 자동 정리·절약·AI 재검토 구성을 확인했음. 화면 예시에서 인물 6턴·기억 12턴으로 표시되는 것도 확인했음. 앞서 검토한 공개 코드 버전 0.1.4와는 구분함.

보조 AI의 Gemini 3.8·3.7 보통/낮음, GPT 5.6 Sol·6.1 Sol 낮음은 사용자가 제공한 추천 설정을 반영했음.
