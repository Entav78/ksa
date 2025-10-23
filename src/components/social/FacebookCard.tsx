import { FaFacebook } from 'react-icons/fa';
import ElfsightWidget from '@/components/social/ElfsightWidget';

type Props = {
  appId?: string; // Elfsight widget ID, only needed when embed=true
  profileUrl?: string; // external link to your group/page
  note?: string; // small helper text
  embed?: boolean; // default false (groups can’t be embedded reliably)
  minHeight?: number; // keeps layout stable while loading
  title?: string; // header title (defaults to "Facebook")
  ctaLabel?: string; // button label (defaults to "Åpne Facebook")
};

export default function FacebookCard({
  appId,
  profileUrl,
  note,
  embed = false,
  minHeight = 360,
  title = 'Facebook',
  ctaLabel = 'Åpne Facebook',
}: Props) {
  return (
    <div className="rounded-xl border border-border bg-background text-text shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <FaFacebook className="text-xl" aria-hidden />
        <h3 className="font-semibold">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-3">
        {embed && appId ? (
          <div className="rounded-lg overflow-hidden" style={{ minHeight }}>
            <ElfsightWidget appId={appId} />
          </div>
        ) : (
          <div
            className="h-28 sm:h-40 rounded-lg flex items-center justify-center bg-hover text-text/70 text-center px-4"
            aria-live="polite"
          >
            Facebook-feed vises her når kontoen er offentlig.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        {profileUrl ? (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
  inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-sm
  bg-primary text-white dark:text-black             /* ← key change */
  hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]
  transition
  focus:outline-none focus:ring-2 focus:ring-[var(--primary-active)] focus:ring-offset-2 focus:ring-offset-background
"
          >
            {ctaLabel}
          </a>
        ) : (
          <div className="text-center text-sm text-text/70">
            Lenke kommer snart
          </div>
        )}
        {note && (
          <p className="mt-2 text-center text-xs text-text/60">{note}</p>
        )}
      </div>
    </div>
  );
}
