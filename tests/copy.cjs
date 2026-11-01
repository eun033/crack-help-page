const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');

async function check(denied) {
  const status = { textContent: '' };
  const code = { textContent: 'pkg update\npkg install git nodejs-lts\n' };
  let click, copied, button;
  const pre = {
    querySelector: () => code,
    prepend: (value) => { button = value; }
  };
  vm.runInNewContext(readFileSync('assets/manual.js', 'utf8'), {
    document: {
      querySelectorAll: () => [pre],
      createElement: () => ({
        setAttribute() {},
        addEventListener: (_, handler) => { click = handler; }
      }),
      getElementById: () => status
    },
    navigator: { clipboard: { writeText: async (text) => {
      if (denied) throw Error('permission denied');
      copied = text;
    } } },
    setTimeout() {}
  });
  assert.equal(button.type, 'button');
  await click();
  if (denied) assert.match(status.textContent, /직접 복사/);
  else {
    assert.equal(copied, code.textContent);
    assert.match(status.textContent, /복사했음/);
  }
}
(async () => {
  await check(false);
  await check(true);
  console.log('Copy success, exact newlines, and denied permission: OK');
})().catch(error => { console.error(error); process.exitCode = 1; });
