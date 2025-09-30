import { useState } from 'react';
import { LevelSelector } from '@/components/opplaering/LevelSelector';
import { tryggivannLinks } from '@/data/tryggivannLinks';
import { Faq } from '@/components/faq/Faq';

export function KursPage() {
  const [selectedCourse, setSelectedCourse] = useState('');

  const url = selectedCourse
    ? tryggivannLinks[selectedCourse as keyof typeof tryggivannLinks]
    : '';

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCourse(e.target.value); // ← ikke window.open her
  }

  return (
    <section className="max-w-3xl mx-auto p-4 text-text">
      {/* Overskrift */}
      <h1 className="text-3xl font-bold mb-4">Svømmeopplæring hos KSA</h1>

      {/* Nivåvelger */}
      <LevelSelector />

      {/* Direktevalg av kurs */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Vet du hvilket kurs barnet skal på?
        </h2>
        <p className="mb-2">
          Velg kurset under og åpne påmelding i Trygg i vann:
        </p>

        <label htmlFor="course-select" className="sr-only">
          Velg kurs
        </label>
        <select
          id="course-select"
          value={selectedCourse}
          onChange={handleSelectChange}
          className="
            w-full p-2 rounded
            bg-background text-text border border-border
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
        >
          <option value="">Velg kurs</option>
          <option value="hval">Hval</option>
          <option value="skilpadde">Skilpadde</option>
          <option value="pingvin">Pingvin</option>
          <option value="selungen">Selungen</option>
          <option value="sel">Sel</option>
          <option value="sjolove">Sjøløve</option>
        </select>

        {/* Knapp: eksplisitt brukerklikk → funker på mobil */}
        <div className="mt-3">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex items-center rounded-xl px-5 py-3 font-semibold
    shadow-md border border-border
    bg-[var(--primary-color)] text-white
    hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-[var(--primary-color)]
    transition
  "
            >
              Gå til påmelding i Trygg i vann
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="
    inline-flex items-center rounded-xl px-5 py-3
    bg-[var(--table-border)] text-text/60
    dark:bg-[var(--table-hover)]
    cursor-not-allowed"
            >
              Velg kurs for å åpne lenke
            </button>
          )}
        </div>
      </div>

      <Faq />
    </section>
  );
}
