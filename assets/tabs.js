document.querySelectorAll('[data-tabs]').forEach((group) => {
  const list = group.querySelector(':scope > [data-tab-list]');
  const tabs = [...list.querySelectorAll('[data-tab]')];
  const panels = [...group.querySelectorAll(':scope > [data-tab-panel]')];
  function select(active) {
    tabs.forEach((tab) => {
      const selected = tab === active;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel) => { panel.hidden = panel.id !== active.dataset.tab; });
  }
  list.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', tab.dataset.tab);
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      select(tabs[next]);
      tabs[next].focus();
    });
  });
  panels.forEach((panel) => {
    panel.setAttribute('role', 'tabpanel');
    panel.tabIndex = 0;
  });
  select(tabs[0]);
  list.hidden = false;
});
