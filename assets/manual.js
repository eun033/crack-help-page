document.querySelectorAll('pre').forEach((pre) => {
  const code = pre.querySelector('code');
  if (!code) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  button.textContent = '복사';
  button.setAttribute('aria-label', '이 명령어 블록 전체 복사');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      document.getElementById('copy-status').textContent = '명령어를 복사했습니다.';
      setTimeout(() => { document.getElementById('copy-status').textContent = ''; }, 2500);
    } catch {
      document.getElementById('copy-status').textContent = '자동 복사가 안 됩니다. 명령어를 길게 누르거나 드래그해 직접 복사해 주세요.';
    }
  });
  pre.prepend(button);
});
