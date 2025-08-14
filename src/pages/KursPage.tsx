import svømmekursImg from '@/assets/img/svommekurs-page.webp';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Nivaavelger } from '@/components/opplaering/Nivaavelger';

export function KursPage() {
  return (
    <section className="max-w-3xl mx-auto p-4">
      {/* Overskrift */}
      <h1 className="text-3xl font-bold mb-4">Svømmekurs hos KSA</h1>

      {/* Bilde */}
      <img
        src={svømmekursImg}
        alt="Barn som lærer å svømme"
        className="rounded-lg shadow-md mb-6 w-full object-cover max-h-[350px]"
      />

      {/* Informasjon */}
      <p className="mb-4">
        Kristiansand Svømmeallianse tilbyr svømmekurs for barn. Vi har
        svømmekurs på flere nivåer, fra nybegynner til viderekomne.
      </p>

      {/* Varsel 
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 mb-6 rounded">
        <strong>Obs:</strong> Nye kurs publiseres i{' '}
        <strong>begynnelsen av august</strong> og følger skolens ferier.
      </div>
*/}
      {/* CTA */}
      {/* CTA */}
      <div className="text-center">
        <a
          href="https://tryggivann.no/finnkursklubb.aspx?arr=68"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg transition"
        >
          Se våre kurs på Tryggivann <FaExternalLinkAlt />
        </a>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
          Kursene legges ut i august og følger skoleruta. Trykk på knappen for å
          se når nye kurs er tilgjengelige.
        </p>
      </div>
      <Nivaavelger />
    </section>
  );
}
