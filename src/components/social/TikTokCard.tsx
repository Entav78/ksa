import { FaTiktok } from 'react-icons/fa';
import ElfsightWidget from '@/components/social/ElfsightWidget';

type Props = {
  appId?: string; // only required when embed=true
  profileUrl?: string;
  note?: string;
  embed?: boolean; // default false while account is private
  minHeight?: number; // keeps card height consistent
};

export default function TikTokCard({
  appId,
  profileUrl,
  note,
  embed = false,
  minHeight = 360,
}: Props) {
  return (
    <div className="rounded-xl border border-border bg-background text-text shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <FaTiktok className="text-xl" aria-hidden />
        <h3 className="font-semibold">TikTok</h3>
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
            TikTok-feed publiseres når kontoen er offentlig 🎬
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
            Åpne TikTok-profil
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
