/* eslint-disable @typescript-eslint/consistent-type-definitions */
import raw from '../../data/julekalender-2025.json';

type Luke = {
  day: number;
  date: string; // "YYYY-MM-DD"
  sponsor: string;
  prizeTitle: string;
  prizeValue?: string;
  prizeDesc?: string;
  logo?: string; // kept in type, but not used here
  winner?: string; // empty/"—" = not drawn
};

const data: Luke[] = raw as Luke[];

// Oslo-dato i "sv-SE" (YYYY-MM-DD) for enkel sammenligning
const TZ = 'Europe/Oslo';
const todayISO = new Date().toLocaleDateString('sv-SE', { timeZone: TZ });

function formatDate(nbIso: string) {
  // "1. desember" på norsk
  return new Date(nbIso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
  });
}

// Prize image from /public/img/julekalender/2025/dayXX.webp
const imgForDay = (n: number) =>
  `/img/julekalender/2025/day${String(n).padStart(2, '0')}.webp`;

export default function Julekalender2025() {
  const sorted = [...data].sort((a, b) => a.day - b.day);
  const todayEntry = sorted.find((d) => d.date === todayISO);

  const isDrawn = (d: Luke) => !!(d.winner && d.winner !== '—');

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Trekning julekalender 2025</h1>
        <p className="text-sm opacity-80">
          Resultater publiseres fortløpende (etter kl. 20:00).
        </p>
      </header>

      {todayEntry && (
        <section className="mb-8 rounded border p-4 bg-header/30">
          <h2 className="text-xl font-medium">
            Dagens trekning – Luke {todayEntry.day} (
            {formatDate(todayEntry.date)})
          </h2>

          <div className="mt-1">
            <strong>Premie:</strong> {todayEntry.prizeTitle}
            {todayEntry.prizeValue ? ` – verdi ${todayEntry.prizeValue}` : ''}
          </div>
          <div>
            <strong>Sponsor:</strong> {todayEntry.sponsor}
          </div>

          {/* Only the day image */}
          <img
            src={imgForDay(todayEntry.day)}
            alt={`Premiebilde – luke ${todayEntry.day}: ${todayEntry.prizeTitle}`}
            className="mt-3 w-full aspect-square object-contain rounded bg-header/20 p-2"
            loading="lazy"
            width={400}
            height={400}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />

          <p className="mt-2">
            {isDrawn(todayEntry) ? (
              <span className="inline-flex items-center gap-2 rounded bg-yes/20 px-2 py-1 text-yes">
                Vinner: {todayEntry.winner}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded bg-hover px-2 py-1">
                Publiseres i kveld
              </span>
            )}
          </p>

          <a
            href={`#luke-${todayEntry.day}`}
            className="mt-3 inline-block underline"
          >
            Åpne luke {todayEntry.day}
          </a>
        </section>
      )}

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {sorted.map((d) => {
          const today = d.date === todayISO;
          return (
            <article
              id={`luke-${d.day}`}
              key={d.day}
              className={`h-full flex flex-col rounded border p-4 bg-background ${
                today ? 'ring-2 ring-primary/60' : ''
              }`}
            >
              <div className="mb-2 text-sm opacity-70">
                {formatDate(d.date)}
              </div>
              <h3 className="text-lg font-semibold">Luke {d.day}</h3>

              {/* Sponsor + prize */}
              <div className="mt-2">
                <div className="font-medium">{d.sponsor}</div>
              </div>
              <div className="mt-2">
                <div>
                  <strong>Premie:</strong> {d.prizeTitle}
                  {d.prizeValue ? ` – ${d.prizeValue}` : ''}
                </div>
                {d.prizeDesc && <div className="opacity-80">{d.prizeDesc}</div>}
              </div>

              {/* Bilde – holder høyden konsekvent */}
              <img
                src={imgForDay(d.day)}
                alt={`Premiebilde – luke ${d.day}: ${d.prizeTitle}`}
                className="mt-3 w-full aspect-square object-contain rounded bg-header/20 p-2"
                loading="lazy"
                width={400}
                height={400}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* STATUS FOOTER – sticks to bottom */}
              <div className="mt-auto pt-3">
                {isDrawn(d) ? (
                  <div className="inline-flex items-center gap-2 rounded bg-yes/15 px-2 py-1 text-yes">
                    Vinner: {d.winner}
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded bg-hover px-2 py-1">
                    Ikke trukket
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
