// src/utils/date.ts
export type DateInput = Date | string | number;

function toDate(x: DateInput): Date {
  return x instanceof Date ? x : new Date(x);
}

export function formatDate(
  date: DateInput,
  opts: Intl.DateTimeFormatOptions = { dateStyle: 'long' },
  locale = 'nb-NO'
) {
  const d = toDate(date);
  if (Number.isNaN(d.getTime())) return String(date);
  return new Intl.DateTimeFormat(locale, opts).format(d);
}

export function formatTime(
  date: DateInput,
  opts: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' },
  locale = 'nb-NO'
) {
  const d = toDate(date);
  if (Number.isNaN(d.getTime())) return String(date);
  return new Intl.DateTimeFormat(locale, opts).format(d);
}

export function formatDateTime(date: DateInput, locale = 'nb-NO') {
  const d = toDate(date);
  if (Number.isNaN(d.getTime())) return String(date);
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(d);
}

/** F.eks. "Mandag 14. oktober 2025" */
export function formatWeekdayDate(date: DateInput, locale = 'nb-NO') {
  const d = toDate(date);
  if (Number.isNaN(d.getTime())) return String(date);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

/** F.eks. "17:00–18:30" (ingen dato) */
export function formatTimeRange(
  start: DateInput,
  end: DateInput,
  locale = 'nb-NO'
) {
  const s = toDate(start);
  const e = toDate(end);
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return '';
  const fmt = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${fmt.format(s)}–${fmt.format(e)}`;
}
