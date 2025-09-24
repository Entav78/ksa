import SocialCard from '@/components/social/SocialCard';

export default function SocialMedia() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-text">
        Følg oss på sosiale medier
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SocialCard
          platform="Instagram"
          profileUrl="https://www.instagram.com/kristiansandsa/"
        />
        <SocialCard
          platform="TikTok"
          profileUrl={undefined} // ← deaktivert
        />
        <SocialCard
          platform="Facebook"
          profileUrl="https://www.facebook.com/KSA.1922"
          note="Lukket gruppe – innlogging/medlemskap kreves"
        />
      </div>
    </section>
  );
}
