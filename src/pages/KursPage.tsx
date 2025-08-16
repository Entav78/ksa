import { FaExternalLinkAlt } from 'react-icons/fa';
import { Nivaavelger } from '@/components/opplaering/Nivaavelger';
import { tryggivannLinks } from '@/data/tryggivannLinks';
import { useState } from 'react';
import { Faq } from '@/components/faq/Faq';

export function KursPage() {
  const [selectedCourse, setSelectedCourse] = useState('');

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const course = e.target.value;
    setSelectedCourse(course);
    if (course) {
      const url = tryggivannLinks[course as keyof typeof tryggivannLinks];
      window.open(url, '_blank');
    }
  }

  return (
    <section className="max-w-3xl mx-auto p-4">
      {/* Overskrift */}
      <h1 className="text-3xl font-bold mb-4">Svømmeopplæring hos KSA</h1>

      {/* Nivåvelger */}
      <Nivaavelger />

      {/* Direktevalg av kurs */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Vet du hvilket kurs barnet skal på?
        </h2>
        <p className="mb-2">
          Velg kurset under for å gå direkte til påmelding i Tryggivann:
        </p>

        <select
          value={selectedCourse}
          onChange={handleSelectChange}
          className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
        >
          <option value="">Velg kurs</option>
          <option value="hval">Hval</option>
          <option value="skilpadde">Skilpadde</option>
          <option value="pingvin">Pingvin</option>
          <option value="selungen">Selungen</option>
          <option value="sel">Sel</option>
          <option value="sjolove">Sjøløve</option>
        </select>
      </div>
      <Faq />
    </section>
  );
}
