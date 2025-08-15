import { Link } from 'react-router-dom';
import svømmekursImg from '@/assets/img/svommekurs-page.webp';
// importer logoer som passer deg (SVG/PNG/WebP). Plasser f.eks. i src/assets/logoer/
import grasrot from '@/assets/logoer/grasrot.png';
import antidoping from '@/assets/logoer/antidoping.png';
//import samarbeid from '@/assets/logoer/samarbeidspartnere.png';
//import sponsorer from '@/assets/logoer/sponsorer.png';
import skagerrak from '@/assets/logoer/skagerrak.png';
import SocialMedia from '@/components/social/SocialMedia';

import { PartnerGrid, PartnerItem } from '@/components/home/PartnerGrid';

const items: PartnerItem[] = [
  {
    title: 'Grasrotandelen',
    img: grasrot,
    alt: 'Støtt oss via Grasrotandelen',
    // Bytt til KSA sin spesifikke side/ID når du har den:
    href: 'https://www.norsk-tipping.no/grasrotandelen',
  },
  {
    title: 'Antidoping',
    img: antidoping,
    alt: 'Antidoping Norge',
    // legg til lenke om dere ønsker, eller la være
    href: 'https://antidoping.no/',
  },
  /*
  {
    title: 'Samarbeidspartnere',
    img: samarbeid,
    alt: 'Våre samarbeidspartnere',
    // evt. intern rute /om/samarbeidspartnere
  },
  {
    /* 
  {
    title: 'Sponsorer',
    img: sponsorer,
    alt: 'Våre sponsorer',
    // evt. intern rute /om/sponsorer
  },*/

  {
    title: 'Skagerrak Swim',
    img: skagerrak,
    alt: 'Skagerrak Swim',
    href: 'https://skagerrakswim.no/',
  },
];
// src/pages/HomePage/HomePage.tsx
export function HomePage() {
  return (
    <section className="my-8 text-center">
      <Link
        to="/kurs"
        className="relative block mx-auto w-full max-w-4xl group"
      >
        <img
          src={svømmekursImg}
          alt="Klikk her for å lære mer om svømmeopplæring"
          className="rounded-lg shadow-md hover:scale-[1.03] transition-transform duration-300 object-cover h-40 sm:h-52 w-full"
        />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white px-5 py-2 rounded-lg text-sm sm:text-base transition-colors duration-300 hover:bg-black/80">
          Finn svømmeopplæring
        </span>
      </Link>

      <h1 className="text-3xl font-bold text-center mt-6">
        Velkommen til Kristiansand Svømmeallianse
      </h1>
      <h2 className="text-xl text-center text-gray-300 mt-2">
        Trygg • Inkluderende • Stolt
      </h2>
      <p className="max-w-2xl mx-auto text-center mt-4 text-gray-400">
        Vi skaper svømmeglede for alle – fra nybegynner til mester. Hos oss står
        vilje, lojalitet og samhold i sentrum.
      </p>

      <SocialMedia />
      <PartnerGrid items={items} />
    </section>
  );
}
