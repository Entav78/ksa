import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import type { ReactElement } from 'react';

type Platform = 'Instagram' | 'Facebook' | 'TikTok';

type Props = {
  platform: Platform;
  profileUrl?: string; // ekstern lenke til profilen (valgfritt)
  feedSrc?: string; // embed/iframe URL (valgfritt)
};

const platformIcon: Record<Platform, ReactElement> = {
  Instagram: <FaInstagram className="text-xl" aria-hidden />,
  Facebook: <FaFacebook className="text-xl" aria-hidden />,
  TikTok: <FaTiktok className="text-xl" aria-hidden />,
};

export default function SocialCard({ platform, profileUrl, feedSrc }: Props) {
  const hasFeed = !!feedSrc && /^https?:\/\//.test(feedSrc);

  return (
    <div className="rounded-xl border border-border bg-background text-text shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <span>{platformIcon[platform]}</span>
        <h3 className="font-semibold">{platform}</h3>
      </div>

      {/* Body */}
      <div className="p-3">
        {hasFeed ? (
          <div className="rounded-lg overflow-hidden">
            <iframe
              src={feedSrc}
              title={`${platform} feed`}
              style={{ border: 0, width: '100%', height: 220 }}
              loading="lazy"
              allowTransparency
              frameBorder={0}
              scrolling="no"
            />
          </div>
        ) : (
          <div className="h-28 rounded-lg flex items-center justify-center bg-hover text-text/70">
            {platform} feed kommer snart
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
              inline-flex items-center justify-center w-full
              rounded-md px-4 py-2 text-sm
              bg-primary text-text
              hover:opacity-90
              transition
              focus:outline-none focus:ring-2 focus:ring-primary/50
            "
          >
            Lenke til {platform}
          </a>
        ) : (
          <div className="text-center text-sm text-text/70">
            Lenke kommer snart
          </div>
        )}
      </div>
    </div>
  );
}
