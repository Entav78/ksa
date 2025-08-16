import { useState } from 'react';

type FaqItem = { q: string; a: string };

const defaultFaq: FaqItem[] = [
  {
    q: 'Hvem passer svømmeopplæringen for?',
    a: 'Barn fra nybegynner til viderekommende – se nivåbeskrivelser.',
  },
  {
    q: 'Hva bør vi ha med?',
    a: 'Badetøy, håndkle og evt. svømmebriller (NB svømmebriller skal ikke brukes på Hval, Skilpadde og Pingvin). Langt hår: bruk strikk eller badehette.',
  },
  {
    q: 'Hvor lenge varer et kurs?',
    a: 'Vanligvis 10 uker med én økt i uka, med unntak for ferie/helligdager.',
  },
  {
    q: 'Hvordan melder jeg på?',
    a: 'Via Tryggivann – lenken på siden ‘Svømmeopplæring’ tar deg rett til KSA sine kurs.',
  },
  {
    q: 'Hva hvis nivået ikke passer?',
    a: 'Snakk med instruktør etter økten, så hjelper vi med å justere nivå. Instruktør tar kontakt med deg dersom det anbefales å bytte til et annet kurs.',
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
