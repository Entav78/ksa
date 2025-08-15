import React from 'react';

interface SocialFeedProps {
  platform: string;
  src?: string;
  linkUrl?: string;
}

const SocialFeed: React.FC<SocialFeedProps> = ({ platform, src, linkUrl }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-md border border-gray-700">
      <h3 className="text-lg font-semibold mb-3 text-center">{platform}</h3>

      {src ? (
        <iframe
          src={src}
          className="w-full h-96 rounded-lg shadow-md"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center text-gray-400 bg-gray-800 rounded-lg">
          {platform} feed kommer snart
        </div>
      )}

      {linkUrl && (
        <div className="mt-3 text-center">
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Lenke til {platform}
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialFeed;
