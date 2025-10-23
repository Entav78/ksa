import InstagramCard from '@/components/social/InstagramCard';
//import SocialCard from '@/components/social/SocialCard'; // keep for TikTok/Facebook link-style
import TikTokCard from '@/components/social/TikTokCard';
import FacebookCard from '@/components/social/FacebookCard';

export default function SocialMedia() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-text">
        Følg oss på sosiale medier
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InstagramCard
          appId="elfsight-app-eee592a6-329a-4858-8b68-3578bf6a2fb7"
          profileUrl="https://www.instagram.com/kristiansandsa/"
        />

        {/* TikTok – link-only (until you decide to embed) */}
        <TikTokCard
          profileUrl="https://www.tiktok.com/@kristiansandsa"
          note="Lukket gruppe – innlogging/medlemskap kreves"
          embed={false}
        />

        {/* Facebook – link-only (closed group) */}
        <FacebookCard
          profileUrl="https://www.facebook.com/KSA.1922"
          note="Lukket gruppe – innlogging/medlemskap kreves"
          embed={false}
        />
      </div>
    </section>
  );
}
