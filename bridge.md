---
title: GPT 브리지
description: 같은 Android 기기에서 Termux와 HAP-GPT를 연결합니다.
---
> 현재 안내는 Android용입니다. iPhone·iPad와 일반 PC에서 그대로 실행하는 설치법은 다루지 않습니다.

## 1. 준비하기

- Android용 Termux
- Tampermonkey가 동작하는 브라우저와 HAP-GPT
- 연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스

브리지는 같은 기기의 `127.0.0.1`에서 실행됩니다. 제작자의 계정을 함께 사용하는 구조가 아닙니다. HAP-GPT와 기존 Core·Cloud Patch·HAP을 동시에 켜지 마세요.

## 2. 설치 방법 고르기

처음 설치한다면 [공개 배포 폴더](https://github.com/eun033/RpCleanerEpub/tree/main/main/wish-core-hap-gpt)의 최신 README에서 ZIP·Git 설치 안내를 확인하세요. 예전 디시 문서의 ZIP 파일명에는 버전이 고정되어 있으므로, 최신 버전을 확인하지 않고 재사용하지 않습니다.

아래는 **개발 저장소의 wish-core-patch 브랜치를 사용하는 Git 설치법**입니다. 공개 ZIP 설치본과 폴더 경로가 다릅니다. 이미 설치했다면 다시 설치하기 전에 자신의 설치 방식을 확인하세요.

Termux에서 다음 명령을 **한 줄씩 실행**합니다. 복사 버튼은 블록 전체를 복사합니다.

```bash
pkg update
pkg install git nodejs-lts
cd ~
git clone --branch wish-core-patch https://github.com/eun033/gpt-codex-work.git
cd gpt-codex-work/work-hap-gpt/termux-bridge
bash install-termux.sh
```

Node.js 22 이상이 필요합니다. 설치가 끝나면 서버가 실행되고 관리 주소가 표시됩니다.

## 3. 최초 연결

1. Termux에 표시된 `http://127.0.0.1:17446/#pair=…` **전체 주소**를 같은 폰의 브라우저에서 엽니다.
2. **Continue with ChatGPT**로 본인 계정을 연결합니다.
3. **사용 가능한 모델 확인**을 누릅니다.
4. **확장 프로그램용 연결 주소 복사**를 누릅니다.
5. HAP-GPT에서 `설정 → 보조 AI 연결`을 열고 **ChatGPT 구독**을 선택합니다.
6. 주소 번호(`#1`~`#5`)를 고르고 복사한 주소를 붙여 넣습니다.
7. 모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장합니다.
8. 연결 테스트가 성공했는지 확인합니다.

**pair가 포함된 연결 주소는 비밀값입니다.** GitHub, 게시글, 스크린샷에 공개하지 마세요.

## 4. 평소 실행과 중지

휴대폰을 재시작했거나 서버를 껐다면 Termux에서 실행합니다.

```bash
bash ~/local-gpt-subscription-bridge/start.sh
```

중지는 Termux에서 **Ctrl+C**입니다. Android가 서버를 종료하지 않도록 Termux의 백그라운드 실행 설정도 확인하세요.

## 5. 업데이트

진행 중인 작업이 끝난 뒤 관리 화면에서 설치 방식에 맞는 **Git 업데이트** 또는 **ZIP 업데이트**를 사용합니다. 서버 재시작 버튼은 파일을 업데이트하지 않습니다.

위의 개발 저장소 Git 설치법을 사용한 경우에만 다음 경로가 맞습니다.

```bash
cd ~/gpt-codex-work
git pull --ff-only origin wish-core-patch
cd work-hap-gpt/termux-bridge
bash update-termux.sh
bash ~/local-gpt-subscription-bridge/start.sh
```

## 6. 240초 시간 초과가 났다면

HAP-GPT의 대기가 끝나도 브리지 작업은 계속될 수 있습니다.

1. 브리지의 **최근 작업**에서 해당 작업을 확인합니다.
2. **완료**가 되면 오류가 난 원래 방으로 돌아갑니다.
3. **다시 시도**를 한 번 누릅니다.

조건이 같은 경우 저장된 요청 번호로 기존 결과를 다시 조회합니다. 방·원문·모델 등이 바뀌면 결과가 적용되지 않을 수 있습니다. 결과 검증에 실패하면 사유 표시 후 새 보정 요청이 생길 수 있습니다.

## 자주 보는 문제

| 증상 | 먼저 확인할 것 |
| --- | --- |
| 브리지 연결 안 됨 | Termux 서버, 연결 주소, 포트, pair |
| LOGIN_REQUIRED | 관리 화면에서 다시 로그인 |
| MODEL_UNAVAILABLE | 모델 목록 갱신 후 사용 가능한 모델 선택 |
| PLAN_PERMISSION | 계정·워크스페이스의 사용 권한 확인 |
| 429 | 사용 한도 확인 후 대기 |
| INTERRUPTED | 작업 중 서버 종료 여부 확인; 자동 재전송되지 않음 |
| 이전 요청이 새 작업을 막음 | 보조 AI 연결의 대기 요청 확인; 재사용 불가한 요청만 폐기 |

관리 화면의 호출량은 로컬 집계입니다. 공식 잔여 한도는 ChatGPT 공식 화면에서 확인하세요.
