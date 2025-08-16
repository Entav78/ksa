import { useEffect, useState } from 'react';
import {
  scheduleData,
  lastUpdated,
  type ScheduleEntry,
} from '../data/scheduleData';
import ScheduleTable from '../components/ScheduleTable';

// Norsk ukedag (samme som i data)
const weekdays = [
  'mandag',
  'tirsdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lørdag',
  'søndag',
];

// Gjør Date.getDay() om til norsk indeks (man=0)
const today = new Date();
const adjustedIndex = (today.getDay() + 6) % 7;
const todayName = weekdays[adjustedIndex];

// Liten, lokal datoformatter (slipper utils-fil akkurat nå)
function formatDateISO(iso: string, locale = 'nb-NO') {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

const allGroups = ['A', 'B', 'C', 'D', 'E', 'F'];

export function TreningstiderPage() {
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedGroups, setSelectedGroups] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (selectedMode !== 'multiple' && selectedMode !== 'all') {
      setSelectedGroups(new Set([selectedMode]));
    } else if (selectedMode === 'all') {
      setSelectedGroups(new Set());
    }
  }, [selectedMode]);

  const toggleGroup = (group: string) => {
    setSelectedGroups((prev) => {
      const updated = new Set(prev);
      if (updated.has(group)) updated.delete(group);
      else updated.add(group);
      return updated;
    });
  };

  const filteredData: ScheduleEntry[] =
    selectedGroups.size === 0
      ? scheduleData
      : scheduleData.filter((entry) => selectedGroups.has(entry.group));

  return (
    <div className="space-y-6 text-text">
      <h1 className="text-2xl font-bold">Treningstider</h1>
      <p className="text-lg text-text/80">
        I dag er det <strong>{todayName}</strong>.
      </p>

      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
        <label htmlFor="groupSelect" className="font-semibold">
          Velg gruppe:
        </label>
        <select
          id="groupSelect"
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
          className="
            border border-border rounded p-2
            bg-background text-text
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
        >
          <option value="all">Alle</option>
          <option value="A">Gruppe A</option>
          <option value="B">Gruppe B</option>
          <option value="C">Gruppe C</option>
          <option value="D">Gruppe D</option>
          <option value="E">Gruppe E</option>
          <option value="F">Gruppe F</option>
          <option value="multiple">Velg flere grupper</option>
        </select>
      </div>

      {selectedMode === 'multiple' && (
        <div
          className="
            mt-2 flex flex-wrap gap-x-6 gap-y-2
            p-3 rounded
            border border-border bg-background
          "
        >
          {allGroups.map((group) => (
            <label key={group} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedGroups.has(group)}
                onChange={() => toggleGroup(group)}
              />
              <span>Gruppe {group}</span>
            </label>
          ))}
        </div>
      )}

      <ScheduleTable data={filteredData} todayName={todayName} />

      <p className="text-sm text-text/70 mt-6">
        Sist oppdatert:{' '}
        <time dateTime={lastUpdated}>{formatDateISO(lastUpdated)}</time>
      </p>
    </div>
  );
}
