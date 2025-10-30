/* eslint-disable @typescript-eslint/consistent-type-definitions */
import raw from '@/data/julekalender-2025.json';

type Luke = {
  day: number;
  date: string;
  sponsor: string;
  prizeTitle: string;
  prizeValue?: string;
  prizeDesc?: string;
  logo?: string; // optional: will be used if present
  winner?: string; // non-empty = drawn
};

const data: Luke[] = raw as Luke[];

// Stable "today" in Oslo, formatted as YYYY-MM-DD (sv-SE gives ISO-like)
const TZ = 'Europe/Oslo';
const todayISO = new Date().toLocaleDateString('sv-SE', { timeZone: TZ });

function formatDate(nbIso: string) {
  // "1. desember"
  return new Date(nbIso).toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
  });
}

// fallback (old day image) if no logo is provided
const fallbackForDay = (n: number) =>
  `/img/julekalender/2025/logos/day${String(n).padStart(2, '0')}.webp`;

// Prefer logo if provided; otherwise use day fallback
const srcFor = (d: Luke) => d.logo ?? fallbackForDay(d.day);

const isDrawn = (d: Luke) =>
  !!(d.winner && d.winner.trim() !== '—' && d.winner.trim() !== '');

export default function Julekalender2025() {
  const sorted = [...data].sort((a, b) => a.day - b.day);
  const todayEntry = sorted.find((d) => d.date === todayISO);

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

          {/* Smaller, fixed-height image box for consistent layout */}
          <div className="mt-2 rounded bg-header/20 p-2 flex items-center justify-center h-28 sm:h-32 lg:h-36">
            <img
              src={srcFor(todayEntry)}
              alt={`${todayEntry.sponsor} – luke ${todayEntry.day}`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              width={300}
              height={300}
              onError={(e) =>
                ((e.currentTarget as HTMLImageElement).style.display = 'none')
              }
            />
          </div>

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

      {/* Denser grid; smaller card paddings; consistent image box height */}
      <section className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-stretch">
        {sorted.map((d) => {
          const today = d.date === todayISO;
          return (
            <article
              id={`luke-${d.day}`}
              key={d.day}
              className={`h-full flex flex-col rounded border p-3 bg-background ${
                today ? 'ring-2 ring-primary/60' : ''
              }`}
            >
              <div className="mb-1 text-xs opacity-70">
                {formatDate(d.date)}
              </div>
              <h3 className="text-base font-semibold">Luke {d.day}</h3>

              {/* Sponsor + prize (compact) */}
              <div className="mt-1">
                <div className="font-medium text-sm">{d.sponsor}</div>
              </div>
              <div className="mt-1 text-sm">
                <div>
                  <strong>Premie:</strong> {d.prizeTitle}
                  {d.prizeValue ? ` – ${d.prizeValue}` : ''}
                </div>
                {d.prizeDesc && <div className="opacity-80">{d.prizeDesc}</div>}
              </div>

              {/* Smaller, fixed-height image box */}
              <div className="mt-2 rounded bg-header/20 p-2 flex items-center justify-center h-24 sm:h-28 lg:h-32">
                <img
                  src={srcFor(d)}
                  alt={`${d.sponsor} – luke ${d.day}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  width={300}
                  height={300}
                  onError={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.display =
                      'none')
                  }
                />
              </div>

              {/* Status stuck to bottom */}
              <div className="mt-auto pt-2">
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
