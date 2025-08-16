import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ksaLogo from '@/assets/img/ksaLogoResized.png';
import { MenuOverlay } from '@/components/Header/MenuOverlay';
// import { ThemeToggle } from "@/components/ThemeToggle"; // valgfritt
import './header.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lås scroll når meny er åpen
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  return (
    <>
      {/* Fast header på toppen */}
      <header
        className="
        header
        fixed top-0 inset-x-0 z-50
        p-4 flex justify-between items-center
        text-gray-900 dark:text-white
      "
      >
        <Link to="/" className="shrink-0">
          <img
            src={ksaLogo}
            alt="KSA logo"
            className="h-20 w-auto rounded-full"
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> hvis du vil ha den i headeren */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Åpne meny"
            className="
        rounded border px-3 py-1
        bg-white/80 text-gray-900
        dark:bg-white/10 dark:text-white
        hover:bg-white dark:hover:bg-white/15
        transition
      "
          >
            Meny
          </button>
        </div>
      </header>

      {/* Spacer så innhold ikke havner bak fixed header */}
      <div className="h-24" />

      {/* Overlay meny (portal) */}
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
