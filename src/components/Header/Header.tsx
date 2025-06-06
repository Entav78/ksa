import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ksaLogo from '@/assets/img/ksaLogoResized.png';
import { toggleTheme } from '@/utils/themeToggle';
import { ThemeToggle } from '@/components/ThemeToggle';

import './header.scss';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function handleThemeToggle() {
    toggleTheme();
    setIsDark((prev) => !prev);
  }

  return (
    <>
      <header className="header relative z-50 text-white p-4 flex justify-between items-center">
        <Link to="/">
          <img
            src={ksaLogo}
            alt="KSA logo"
            className="h-20 w-auto rounded-full"
          />
        </Link>

        <button
          className="border px-3 py-1 rounded text-black dark:text-white"
          onClick={() => {
            console.log('Meny clicked');
            setMenuOpen(!menuOpen);
          }}
        >
          Meny
        </button>
      </header>

      {/* Slide-in sidebar menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[var(--bg-color)] text-[var(--text-color)] transform transition-transform duration-300 shadow-lg border
 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="menu"
      >
        <div className="flex justify-between items-center px-4 pt-6 pb-4 border-b border-white">
          <span className="text-lg font-semibold">Meny</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Lukk meny">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-lg pt-20">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Hjem
            </Link>
          </li>
          <li>
            <Link to="/treningstider" onClick={() => setMenuOpen(false)}>
              Treningstider
            </Link>
          </li>
          <li>
            <Link to="/ny-i-klubben" onClick={() => setMenuOpen(false)}>
              Ny i klubben
            </Link>
          </li>
          <li>
            <Link to="/skagerak-swim" onClick={() => setMenuOpen(false)}>
              Skagerak Swim
            </Link>
          </li>
          <li>
            <Link to="/sponsorer" onClick={() => setMenuOpen(false)}>
              Sponsorer
            </Link>
          </li>
          <li>
            <Link to="/kurs" onClick={() => setMenuOpen(false)}>
              Svømmekurs
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
