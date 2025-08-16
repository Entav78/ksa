import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SiteSearch() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto px-4 mb-4 sm:mb-6"
    >
      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="
            w-full rounded-lg border
            border-gray-300 bg-white text-black
            dark:border-gray-700 dark:bg-gray-800 dark:text-white
            dark:placeholder-gray-400
            pl-4 pr-24 py-2
          "
        />
        <button
          type="submit"
          className="
  absolute right-1 top-1 bottom-1 px-4 rounded-md text-sm font-medium
  bg-white text-gray-900 border border-gray-300 hover:bg-gray-50
  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
  transition-colors
"
        >
          Søk
        </button>
      </div>
    </form>
  );
}
