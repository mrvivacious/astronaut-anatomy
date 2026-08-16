// Shared nav (current page marked) and one-line footer.
(() => {
  const pages = [['index.html', 'Explore'], ['checklist.html', 'Checklist'], ['financials.html', 'Financials'], ['resources.html', 'Resources']];
  const here = location.pathname.split('/').pop() || 'index.html';
  const el = (tag, props = {}, text = '') => Object.assign(document.createElement(tag), props, text ? { textContent: text } : {});

  const nav = document.getElementById('navbar');
  if (nav) {
    const toggle = document.getElementById('dark-mode-toggle');
    const links = el('div', { className: 'links' });
    pages.forEach(([href, label]) => {
      const a = el('a', { href }, label);
      if (href === here) a.setAttribute('aria-current', 'page');
      links.appendChild(a);
    });
    links.appendChild(el('a', { href: 'https://github.com/mrvivacious/astronaut-anatomy', target: '_blank', rel: 'noopener' }, 'Source'));
    if (toggle) links.appendChild(toggle);
    const bar = el('nav', { className: 'site-nav' });
    bar.setAttribute('aria-label', 'Main');
    bar.append(el('a', { className: 'brand', href: 'index.html' }, 'Astronaut Anatomy'), links);
    nav.replaceChildren(bar);
  }

  const footer = el('footer', { className: 'site-footer' });
  footer.innerHTML = '<p>Data: Wikipedia, NASA. Trends, not a template. Want to contribute? <a href="https://github.com/mrvivacious/astronaut-anatomy/issues" target="_blank" rel="noopener">Issues/ideas</a></p>';
  document.body.appendChild(footer);
})();
