// src/pages/SearchResults.tsx
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';

export function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const results = useSearch(query);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="p-6 max-w-3xl mx-auto text-text">
      <h1 className="text-2xl font-bold mb-4">
        {hasQuery ? `Søkeresultat for «${query}»` : 'Søk'}
      </h1>

      {!hasQuery ? (
        <p className="text-text/70">Skriv inn et søkeord for å se treff.</p>
      ) : results.length === 0 ? (
        <p className="text-text/70">Ingen treff.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((item) => (
            <li key={item.id} className="border-b border-border pb-2">
              <a
                href={item.url}
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
              >
                {item.title}
              </a>
              <p className="text-sm text-text/70">
                {item.content.substring(0, 120)}...
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
