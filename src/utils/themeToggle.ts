// src/utils/themeToggle.ts
export function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  if (isDark) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

export function loadThemePreference() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.classList.toggle('dark', saved === 'dark');
  } else {
    // fallback: system preference
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }
}
