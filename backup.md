---
title: 백업과 복원
description: Koofr, Firebase Realtime Database, Google Drive에 자료를 보관합니다.
---
## 백업 전 공통 확인

백업 대상 방과 범위를 확인하고, 업로드 후 목록에 새 백업이 표시되는지 확인하세요. 복원 전에는 현재 자료의 별도 백업을 남겨 두세요.

| 서비스 | 준비할 것 | 작성 상태 |
| --- | --- | --- |
| Koofr | 원본 Core의 Koofr 연결 설정 | 상세 설정 화면 확인 예정 |
| Firebase Realtime Database | Firebase 프로젝트·이메일 로그인·DB 주소 | 연결 개요 작성 |
| Google Drive | Cloud 프로젝트·Drive API·OAuth 클라이언트 ID | 연결 개요 작성 |

## Koofr

Koofr는 Core 원본의 백업 기능을 사용합니다. 클라우드 백업 화면에서 Koofr를 선택하고, 연결 후 백업 대상 방을 선택합니다.

**계정 연결 방법과 입력 항목은 실제 화면 확인 후 추가합니다.** Firebase나 Drive의 인증 정보를 Koofr 입력칸에 넣지 마세요.

## Firebase Realtime Database

1. Firebase 프로젝트를 준비합니다.
2. Authentication에서 이메일/비밀번호 로그인을 설정하고 사용할 계정을 준비합니다.
3. Realtime Database를 만들고 HTTPS 데이터베이스 주소를 확인합니다.
4. 클라우드 백업의 Firebase 설정에 Web API Key, DB 주소, 로그인 이메일을 입력합니다.
5. 연결 후 작은 백업으로 업로드와 목록 조회를 확인합니다.

Web API Key만으로 접근을 보호하는 구조가 아닙니다. **로그인 계정과 Realtime Database 보안 규칙**이 접근을 제한하도록 설정해야 합니다. 누구나 읽고 쓰는 공개 규칙은 사용하지 마세요.

App Check를 적용한 경우에는 Web App ID와 등록된 App Check 디버그 토큰이 추가로 필요합니다. 디버그 토큰은 공개하지 마세요. 백업 JSON은 별도 암호화 없이 저장됩니다.

> 프로젝트 생성 화면, 계정별 보안 규칙, App Check 설정은 다음 수정에서 실제 저장 경로와 함께 설명합니다. 현재 초안만으로 보안 규칙을 임의 설정하지 마세요.

## Google Drive

1. Google Cloud 프로젝트를 만들거나 선택합니다.
2. Google Drive API를 사용 설정합니다.
3. OAuth 동의 화면을 설정하고, 테스트 상태라면 사용할 계정을 테스트 사용자로 추가합니다.
4. 다음 범위를 추가합니다.

```text
https://www.googleapis.com/auth/drive.file
```

5. **웹 애플리케이션** 유형의 OAuth 클라이언트 ID를 만듭니다.
6. 승인된 JavaScript 원본에 아래 주소를 등록합니다.

```text
https://crack.wrtn.ai
```

7. 스크립트의 Drive 설정에 클라이언트 ID를 저장하고 Google 계정을 연결합니다. 클라이언트 보안 비밀번호는 입력하지 않습니다.

연결 후 `Wish-Core-Backups` 폴더가 생성됩니다. Drive 백업 삭제는 휴지통 이동으로 처리됩니다.

## 복원할 때

백업 목록에서 **방 이름·백업 시각·범위**를 확인합니다. 필요한 자료를 선택해 복원하고 원래 방의 자료를 다시 확인하세요. 복원 성공을 확인하기 전에 기존 백업을 지우지 마세요.
