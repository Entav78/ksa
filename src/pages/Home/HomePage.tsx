import { Link } from 'react-router-dom';
import PageSEO from '@/seo/PageSEO';
import svømmekursImg from '@/assets/img/svommekurs-page.webp';
import grasrot from '@/assets/logoer/grasrot.png';
import antidoping from '@/assets/logoer/antidoping.png';
import skagerrak from '@/assets/logoer/skagerrak.png';
import SocialMedia from '@/components/social/SocialMedia';
import { PartnerGrid, PartnerItem } from '@/components/home/PartnerGrid';
import { SiteSearch } from '@/components/search/SiteSearch';
import UnderConstructionBanner from '@/components/UnderConstructionBanner';

const items: PartnerItem[] = [
  {
    title: 'Grasrotandelen',
    img: grasrot,
    alt: 'Støtt oss via Grasrotandelen',
    href: 'https://www.norsk-tipping.no/grasrotandelen',
  },
  {
    title: 'Antidoping',
    img: antidoping,
    alt: 'Antidoping Norge',
    href: 'https://antidoping.no/',
  },
  {
    title: 'Skagerrak Swim',
    img: skagerrak,
    alt: 'Skagerrak Swim',
    href: 'https://skagerrakswim.no/',
  },
];

export function HomePage() {
  const SEARCH_ENABLED = false; // flip til true når klart
  // Hide after 25. desember 2025 (local time not critical for CTA)
  const showJulekalenderCTA = new Date() < new Date('2025-12-25');
  return (
    <>
      <UnderConstructionBanner />
      <PageSEO
        title="Kristiansand Svømmeallianse – Svømmeopplæring, kurs og trening"
        description="Finn svømmeopplæring og kurs hos KSA. Vi skaper svømmeglede for alle – fra nybegynner til mester."
        canonicalPath="/"
      />
      <section className="my-8 text-center text-text">
        {/* Søk på toppen */}
        {SEARCH_ENABLED ? <SiteSearch /> : null}

        {/* Hero-kort til svømmeopplæring */}
        <Link
          to="/kurs"
          className="relative block mx-auto w-full max-w-4xl group"
        >
          <img
            src={svømmekursImg}
            alt="Klikk for å lære mer om svømmeopplæring"
            className="rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-300 object-cover h-40 sm:h-52 w-full"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          {/* Mørk overlay for bedre lesbarhet */}
          <div
            className="absolute inset-0 rounded-lg bg-black/35 pointer-events-none"
            aria-hidden
          />

          {/* Knapp */}
          <span
            className="
      absolute bottom-3 left-1/2 -translate-x-1/2
      inline-flex items-center justify-center
      rounded-xl px-5 py-2 text-sm sm:text-base font-semibold
      bg-primary-600 text-white shadow-md
      hover:bg-primary-700 active:bg-primary-800
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500
      transition
    "
          >
            Finn svømmeopplæring
          </span>
        </Link>

        {/* Intro-tekst */}
        <div className="text-center mt-6 mb-8 space-y-3">
          <h1 className="text-3xl font-bold">
            Velkommen til Kristiansand Svømmeallianse
          </h1>
          <h2 className="text-xl text-text/70">Trygg • Inkluderende • Stolt</h2>
          <p className="max-w-2xl mx-auto text-text/70">
            Vi skaper svømmeglede for alle – fra nybegynner til mester. Hos oss
            står vilje, lojalitet og samhold i sentrum.
          </p>
        </div>

        {showJulekalenderCTA && (
          <section
            aria-labelledby="julekalender-cta"
            className="mb-8 rounded border bg-header/30 p-4"
          >
            <h2 id="julekalender-cta" className="text-lg font-semibold">
              🎄 Julekalender 2025
            </h2>
            <p className="mt-1 opacity-90">
              Se dagens premie og vinner når trekningen er klar i kveld.
            </p>
            <div className="mt-3">
              <Link
                to="/julekalender/2025"
                className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 font-medium text-white hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]"
              >
                Sjekk trekning i julekalenderen
              </Link>
            </div>
          </section>
        )}

        {/* Sosiale medier + partnere */}
        <SocialMedia />
        <PartnerGrid items={items} />
      </section>
    </>
  );
}
