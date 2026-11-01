const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function group(name, choices) {
  const tabs = choices.map(choice => ({
    dataset: { tab: `${name}-${choice}` }, attributes: {}, events: {},
    setAttribute(key, value) { this.attributes[key] = value; },
    addEventListener(key, fn) { this.events[key] = fn; },
    focus() { this.focused = true; }
  }));
  const panels = tabs.map(tab => ({
    id: tab.dataset.tab, hidden: false, attributes: {},
    setAttribute(key, value) { this.attributes[key] = value; }
  }));
  const list = {
    hidden: true, setAttribute() {}, querySelectorAll: () => tabs
  };
  return {
    tabs, panels, list,
    querySelector: () => list,
    querySelectorAll: () => panels
  };
}
const method = group('method', ['zip', 'git']);
const zipOS = group('zip', ['android', 'macos', 'windows']);
const gitOS = group('git', ['android', 'macos', 'windows']);
vm.runInNewContext(fs.readFileSync('assets/tabs.js', 'utf8'), {
  document: { querySelectorAll: () => [method, zipOS, gitOS] }
});
for (const g of [method, zipOS, gitOS]) {
  assert.equal(g.list.hidden, false);
  assert.deepEqual(g.panels.map(p => p.hidden), g.panels.map((_, i) => i !== 0));
  assert.equal(g.tabs[0].attributes['aria-selected'], 'true');
}
zipOS.tabs[1].events.click();
assert.equal(zipOS.panels[1].hidden, false);
assert.equal(gitOS.panels[0].hidden, false);
method.tabs[1].events.click();
assert.equal(method.panels[0].hidden, true);
assert.equal(method.panels[1].hidden, false);
method.tabs[0].events.click();
assert.equal(zipOS.panels[1].hidden, false);
let prevented = false;
zipOS.tabs[1].events.keydown({ key: 'End', preventDefault() { prevented = true; } });
assert.equal(prevented, true);
assert.equal(zipOS.tabs[2].focused, true);
assert.equal(zipOS.tabs[2].tabIndex, 0);
zipOS.tabs[2].events.keydown({ key: 'ArrowRight', preventDefault() {} });
assert.equal(zipOS.panels[0].hidden, false);
console.log('Nested tabs, independent state, ARIA, and keyboard navigation: OK');
