import { Link } from 'react-router-dom';
import ksaLogo from '@/assets/img/ksaLogoResized.png';
import './header.scss';
import { toggleTheme } from '@/utils/themeToggle';
import { useEffect, useState } from 'react';

export function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const handleThemeToggle = () => {
    toggleTheme();
    setIsDark(!isDark);
  };
  return (
    <header className="relative bg-cover bg-center bg-[url('/img/header-bg.jpg')] h-40 md:h-48 flex justify-between items-center px-6 md:px-12 text-black dark:text-white">
      <div className="w-24"></div>

      <img src={ksaLogo} alt="KSA Logo" className="h-20 w-auto" />

      <nav className="z-10 flex flex-col gap-2 text-sm items-end">
        <div className="space-x-4 text-black dark:text-white font-semibold">
          <Link to="/">Hjem</Link>
          <Link to="/treningstider">Treningstider</Link>
        </div>
        <button
          onClick={handleThemeToggle}
          className="text-xs border border-current px-2 py-1 rounded hover:bg-surface/10"
        >
          {isDark ? '☀️ Lys modus' : '🌙 Mørk modus'}
        </button>
      </nav>
    </header>
  );
}
