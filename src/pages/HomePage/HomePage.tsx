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

      {/* TODO: Bytt ut med ekte iframe fra SnapWidget når vi får tilgang til Instagram og Facebook */}
      {/*
      <div className="instagram-feed"> 
      <iframe
        src="DIN-SNAPWIDGET-IFRAME-URL"
        style={{ border: 0, width: '100%', height: '500px' }}
        allowtransparency="true"
        frameBorder="0"
        scrolling="no"
        title="Instagram Feed"
      ></iframe>
      </div>*/}
      <div className="text-center my-8 text-gray-500 italic">
        Instagram-feed kommer snart!
      </div>
      <div className="text-center my-8 text-gray-500 italic">
        Facebook-feed kommer snart!
      </div>
    </section>
  );
}
