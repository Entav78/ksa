export function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

export function loadThemePreference() {
  const saved = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', saved || 'light');
}
