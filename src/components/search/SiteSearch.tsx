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
          placeholder="Søk..."
          className="
            w-full rounded-lg border border-border
            bg-background text-text
            placeholder-text/60
            pl-4 pr-24 py-2
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
        />
        <button
          type="submit"
          className="
            absolute right-1 top-1 bottom-1
            px-4 rounded-md text-sm font-medium
            bg-background text-text border border-border
            hover:bg-hover
            transition
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
        >
          Søk
        </button>
      </div>
    </form>
  );
}
