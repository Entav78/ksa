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
  text-gray-900 dark:text-white
  hover:text-primary dark:hover:text-primary
  transition
  focus:outline-none focus-visible:ring-2
  focus-visible:ring-black/20 dark:focus-visible:ring-white/30
`;

  const isActive = (path: string) => location.pathname === path;

  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      {/* bakgrunn */}
      <button
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
          bg-white text-gray-900
          dark:bg-neutral-900 dark:text-white
          shadow-xl border-l
          border-black/10 dark:border-white/10
          transform transition-transform duration-300
          ${isMobile ? 'animate-fadeIn' : 'translate-x-0'}
        `}
      >
        <div
          className="
          flex justify-between items-center px-4 pt-6 pb-4
          border-b border-black/10 dark:border-white/10
        "
        >
          <span className="text-lg font-semibold">Meny</span>
          <button
            onClick={onClose}
            aria-label="Lukk meny"
            className="
              p-2 rounded
              hover:bg-black/5 dark:hover:bg-white/10
              transition
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
            to="/skagerak-swim"
            onClick={onClose}
            className={`${linkBase} ${
              isActive('/skagerak-swim') ? 'font-semibold' : ''
            }`}
          >
            Skagerak Swim
          </Link>

          <Link
            to="/sponsorer"
            onClick={onClose}
            className={`${linkBase} ${
              isActive('/sponsorer') ? 'font-semibold' : ''
            }`}
          >
            Sponsorer
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
