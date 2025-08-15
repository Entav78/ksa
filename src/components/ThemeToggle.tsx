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
    <div className="bg-white dark:bg-gray-800 border dark:border-gray-600 text-gray-800 dark:text-white px-2 py-1 rounded-full shadow-md flex items-center gap-2 transition-colors">
      <span>🌞</span>
      <div
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
          isDark ? 'bg-gray-600 justify-end' : 'bg-gray-300 justify-start'
        }`}
        onClick={handleToggle}
      >
        <div className="w-5 h-5 bg-white rounded-full shadow-md" />
      </div>
      <span>🌙</span>
    </div>
  );
}
