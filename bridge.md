---
title: GPT 브리지
description: ZIP·Git 설치 방식을 고른 뒤 운영체제에 맞는 안내를 선택함.
---
<p><strong>ZIP·Git 중 하나</strong>를 선택한 뒤 운영체제를 고르면 됨. Git과 ZIP 모두 <strong>Android·Termux와 Windows·PowerShell</strong> 안내를 제공함. macOS는 지원 준비 중임.</p>
<blockquote><p><strong>HAP-GPT 0.1.9</strong>에서는 <code>+</code>로 이름을 붙인 GPT 브리지를 최대 5개까지 저장할 수 있음. 선택한 칩에는 체크가 표시되고, 연결 후 Android는 <strong>A</strong>, macOS는 <strong>M</strong>, Windows·WSL은 <strong>W</strong>, 미감지·일반 Linux는 <strong>?</strong>로 표시됨. 기존 단일 주소는 <strong>기기 1</strong> 등으로 자동 이관되며 다른 AI 공급자 설정에는 영향이 없음.</p></blockquote>
<noscript><p>JavaScript가 꺼져 있어 모든 안내를 펼쳐 표시함. 아래 운영체제 제목을 확인하고 해당 절차만 사용할 것.</p></noscript>
<div class="guide-tabs" data-tabs><div class="guide-tab-list" data-tab-list aria-label="설치 방식" hidden><button type="button" id="bridge-method-tab-git" data-tab="bridge-method-panel-git">Git 설치</button><button type="button" id="bridge-method-tab-zip" data-tab="bridge-method-panel-zip">ZIP 설치</button></div><section id="bridge-method-panel-git" data-tab-panel aria-labelledby="bridge-method-tab-git"><div class="guide-tabs" data-tabs><div class="guide-tab-list" data-tab-list aria-label="GIT 설치 운영체제" hidden><button type="button" id="git-os-tab-android" data-tab="git-os-panel-android">Android (AOS)</button><button type="button" id="git-os-tab-macos" data-tab="git-os-panel-macos">macOS · 준비 중</button><button type="button" id="git-os-tab-windows" data-tab="git-os-panel-windows">Windows</button></div><section id="git-os-panel-android" data-tab-panel aria-labelledby="git-os-tab-android"><h2>Android · Termux</h2><h3>1. 준비하기</h3><ul><li>Android용 Termux</li><li>Tampermonkey가 동작하는 브라우저와 HAP-GPT</li><li>연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스</li></ul><p>브리지는 같은 기기의 <code>127.0.0.1</code>에서 실행됨. 제작자의 계정을 함께 쓰는 구조가 아님. HAP-GPT와 기존 Core·Cloud Patch·HAP을 동시에 켜지 말 것.</p><h3>2. Git 설치</h3><p><strong>ZIP·Git 중 하나만 선택</strong>하면 됨. Termux에서 명령을 한 줄씩 실행함. 복사 버튼은 블록 전체를 복사함. Node.js 22 이상이 필요함.</p><h3>Git으로 설치</h3><p>공개 배포 저장소를 clone해서 설치하는 방식임. GitHub 계정은 필요 없음.</p><pre><code class="language-bash">pkg update
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
<li><strong>+</strong>를 눌러 기기 이름을 입력함. GPT 브리지는 최대 5개까지 추가할 수 있음.</li>
<li>추가한 기기 칩을 선택하고 복사한 연결 주소를 붙여 넣음. 선택한 칩에는 체크가 표시됨.</li>
<li>모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장함.</li>
<li>연결 테스트가 성공하고 기기 칩에 Android를 뜻하는 <strong>A</strong>가 표시되는지 확인함.</li>
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
</section><section id="git-os-panel-macos" data-tab-panel aria-labelledby="git-os-tab-macos"><h2>macOS · 지원 준비 중</h2><p>macOS용 GIT 설치는 준비 중임. 배포 파일·실행 환경·설치 및 업데이트 절차를 검증한 뒤 안내할 예정임.</p><p>Android용 <code>pkg</code> 명령과 <code>install-termux.sh</code>를 그대로 실행하지 말 것.</p></section><section id="git-os-panel-windows" data-tab-panel aria-labelledby="git-os-tab-windows"><h2>Windows · PowerShell</h2><p>WSL이나 Ubuntu 없이 Windows에 Node.js를 직접 설치해 실행함. 브리지는 Node.js 표준 기능만 사용하므로 <code>npm install</code>은 필요 없음.</p><h3>1. 준비하기</h3><ul><li>Windows 10 또는 11과 <code>winget</code></li><li>Tampermonkey가 동작하는 PC 브라우저와 HAP-GPT</li><li>연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스</li></ul><p>시작 메뉴에서 <strong>PowerShell</strong> 또는 <strong>Windows 터미널</strong>을 엶. 관리자 권한은 보통 필요 없음. 먼저 <code>winget</code>을 확인함.</p><pre><code class="language-powershell">winget --version
</code></pre><p>명령을 찾지 못하면 Microsoft Store에서 <strong>앱 설치 관리자</strong>를 업데이트한 뒤 다시 확인함.</p><h3>2. Node.js와 Git 설치</h3><p>PowerShell에서 아래 명령을 차례로 실행함.</p><pre><code class="language-powershell">winget install --id OpenJS.NodeJS.LTS -e --source winget
winget install --id Git.Git -e --source winget
</code></pre><p>설치가 끝나면 PowerShell을 완전히 닫았다가 다시 열고 버전을 확인함.</p><pre><code class="language-powershell">node --version
git --version
</code></pre><p>Node.js는 <strong>v22 이상</strong>이어야 함. 별도 npm 패키지는 설치하지 않음.</p><h3>3. 공개 저장소 받기</h3><p>GitHub 계정 로그인 없이 공개 배포 저장소를 받을 수 있음.</p><pre><code class="language-powershell">Set-Location $HOME
git clone --depth 1 https://github.com/eun033/RpCleanerEpub.git
Set-Location "$HOME\RpCleanerEpub\main\wish-core-hap-gpt\termux-bridge"
</code></pre><p><code>RpCleanerEpub</code> 폴더가 이미 있다는 오류가 나오면 기존 폴더를 삭제하거나 다시 clone하지 말고 아래 업데이트 절차를 사용함.</p><h3>4. 브리지 최초 실행</h3><pre><code class="language-powershell">node .\src\server.mjs
</code></pre><p>정상 실행되면 <code>GPT 브리지 0.2.10</code>과 <code>http://127.0.0.1:17446/#pair=…</code> 형태의 관리 화면 주소가 표시됨. PowerShell 창을 닫으면 브리지도 종료됨.</p><p>Windows 방화벽 창이 나오면 공용 네트워크에는 허용하지 말 것. 브리지는 PC 내부의 <code>127.0.0.1</code>에서만 사용함.</p><h3>5. ChatGPT 로그인</h3><ol><li>표시된 관리 화면 주소 전체를 복사해 같은 PC의 브라우저에서 엶.</li><li><strong>Continue with ChatGPT</strong>로 본인 계정과 워크스페이스를 연결함.</li><li><strong>사용 가능한 모델 확인</strong>을 누름.</li><li><strong>확장 프로그램용 연결 주소 복사</strong>를 누름.</li></ol><p><code>pair</code>가 포함된 연결 주소는 비밀값임. GitHub·게시글·스크린샷에 공개하지 말 것.</p><h3>6. HAP-GPT 연결</h3><ol><li>기존 Core·Cloud Patch·HAP을 끄고 HAP-GPT만 켬.</li><li><code>설정 → 보조 AI 연결 → 연결 · 모델</code>에서 <strong>ChatGPT 구독</strong>을 선택함.</li><li><strong>+</strong>를 눌러 기기 이름을 입력함. GPT 브리지는 최대 5개까지 추가할 수 있음.</li><li>추가한 기기 칩을 선택하고 복사한 연결 주소를 붙여 넣음. 선택한 칩에는 체크가 표시됨.</li><li>모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장함.</li><li>연결 테스트가 성공하고 기기 칩에 Windows를 뜻하는 <strong>W</strong>가 표시되는지 확인함.</li></ol><h3>7. 다음 실행과 종료</h3><p>다음부터는 PowerShell에서 아래 한 줄로 실행함.</p><pre><code class="language-powershell">node "$HOME\RpCleanerEpub\main\wish-core-hap-gpt\termux-bridge\src\server.mjs"
</code></pre><p>종료는 실행 중인 PowerShell에서 <strong>Ctrl+C</strong>임.</p><h3>8. 업데이트</h3><p>먼저 실행 중인 서버를 <strong>Ctrl+C</strong>로 종료한 뒤 아래 명령을 실행함.</p><pre><code class="language-powershell">Set-Location "$HOME\RpCleanerEpub"
git pull --ff-only origin main
node "$HOME\RpCleanerEpub\main\wish-core-hap-gpt\termux-bridge\src\server.mjs"
</code></pre><p>계정·pair·작업 기록은 <code>C:\Users\사용자이름\.local-gpt-subscription-bridge</code>에 별도로 저장되므로 Git 업데이트로 사라지지 않음.</p><p>Windows 직접 실행에서는 관리 화면의 <strong>서버 재시작·업데이트</strong> 버튼이 비활성화될 수 있음. 인증·모델 조회·GPT 호출에는 영향이 없으며 재시작과 업데이트는 위 PowerShell 명령을 사용함.</p><h3>자주 보는 문제</h3><table><thead><tr><th>증상</th><th>먼저 확인할 것</th></tr></thead><tbody><tr><td><code>winget</code>을 찾지 못함</td><td>Microsoft Store의 앱 설치 관리자 업데이트</td></tr><tr><td>Node.js 버전이 22 미만</td><td>PowerShell을 다시 열고 LTS 설치 상태 확인</td></tr><tr><td><code>EADDRINUSE</code></td><td>이미 실행 중인 브리지 창이 있는지 확인</td></tr><tr><td>브리지 연결 안 됨</td><td>PowerShell 서버, 전체 연결 주소, 포트, pair 확인</td></tr></tbody></table></section></div></section><section id="bridge-method-panel-zip" data-tab-panel aria-labelledby="bridge-method-tab-zip"><div class="guide-tabs" data-tabs><div class="guide-tab-list" data-tab-list aria-label="ZIP 설치 운영체제" hidden><button type="button" id="zip-os-tab-android" data-tab="zip-os-panel-android">Android (AOS)</button><button type="button" id="zip-os-tab-macos" data-tab="zip-os-panel-macos">macOS · 준비 중</button><button type="button" id="zip-os-tab-windows" data-tab="zip-os-panel-windows">Windows</button></div><section id="zip-os-panel-android" data-tab-panel aria-labelledby="zip-os-tab-android"><h2>Android · Termux</h2><h3>1. 준비하기</h3><ul><li>Android용 Termux</li><li>Tampermonkey가 동작하는 브라우저와 HAP-GPT</li><li>연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스</li></ul><p>브리지는 같은 기기의 <code>127.0.0.1</code>에서 실행됨. 제작자의 계정을 함께 쓰는 구조가 아님. HAP-GPT와 기존 Core·Cloud Patch·HAP을 동시에 켜지 말 것.</p><h3>2. ZIP 설치</h3><p><strong>ZIP·Git 중 하나만 선택</strong>하면 됨. Termux에서 명령을 한 줄씩 실행함. 복사 버튼은 블록 전체를 복사함. Node.js 22 이상이 필요함.</p><h3>ZIP으로 설치</h3><p>Git 설치 없이 공개 ZIP을 받는 방식임. 아래는 확인한 공개 배포본 <strong>0.1.9</strong> 기준임. 먼저 <a href="https://github.com/eun033/RpCleanerEpub/tree/main/main/wish-core-hap-gpt">공개 배포 폴더</a>에서 최신 버전을 확인할 것.</p><pre><code class="language-bash">pkg update
pkg install nodejs-lts unzip curl
cd ~
curl -L -o hap-gpt.zip https://raw.githubusercontent.com/eun033/RpCleanerEpub/refs/heads/main/main/wish-core-hap-gpt/Wish_RP_Core_HAP_GPT_0.1.9.zip
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
<li><strong>+</strong>를 눌러 기기 이름을 입력함. GPT 브리지는 최대 5개까지 추가할 수 있음.</li>
<li>추가한 기기 칩을 선택하고 복사한 연결 주소를 붙여 넣음. 선택한 칩에는 체크가 표시됨.</li>
<li>모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장함.</li>
<li>연결 테스트가 성공하고 기기 칩에 Android를 뜻하는 <strong>A</strong>가 표시되는지 확인함.</li>
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
</section><section id="zip-os-panel-macos" data-tab-panel aria-labelledby="zip-os-tab-macos"><h2>macOS · 지원 준비 중</h2><p>macOS용 ZIP 설치는 준비 중임. 배포 파일·실행 환경·설치 및 업데이트 절차를 검증한 뒤 안내할 예정임.</p><p>Android용 <code>pkg</code> 명령과 <code>install-termux.sh</code>를 그대로 실행하지 말 것.</p></section><section id="zip-os-panel-windows" data-tab-panel aria-labelledby="zip-os-tab-windows"><h2>Windows · PowerShell</h2><p>Git을 설치하지 않고 공개 ZIP을 내려받아 실행하는 방식임. WSL이나 Ubuntu, <code>npm install</code>은 필요 없음.</p><h3>1. 준비하기</h3><ul><li>Windows 10 또는 11과 <code>winget</code></li><li>Tampermonkey가 동작하는 PC 브라우저와 HAP-GPT</li><li>연결 기능을 사용할 수 있는 본인의 ChatGPT 계정·워크스페이스</li></ul><p>시작 메뉴에서 <strong>PowerShell</strong> 또는 <strong>Windows 터미널</strong>을 엶. 관리자 권한은 보통 필요 없음.</p><pre><code class="language-powershell">winget --version
</code></pre><p>명령을 찾지 못하면 Microsoft Store에서 <strong>앱 설치 관리자</strong>를 업데이트한 뒤 다시 확인함.</p><h3>2. Node.js 설치</h3><pre><code class="language-powershell">winget install --id OpenJS.NodeJS.LTS -e --source winget
</code></pre><p>설치가 끝나면 PowerShell을 완전히 닫았다가 다시 열고 버전을 확인함. Node.js는 <strong>v22 이상</strong>이어야 함.</p><pre><code class="language-powershell">node --version
</code></pre><h3>3. 공개 ZIP 받기</h3><p>아래는 확인한 공개 배포본 <strong>0.1.9</strong> 기준임. 먼저 <a href="https://github.com/eun033/RpCleanerEpub/tree/main/main/wish-core-hap-gpt">공개 배포 폴더</a>에서 최신 파일명을 확인할 것.</p><pre><code class="language-powershell">$Version = "0.1.9"
$Archive = "$HOME\Wish_RP_Core_HAP_GPT_$Version.zip"
$Url = "https://raw.githubusercontent.com/eun033/RpCleanerEpub/refs/heads/main/main/wish-core-hap-gpt/Wish_RP_Core_HAP_GPT_$Version.zip"
Invoke-WebRequest -Uri $Url -OutFile $Archive
Expand-Archive -Path $Archive -DestinationPath $HOME -Force
Set-Location "$HOME\wish-core-hap-gpt\termux-bridge"
</code></pre><p>Git 설치판의 <code>RpCleanerEpub</code> 폴더와 ZIP 설치판의 <code>wish-core-hap-gpt</code> 폴더를 섞지 말 것.</p><h3>4. 브리지 최초 실행</h3><pre><code class="language-powershell">node .\src\server.mjs
</code></pre><p>정상 실행되면 <code>GPT 브리지 0.2.10</code>과 <code>http://127.0.0.1:17446/#pair=…</code> 형태의 관리 화면 주소가 표시됨. PowerShell 창을 닫으면 브리지도 종료됨.</p><p>Windows 방화벽 창이 나오면 공용 네트워크에는 허용하지 말 것. 브리지는 PC 내부의 <code>127.0.0.1</code>에서만 사용함.</p><h3>5. ChatGPT 로그인</h3><ol><li>표시된 관리 화면 주소 전체를 복사해 같은 PC의 브라우저에서 엶.</li><li><strong>Continue with ChatGPT</strong>로 본인 계정과 워크스페이스를 연결함.</li><li><strong>사용 가능한 모델 확인</strong>을 누름.</li><li><strong>확장 프로그램용 연결 주소 복사</strong>를 누름.</li></ol><p><code>pair</code>가 포함된 연결 주소는 비밀값임. GitHub·게시글·스크린샷에 공개하지 말 것.</p><h3>6. HAP-GPT 연결</h3><ol><li>기존 Core·Cloud Patch·HAP을 끄고 HAP-GPT만 켬.</li><li><code>설정 → 보조 AI 연결 → 연결 · 모델</code>에서 <strong>ChatGPT 구독</strong>을 선택함.</li><li><strong>+</strong>를 눌러 기기 이름을 입력함. GPT 브리지는 최대 5개까지 추가할 수 있음.</li><li>추가한 기기 칩을 선택하고 복사한 연결 주소를 붙여 넣음. 선택한 칩에는 체크가 표시됨.</li><li>모델 목록을 새로고침하고 모델·추론 강도를 선택해 저장함.</li><li>연결 테스트가 성공하고 기기 칩에 Windows를 뜻하는 <strong>W</strong>가 표시되는지 확인함.</li></ol><h3>7. 다음 실행과 종료</h3><pre><code class="language-powershell">node "$HOME\wish-core-hap-gpt\termux-bridge\src\server.mjs"
</code></pre><p>종료는 실행 중인 PowerShell에서 <strong>Ctrl+C</strong>임.</p><h3>8. ZIP 업데이트</h3><p>진행 중인 작업이 끝나면 서버를 <strong>Ctrl+C</strong>로 종료함. 공개 배포 폴더에서 최신 버전을 확인하고 아래 <code>$Version</code>을 바꿔 다시 내려받음.</p><pre><code class="language-powershell">$Version = "0.1.9"
$Archive = "$HOME\Wish_RP_Core_HAP_GPT_$Version.zip"
$Url = "https://raw.githubusercontent.com/eun033/RpCleanerEpub/refs/heads/main/main/wish-core-hap-gpt/Wish_RP_Core_HAP_GPT_$Version.zip"
Invoke-WebRequest -Uri $Url -OutFile $Archive
Expand-Archive -Path $Archive -DestinationPath $HOME -Force
node "$HOME\wish-core-hap-gpt\termux-bridge\src\server.mjs"
</code></pre><p>계정·pair·작업 기록은 <code>C:\Users\사용자이름\.local-gpt-subscription-bridge</code>에 별도로 저장되므로 ZIP을 덮어써도 사라지지 않음.</p><p>Windows 직접 실행에서는 관리 화면의 <strong>서버 재시작·ZIP 업데이트</strong> 버튼이 비활성화될 수 있음. 인증·모델 조회·GPT 호출에는 영향이 없으며 재시작과 업데이트는 위 PowerShell 명령을 사용함.</p><h3>자주 보는 문제</h3><table><thead><tr><th>증상</th><th>먼저 확인할 것</th></tr></thead><tbody><tr><td>ZIP 다운로드 실패</td><td>공개 배포 폴더의 최신 버전과 <code>$Version</code> 확인</td></tr><tr><td>Node.js 버전이 22 미만</td><td>PowerShell을 다시 열고 LTS 설치 상태 확인</td></tr><tr><td><code>EADDRINUSE</code></td><td>이미 실행 중인 브리지 창이 있는지 확인</td></tr><tr><td>브리지 연결 안 됨</td><td>PowerShell 서버, 전체 연결 주소, 포트, pair 확인</td></tr></tbody></table></section></div></section></div>
