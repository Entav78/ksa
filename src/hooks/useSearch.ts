// src/hooks/useSearch.ts
import Fuse from 'fuse.js';
import { searchData, SearchItem } from '@/data/searchData';

const options = {
  includeScore: true,
  keys: ['title', 'content'], // søk både i titler og innhold
  threshold: 0.3, // hvor "fuzzy" søket skal være (lavere = strengere)
};

const fuse = new Fuse(searchData, options);

export function useSearch(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const results = fuse.search(query);
  return results.map((r) => r.item);
}
