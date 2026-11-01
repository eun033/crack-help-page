---
title: 백업과 복원
description: Koofr, Firebase Realtime Database, Google Drive에 자료를 보관합니다.
---
Firebase·Google Drive 설정은 [기존 클라우드 백업 안내](https://gall.dcinside.com/mini/board/view/?id=wrtnw&no=273481)를 참고했습니다.

## 백업 전 공통 확인

`자료 관리 → 백업 · 복원 → 클라우드 백업`에서 저장소를 선택합니다. Koofr·Firebase·Google Drive의 목록은 서로 별개입니다. 백업 대상 방과 범위를 확인하고, 업로드 후 새 백업이 표시되는지 확인하세요. 복원 전에는 현재 자료의 로컬 파일 백업도 남겨 두세요.

세 서비스 모두 버튼으로 실행하는 수동 백업입니다. Firebase Realtime Database를 사용해도 대화가 자동으로 실시간 백업되는 것은 아닙니다.

| 서비스 | 준비할 것 | 저장 위치 |
| --- | --- | --- |
| Koofr | Koofr 이메일·앱 비밀번호 | Wish-Core-Backups |
| Firebase Realtime Database | Firebase 프로젝트·이메일 로그인·DB 주소 | 로그인 UID별 데이터 |
| Google Drive | Cloud 프로젝트·Drive API·OAuth 클라이언트 ID | 내 드라이브 / Wish-Core-Backups |

## Koofr

1. `자료 관리 → 백업 · 복원 → 클라우드 백업`에서 **Koofr**를 선택합니다.
2. Koofr의 **Preferences → Password**에서 Wish용 **앱 비밀번호**를 만듭니다. 일반 로그인 비밀번호와 다릅니다.
3. **연결 설정**에서 가입 이메일과 앱 비밀번호를 입력합니다.
4. **연결 테스트** 후 **저장**합니다.
5. **방 골라 백업**으로 저장하고 **목록 새로고침**으로 확인합니다.

저장 위치는 `Koofr / Wish-Core-Backups`입니다. 수동 저장·불러오기 방식으로 자동 업로드·자동 삭제는 하지 않으며, 백업은 암호화하지 않은 JSON입니다. 연결 정보는 확장 프로그램에 저장되고 백업에는 포함되지 않습니다.

## Firebase Realtime Database

여기서 말하는 Firebase는 **백업용 Realtime Database**입니다. 보조 AI 공급자의 **Firebase AI Logic**과는 설정 목적이 다릅니다.

### 1. 프로젝트와 데이터베이스 만들기

[Firebase Console](https://console.firebase.google.com/)에서 프로젝트를 생성하거나 선택하고 **Realtime Database**를 만듭니다.

### 2. 계정별 보안 규칙 게시

Realtime Database의 **규칙**에 다음 내용을 넣고 게시합니다. 로그인한 사용자는 자신의 UID 아래 백업만 읽고 쓸 수 있습니다.

```json
{
  "rules": {
    "rpManagerBackupMeta": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    },
    "rpManagerBackupData": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
```

두 경로는 공개 스크립트의 백업 메타데이터·본문 저장 경로와 일치합니다. 기존 프로젝트에 다른 데이터용 규칙이 있다면 위 예제로 통째로 덮어쓰지 말고 두 경로를 기존 규칙에 합치세요. 상위 경로에 공개 허용 규칙이 남아 있으면 먼저 확인해야 합니다.

### 3. 백업 계정 만들기

**Authentication → 로그인 방법 → 이메일/비밀번호**를 켠 뒤, **사용자 추가**에서 백업용 계정을 만듭니다. Google 계정 로그인과 별도의 Firebase 인증 계정입니다.

### 4. HAP-GPT 연결

Firebase 백업 설정에 아래 값을 입력합니다.

| 입력값 | 확인 위치 |
| --- | --- |
| Web API Key | 프로젝트 설정 → 일반 → 내 앱의 firebaseConfig → apiKey |
| Realtime Database URL | Realtime Database 화면의 HTTPS 주소 |
| 로그인 이메일 | Authentication에 추가한 사용자 이메일 |

설정을 저장하고 연결할 때 비밀번호를 입력합니다. 비밀번호는 저장하지 않습니다. **방 골라 백업 → 목록 새로고침**으로 작은 백업부터 확인하세요.

App Check를 적용한 DB는 Web App ID와 등록된 디버그 토큰도 필요합니다. Web API Key 자체보다 로그인 계정과 DB 보안 규칙이 접근을 통제합니다. 백업 JSON은 별도 암호화 없이 저장됩니다.

## Google Drive

Google AI Studio API 키가 아닌 **OAuth 웹 클라이언트 ID**가 필요합니다.

1. [Google Cloud Console](https://console.cloud.google.com/)에서 프로젝트를 만들거나 선택합니다.
2. Google Drive API를 사용 설정합니다.
3. **Google Auth Platform → 대상**에서 앱이 테스트 상태라면 사용할 Google 계정을 테스트 사용자로 추가합니다.
4. **데이터 액세스**에 다음 범위를 추가합니다.

```text
https://www.googleapis.com/auth/drive.file
```

5. **API 및 서비스 → 사용자 인증 정보 → OAuth 클라이언트 ID**에서 **웹 애플리케이션** 유형을 선택합니다.
6. 승인된 JavaScript 원본에 아래 주소를 등록합니다.

```text
https://crack.wrtn.ai
```

7. HAP-GPT의 Drive 설정에 클라이언트 ID만 붙여 넣고 **설정 저장 → Google 계정 연결**을 누릅니다. 클라이언트 보안 비밀번호는 입력하지 않습니다.

이 방식은 JavaScript 콜백을 사용하므로 리디렉션 URI를 별도로 입력하지 않습니다. 로그인 창이 뜨지 않으면 Crack 사이트의 팝업 허용 상태를 확인하세요.

연결 후 `Wish-Core-Backups` 폴더가 생성됩니다. Drive 백업 삭제는 휴지통 이동으로 처리됩니다.

## 복원할 때

백업 목록에서 **방 이름·백업 시각·범위**를 확인합니다. 필요한 자료를 선택해 복원하고 원래 방의 자료를 다시 확인하세요. 복원 성공을 확인하기 전에 기존 백업을 지우지 마세요.
