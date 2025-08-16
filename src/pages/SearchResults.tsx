// src/pages/SearchResults.tsx
import { useSearchParams } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';

export function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get('q') || '';
  const results = useSearch(query);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Search results for "{query}"</h1>

      {results.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        <ul className="space-y-4">
          {results.map((item) => (
            <li key={item.id} className="border-b pb-2">
              <a href={item.url} className="text-primary font-semibold">
                {item.title}
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.content.substring(0, 120)}...
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
