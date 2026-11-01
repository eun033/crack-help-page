---
title: GPT 브리지
description: ZIP·Git 설치 방식을 고른 뒤 운영체제에 맞는 안내를 선택함.
---
<p><strong>ZIP·Git 중 하나</strong>를 선택한 뒤 운영체제를 고르면 됨. 현재 설치 안내가 제공되는 환경은 <strong>Android·Termux</strong>임. macOS·Windows는 지원 준비 중임.</p>
<noscript><p>JavaScript가 꺼져 있어 모든 안내를 펼쳐 표시함. 아래 운영체제 제목을 확인하고 해당 절차만 사용할 것.</p></noscript>
<div class="guide-tabs" data-tabs><div class="guide-tab-list" data-tab-list aria-label="설치 방식" hidden><button type="button" id="bridge-method-tab-git" data-tab="bridge-method-panel-git">Git 설치</button><button type="button" id="bridge-method-tab-zip" data-tab="bridge-method-panel-zip">ZIP 설치</button></div><section id="bridge-method-panel-git" data-tab-panel aria-labelledby="bridge-method-tab-git"><div class="guide-tabs" data-tabs><div class="guide-tab-list" data-tab-list aria-label="GIT 설치 운영체제" hidden><button type="button" id="git-os-tab-android" data-tab="git-os-panel-android">Android (AOS)</button><button type="button" id="git-os-tab-macos" data-tab="git-os-panel-macos">macOS · 준비 중</button><button type="button" id="git-os-tab-windows" data-tab="git-os-panel-windows">Windows · 준비 중</button></div><section id="git-os-panel-android" data-tab-panel aria-labelledby="git-os-tab-android"><h2>Android · Termux</h2><h3>1. 준비하기</h3><ul><li>Android용 Termux</li><li>Tampermonkey가 동작하는 브라우저와 HAP-GPT</li><li>연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스</li></ul><p>브리지는 같은 기기의 <code>127.0.0.1</code>에서 실행됨. 제작자의 계정을 함께 쓰는 구조가 아님. HAP-GPT와 기존 Core·Cloud Patch·HAP을 동시에 켜지 말 것.</p><h3>2. Git 설치</h3><p><strong>ZIP·Git 중 하나만 선택</strong>하면 됨. Termux에서 명령을 한 줄씩 실행함. 복사 버튼은 블록 전체를 복사함. Node.js 22 이상이 필요함.</p><h3>Git으로 설치</h3><p>공개 배포 저장소를 clone해서 설치하는 방식임. GitHub 계정은 필요 없음.</p><pre><code class="language-bash">pkg update
pkg install git nodejs-lts
cd ~
git clone https://github.com/eun033/RpCleanerEpub.git
cd RpCleanerEpub/main/wish-core-hap-gpt/termux-bridge
bash install-termux.sh
</code></pre><h3>Git 설치판 업데이트</h3><p>진행 중인 작업이 끝나면 관리 화면의 <strong>서버 → Git 업데이트</strong>를 사용함. 직접 갱신하려면 아래 명령을 사용함.</p><pre><code class="language-bash">cd ~/RpCleanerEpub
git pull --ff-only origin main
cd main/wish-core-hap-gpt/termux-bridge
bash update-termux.sh
bash ~/local-gpt-subscription-bridge/start.sh
</code></pre><p>이 경로는 공개 배포 저장소를 받은 경우에 해당함. 예전 개발 저장소 설치본이나 ZIP 설치본의 경로와 혼합하지 말 것.</p>
<h3>3. 최초 연결</h3>
<ol>
<li>Termux에 표시된 <code>http://127.0.0.1:17446/#pair=…</code> 전체 주소를 같은 폰의 브라우저에서 엶.</li>
<li><strong>Continue with ChatGPT</strong>로 본인 계정을 연결함.</li>
<li><strong>사용 가능한 모델 확인</strong>을 누름.</li>
<li><strong>확장 프로그램용 연결 주소 복사</strong>를 누름.</li>
<li>HAP-GPT에서 <code>설정 → 보조 AI 연결 → 연결 · 모델</code>을 열고 <strong>ChatGPT 구독</strong>을 선택함.</li>
<li><strong>Termux 연결 주소</strong>에 복사한 주소를 붙여 넣음. 공개 배포본 0.1.4는 단일 주소 입력 방식임.</li>
<li>모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장함.</li>
<li>연결 테스트가 성공했는지 확인함.</li>
</ol>
<p><strong>pair가 포함된 연결 주소는 비밀값임.</strong> GitHub·게시글·스크린샷에 공개하지 말 것.</p>
<h3>4. 평소 실행과 중지</h3>
<p>휴대폰을 재시작했거나 서버를 껐다면 Termux에서 아래 명령으로 실행함.</p>
<pre><code class="language-bash">bash ~/local-gpt-subscription-bridge/start.sh
</code></pre>
<p>중지는 Termux에서 <strong>Ctrl+C</strong>임. Android가 서버를 종료하지 않도록 Termux의 백그라운드 실행 설정도 확인할 것.</p>
<p>서버 재시작 버튼은 파일을 업데이트하지 않음. 업데이트는 위에서 선택한 설치 방식에 맞는 버튼을 사용함.</p>
<h3>5. 240초 시간 초과가 났다면</h3>
<p>HAP-GPT의 대기가 끝나도 브리지 작업은 계속될 수 있음.</p>
<ol><li>브리지의 <strong>최근 작업</strong>에서 해당 작업을 확인함.</li><li><strong>완료</strong>가 되면 오류가 난 원래 방으로 돌아감.</li><li><strong>다시 시도</strong>를 한 번 누름.</li></ol>
<p>조건이 같은 경우 저장된 요청 번호로 기존 결과를 다시 조회함. 방·원문·모델 등이 바뀌면 결과가 적용되지 않을 수 있음. 결과 검증에 실패하면 사유 표시 후 새 보정 요청이 생길 수 있음.</p>
<h3>자주 보는 문제</h3>
<table><thead><tr><th>증상</th><th>먼저 확인할 것</th></tr></thead><tbody>
<tr><td>브리지 연결 안 됨</td><td>Termux 서버, 연결 주소, 포트, pair</td></tr>
<tr><td>LOGIN_REQUIRED</td><td>관리 화면에서 다시 로그인</td></tr>
<tr><td>MODEL_UNAVAILABLE</td><td>모델 목록 갱신 후 사용 가능한 모델 선택</td></tr>
<tr><td>PLAN_PERMISSION</td><td>계정·워크스페이스의 사용 권한 확인</td></tr>
<tr><td>429</td><td>사용 한도 확인 후 대기</td></tr>
<tr><td>INTERRUPTED</td><td>작업 중 서버 종료 여부 확인; 자동 재전송되지 않음</td></tr>
<tr><td>이전 요청이 새 작업을 막음</td><td>보조 AI 연결의 대기 요청 확인; 재사용 불가한 요청만 폐기</td></tr>
</tbody></table>
<p>관리 화면의 호출량은 로컬 집계임. 공식 잔여 한도는 ChatGPT 공식 화면에서 확인할 것.</p>
</section><section id="git-os-panel-macos" data-tab-panel aria-labelledby="git-os-tab-macos"><h2>macOS · 지원 준비 중</h2><p>macOS용 GIT 설치는 준비 중임. 배포 파일·실행 환경·설치 및 업데이트 절차를 검증한 뒤 안내할 예정임.</p><p>Android용 <code>pkg</code> 명령과 <code>install-termux.sh</code>를 그대로 실행하지 말 것.</p></section><section id="git-os-panel-windows" data-tab-panel aria-labelledby="git-os-tab-windows"><h2>Windows · 지원 준비 중</h2><p>Windows용 GIT 설치는 준비 중임. 배포 파일·실행 환경·설치 및 업데이트 절차를 검증한 뒤 안내할 예정임.</p><p>Android용 <code>pkg</code> 명령과 <code>install-termux.sh</code>를 그대로 실행하지 말 것.</p></section></div></section><section id="bridge-method-panel-zip" data-tab-panel aria-labelledby="bridge-method-tab-zip"><div class="guide-tabs" data-tabs><div class="guide-tab-list" data-tab-list aria-label="ZIP 설치 운영체제" hidden><button type="button" id="zip-os-tab-android" data-tab="zip-os-panel-android">Android (AOS)</button><button type="button" id="zip-os-tab-macos" data-tab="zip-os-panel-macos">macOS · 준비 중</button><button type="button" id="zip-os-tab-windows" data-tab="zip-os-panel-windows">Windows · 준비 중</button></div><section id="zip-os-panel-android" data-tab-panel aria-labelledby="zip-os-tab-android"><h2>Android · Termux</h2><h3>1. 준비하기</h3><ul><li>Android용 Termux</li><li>Tampermonkey가 동작하는 브라우저와 HAP-GPT</li><li>연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스</li></ul><p>브리지는 같은 기기의 <code>127.0.0.1</code>에서 실행됨. 제작자의 계정을 함께 쓰는 구조가 아님. HAP-GPT와 기존 Core·Cloud Patch·HAP을 동시에 켜지 말 것.</p><h3>2. ZIP 설치</h3><p><strong>ZIP·Git 중 하나만 선택</strong>하면 됨. Termux에서 명령을 한 줄씩 실행함. 복사 버튼은 블록 전체를 복사함. Node.js 22 이상이 필요함.</p><h3>ZIP으로 설치</h3><p>Git 설치 없이 공개 ZIP을 받는 방식임. 아래는 확인한 공개 배포본 <strong>0.1.4</strong> 기준임. 먼저 <a href="https://github.com/eun033/RpCleanerEpub/tree/main/main/wish-core-hap-gpt">공개 배포 폴더</a>에서 최신 버전을 확인할 것.</p><pre><code class="language-bash">pkg update
pkg install nodejs-lts unzip curl
cd ~
curl -L -o hap-gpt.zip https://raw.githubusercontent.com/eun033/RpCleanerEpub/refs/heads/main/main/wish-core-hap-gpt/Wish_RP_Core_HAP_GPT_0.1.4.zip
unzip -o hap-gpt.zip
cd wish-core-hap-gpt/termux-bridge
bash install-termux.sh
</code></pre><p>설치 후 업데이트는 관리 화면의 <strong>서버 → ZIP 업데이트</strong>를 사용함. 기존 브리지가 0.2.6 미만이면 공개 README의 첫 수동 갱신 안내를 확인할 것.</p>
<h3>3. 최초 연결</h3>
<ol>
<li>Termux에 표시된 <code>http://127.0.0.1:17446/#pair=…</code> 전체 주소를 같은 폰의 브라우저에서 엶.</li>
<li><strong>Continue with ChatGPT</strong>로 본인 계정을 연결함.</li>
<li><strong>사용 가능한 모델 확인</strong>을 누름.</li>
<li><strong>확장 프로그램용 연결 주소 복사</strong>를 누름.</li>
<li>HAP-GPT에서 <code>설정 → 보조 AI 연결 → 연결 · 모델</code>을 열고 <strong>ChatGPT 구독</strong>을 선택함.</li>
<li><strong>Termux 연결 주소</strong>에 복사한 주소를 붙여 넣음. 공개 배포본 0.1.4는 단일 주소 입력 방식임.</li>
<li>모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장함.</li>
<li>연결 테스트가 성공했는지 확인함.</li>
</ol>
<p><strong>pair가 포함된 연결 주소는 비밀값임.</strong> GitHub·게시글·스크린샷에 공개하지 말 것.</p>
<h3>4. 평소 실행과 중지</h3>
<p>휴대폰을 재시작했거나 서버를 껐다면 Termux에서 아래 명령으로 실행함.</p>
<pre><code class="language-bash">bash ~/local-gpt-subscription-bridge/start.sh
</code></pre>
<p>중지는 Termux에서 <strong>Ctrl+C</strong>임. Android가 서버를 종료하지 않도록 Termux의 백그라운드 실행 설정도 확인할 것.</p>
<p>서버 재시작 버튼은 파일을 업데이트하지 않음. 업데이트는 위에서 선택한 설치 방식에 맞는 버튼을 사용함.</p>
<h3>5. 240초 시간 초과가 났다면</h3>
<p>HAP-GPT의 대기가 끝나도 브리지 작업은 계속될 수 있음.</p>
<ol><li>브리지의 <strong>최근 작업</strong>에서 해당 작업을 확인함.</li><li><strong>완료</strong>가 되면 오류가 난 원래 방으로 돌아감.</li><li><strong>다시 시도</strong>를 한 번 누름.</li></ol>
<p>조건이 같은 경우 저장된 요청 번호로 기존 결과를 다시 조회함. 방·원문·모델 등이 바뀌면 결과가 적용되지 않을 수 있음. 결과 검증에 실패하면 사유 표시 후 새 보정 요청이 생길 수 있음.</p>
<h3>자주 보는 문제</h3>
<table><thead><tr><th>증상</th><th>먼저 확인할 것</th></tr></thead><tbody>
<tr><td>브리지 연결 안 됨</td><td>Termux 서버, 연결 주소, 포트, pair</td></tr>
<tr><td>LOGIN_REQUIRED</td><td>관리 화면에서 다시 로그인</td></tr>
<tr><td>MODEL_UNAVAILABLE</td><td>모델 목록 갱신 후 사용 가능한 모델 선택</td></tr>
<tr><td>PLAN_PERMISSION</td><td>계정·워크스페이스의 사용 권한 확인</td></tr>
<tr><td>429</td><td>사용 한도 확인 후 대기</td></tr>
<tr><td>INTERRUPTED</td><td>작업 중 서버 종료 여부 확인; 자동 재전송되지 않음</td></tr>
<tr><td>이전 요청이 새 작업을 막음</td><td>보조 AI 연결의 대기 요청 확인; 재사용 불가한 요청만 폐기</td></tr>
</tbody></table>
<p>관리 화면의 호출량은 로컬 집계임. 공식 잔여 한도는 ChatGPT 공식 화면에서 확인할 것.</p>
</section><section id="zip-os-panel-macos" data-tab-panel aria-labelledby="zip-os-tab-macos"><h2>macOS · 지원 준비 중</h2><p>macOS용 ZIP 설치는 준비 중임. 배포 파일·실행 환경·설치 및 업데이트 절차를 검증한 뒤 안내할 예정임.</p><p>Android용 <code>pkg</code> 명령과 <code>install-termux.sh</code>를 그대로 실행하지 말 것.</p></section><section id="zip-os-panel-windows" data-tab-panel aria-labelledby="zip-os-tab-windows"><h2>Windows · 지원 준비 중</h2><p>Windows용 ZIP 설치는 준비 중임. 배포 파일·실행 환경·설치 및 업데이트 절차를 검증한 뒤 안내할 예정임.</p><p>Android용 <code>pkg</code> 명령과 <code>install-termux.sh</code>를 그대로 실행하지 말 것.</p></section></div></section></div>
