import { Link } from 'react-router-dom';
import kursTeaserImg from '@/assets/img/svommekurs-link-to-page.png';

// src/pages/HomePage/HomePage.tsx
export function HomePage() {
  return (
    <section className="my-8 text-center">
      <Link to="/kurs">
        <img
          src={kursTeaserImg}
          alt="Klikk her for å lære mer om svømmekurs"
          className="rounded-lg shadow-md mx-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </section>
  );
}
