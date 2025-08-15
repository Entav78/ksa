import SocialCard from '@/components/social/SocialCard';

export default function SocialMedia() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Følg oss på sosiale medier
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Instagram – legg inn feedSrc senere hvis ønskelig */}
        <SocialCard
          platform="Instagram"
          // feedSrc="https://snapwidget.com/embed/INSTAGRAM-IFRAME-URL"
          profileUrl="https://instagram.com/dinKlubb"
        />

        {/* TikTok */}
        <SocialCard
          platform="TikTok"
          // feedSrc="https://snapwidget.com/embed/TIKTOK-IFRAME-URL"
          profileUrl="https://www.tiktok.com/@dinKlubb"
        />

        {/* Facebook */}
        <SocialCard
          platform="Facebook"
          // feedSrc="https://snapwidget.com/embed/FACEBOOK-IFRAME-URL"
          profileUrl="https://facebook.com/dinKlubb"
        />
      </div>
    </section>
  );
}
