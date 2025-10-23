// src/components/social/InstagramCard.tsx
import { FaInstagram } from 'react-icons/fa';
import ElfsightWidget from '@/components/social/ElfsightWidget';

type Props = {
  appId: string; // Elfsight app-id, f.eks. "elfsight-app-xxxx..."
  profileUrl?: string; // ekstern lenke til profilen
  minHeight?: number; // kontroll på feed-høyden (default 200)
};

export default function InstagramCard({
  appId,
  profileUrl,
  minHeight = 200,
}: Props) {
  return (
    <div className="rounded-xl border border-border bg-background text-text shadow-sm overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
        <FaInstagram className="text-xl" aria-hidden />
        <h3 className="font-semibold">Instagram</h3>
      </div>

      {/* Body – Elfsight feed */}
      <div className="p-3 flex-1">
        <div className="min-h-[260px]">
          <ElfsightWidget appId="elfsight-app-eee592a6-329a-4858-8b68-3578bf6a2fb7" />
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 mt-auto">
        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm
                     bg-primary text-text hover:opacity-90 transition
                     focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Åpne KSA på Instagram"
          >
            Åpne i Instagram
          </a>
        )}
      </div>
    </div>
  );
}
