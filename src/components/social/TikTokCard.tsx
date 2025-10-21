import { FaTiktok } from 'react-icons/fa';
import ElfsightWidget from '@/components/social/ElfsightWidget';

type Props = {
  appId: string; // e.g. "elfsight-app-xxxxxxxx"
  profileUrl?: string; // optional external link
  note?: string; // optional small note below the button
};

export default function TikTokCard({ appId, profileUrl, note }: Props) {
  return (
    <div className="rounded-xl border border-border bg-background text-text shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <FaTiktok className="text-xl" aria-hidden />
        <h3 className="font-semibold">TikTok</h3>
      </div>

      {/* Body – Elfsight feed */}
      <div className="p-3">
        {/* Elfsight injects content into this div */}
        <ElfsightWidget appId={appId} />
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        {profileUrl ? (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center w-full
              rounded-md px-4 py-2 text-sm
              bg-primary text-text hover:opacity-90 transition
              focus:outline-none focus:ring-2 focus:ring-primary/50
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
