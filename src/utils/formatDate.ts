// utils/formatDate.ts
export function formatDateISO(iso: string, locale = 'nb-NO') {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso; // fallback
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d);
}
