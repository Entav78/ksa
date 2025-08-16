import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { open: boolean; onClose: () => void };

export function MenuOverlay({ open, onClose }: Props) {
  if (!open) return null;

  const location = useLocation();
  const isMobile = useIsMobile();

  const linkBase = `
    block rounded px-1
    no-underline hover:underline underline-offset-4
    text-text hover:text-primary
    transition
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
  `;

  const isActive = (path: string) => location.pathname === path;

  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      {/* bakgrunn */}
      <button
        className="absolute inset-0 bg-[var(--overlay-color)] backdrop-blur-sm"
        onClick={onClose}
        aria-label="Lukk meny"
      />

      {/* panel: full bredde på mobil, smal panel på større skjermer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`
          absolute right-0 top-0 h-screen
          w-full sm:max-w-sm
          bg-background text-text
          shadow-xl border-l border-border
          transform transition-transform duration-300
          ${isMobile ? 'animate-fadeIn' : 'translate-x-0'}
        `}
      >
        <div
          className="
            flex justify-between items-center px-4 pt-6 pb-4
            border-b border-border
          "
        >
          <span className="text-lg font-semibold">Meny</span>
          <button
            onClick={onClose}
            aria-label="Lukk meny"
            className="
              p-2 rounded
              hover:bg-hover
              transition
              focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
            "
          >
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

        <nav className="flex flex-col px-4 py-6 space-y-4 text-lg">
          <Link
            to="/"
            onClick={onClose}
            className={`${linkBase} ${isActive('/') ? 'font-semibold' : ''}`}
          >
            Hjem
          </Link>

          <Link
            to="/treningstider"
            onClick={onClose}
            className={`${linkBase} ${
              isActive('/treningstider') ? 'font-semibold' : ''
            }`}
          >
            Treningstider
          </Link>

          <Link
            to="/ny-i-klubben"
            onClick={onClose}
            className={`${linkBase} ${
              isActive('/ny-i-klubben') ? 'font-semibold' : ''
            }`}
          >
            Ny i klubben
          </Link>

          <Link
            to="/kurs"
            onClick={onClose}
            className={`${linkBase} ${
              isActive('/kurs') ? 'font-semibold' : ''
            }`}
          >
            Svømmeopplæring
          </Link>
        </nav>
      </aside>
    </div>,
    document.body
  );
}
