import { Link } from 'react-router-dom';
import svømmekursImg from '@/assets/img/svommekurs-page.webp';
import grasrot from '@/assets/logoer/grasrot.png';
import antidoping from '@/assets/logoer/antidoping.png';
import skagerrak from '@/assets/logoer/skagerrak.png';
import SocialMedia from '@/components/social/SocialMedia';
import { PartnerGrid, PartnerItem } from '@/components/home/PartnerGrid';
import { SiteSearch } from '@/components/search/SiteSearch';

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
  return (
    <section className="my-8 text-center text-text">
      {/* Søk på toppen */}
      <SiteSearch />

      {/* Hero-kort til svømmeopplæring */}
      <Link
        to="/kurs"
        className="relative block mx-auto w-full max-w-4xl group"
      >
        <img
          src={svømmekursImg}
          alt="Klikk her for å lære mer om svømmeopplæring"
          className="rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-300 object-cover h-40 sm:h-52 w-full"
        />
        <span
          className="
            absolute bottom-3 left-1/2 -translate-x-1/2
            px-5 py-2 rounded-lg text-sm sm:text-base
            transition-opacity duration-300
            bg-[var(--overlay-color)] text-text
            group-hover:opacity-90
          "
        >
          Finn svømmeopplæring
        </span>
      </Link>

      {/* Intro-tekst */}
      <h1 className="text-3xl font-bold text-center mt-6">
        Velkommen til Kristiansand Svømmeallianse
      </h1>
      <h2 className="text-xl text-center mt-2 text-text/70">
        Trygg • Inkluderende • Stolt
      </h2>
      <p className="max-w-2xl mx-auto text-center mt-4 text-text/70">
        Vi skaper svømmeglede for alle – fra nybegynner til mester. Hos oss står
        vilje, lojalitet og samhold i sentrum.
      </p>

      {/* Sosiale medier + partnere */}
      <SocialMedia />
      <PartnerGrid items={items} />
    </section>
  );
}
