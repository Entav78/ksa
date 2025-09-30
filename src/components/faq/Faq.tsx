import { useState } from 'react';

type FaqItem = { q: string; a: string };

const defaultFaq: FaqItem[] = [
  {
    q: 'Hvem passer svømmeopplæringen for?',
    a: 'Barn fra 5 år og oppover. På nybegynnerkursene (Hval, Skilpadde, Pingvin, Selunge) må barnet kunne stå på ca. 90 cm dybde. Se nivåbeskrivelsene for å finne riktig kurs.',
  },
  {
    q: 'Hva bør vi ha med?',
    a: 'Badetøy, håndkle og ev. svømmebriller. NB: Svømmebriller brukes ikke på Hval, Skilpadde og Pingvin. Barn med langt hår bruker strikk eller badehette.',
  },
  {
    q: 'Hvor lenge varer et kurs?',
    a: 'En ordinær kursrunde varer 10 uker med én kursdag per uke. Det tas hensyn til skoleferier. Nybegynnerkursene (Hval, Skilpadde, Pingvin, Selunge) har 30 minutter per økt, mens videregående kurs (Sel, Sjøløve) har 45 minutter.',
  },
  {
    q: 'Hvordan melder jeg på?',
    a: 'Via Trygg i vann – lenken på siden «Svømmeopplæring» tar deg rett til KSA sine kurs.',
  },
  {
    q: 'Hva hvis nivået ikke passer?',
    a: 'Snakk med instruktøren etter økten, så hjelper vi med å justere. Instruktør tar også kontakt dersom det anbefales bytte til et annet kurs.',
  },
];

export function Faq({ items = defaultFaq }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="max-w-3xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">
        Ofte stilte spørsmål
      </h2>
      <ul className="space-y-2">
        {items.map((it, idx) => {
          const isOpen = open === idx;
          return (
            <li
              key={idx}
              className="border border-border rounded-lg bg-background"
            >
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center text-text"
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{it.q}</span>
                <span className="ml-4">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <div className="px-4 pb-4 text-text">{it.a}</div>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
