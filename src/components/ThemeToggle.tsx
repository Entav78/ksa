import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      setIsDark(false);
    }
  }, []);

  function handleToggle() {
    const newTheme = isDark ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  }

  return (
    <div
      className="
        bg-background text-text border border-border
        px-2 py-1 rounded-full shadow-md
        flex items-center gap-2 transition-colors
      "
    >
      <span aria-hidden>🌞</span>

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Bytt tema"
        onClick={handleToggle}
        className={`
          w-14 h-7 rounded-full p-1
          flex items-center ${isDark ? 'justify-end' : 'justify-start'}
          bg-hover
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-primary/50
        `}
      >
        <span
          aria-hidden
          className="
            w-5 h-5 rounded-full
            bg-background border border-border
            shadow-md
            transition-transform
          "
        />
      </button>

      <span aria-hidden>🌙</span>
    </div>
  );
}
