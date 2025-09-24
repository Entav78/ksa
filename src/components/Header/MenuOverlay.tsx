import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';
import { NAV_ITEMS } from '@/config/nav';

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
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
  `;

  const isActive = (path: string) => {
    // Little helper that treats "/x" and "/x/" as the same
    const norm = (p: string) => p.replace(/\/+$/, '') || '/';
    return norm(location.pathname) === norm(path);
  };

  const publishedItems = NAV_ITEMS.filter((i) => i.published);

  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      {/* bakgrunn */}
      <button
        className="absolute inset-0 bg-overlay backdrop-blur-sm"
        onClick={onClose}
        aria-label="Lukk meny"
      />

      {/* panel */}
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
        <div className="flex justify-between items-center px-4 pt-6 pb-4 border-b border-border">
          <span className="text-lg font-semibold">Meny</span>
          <button
            onClick={onClose}
            aria-label="Lukk meny"
            className="p-2 rounded hover:bg-hover transition"
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
          {publishedItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className={`${linkBase} ${isActive(to) ? 'font-semibold' : ''}`}
              aria-current={isActive(to) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>,
    document.body
  );
}
