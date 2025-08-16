import React from 'react';

interface SocialFeedProps {
  platform: string;
  src?: string;
  linkUrl?: string;
}

const SocialFeed: React.FC<SocialFeedProps> = ({ platform, src, linkUrl }) => {
  return (
    <div className="bg-background text-text rounded-2xl p-4 shadow-md border border-border">
      <h3 className="text-lg font-semibold mb-3 text-center">{platform}</h3>

      {src ? (
        <iframe
          src={src}
          className="w-full h-96 rounded-lg shadow-md"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center rounded-lg bg-hover text-text/70">
          {platform} feed kommer snart
        </div>
      )}

      {linkUrl && (
        <div className="mt-3 text-center">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Lenke til {platform}
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialFeed;
