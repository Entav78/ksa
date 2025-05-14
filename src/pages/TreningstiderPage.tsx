import { useEffect, useState } from 'react';
import { scheduleData, ScheduleEntry, lastUpdated } from '../data/scheduleData';
import { ScheduleTable } from '../components/ScheduleTable';

const weekdays = [
  'mandag',
  'tirsdag',
  'onsdag',
  'torsdag',
  'fredag',
  'lørdag',
  'søndag',
];

const today = new Date();
const adjustedIndex = (today.getDay() + 6) % 7;
const todayName = weekdays[adjustedIndex];

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
      if (updated.has(group)) {
        updated.delete(group);
      } else {
        updated.add(group);
      }
      return updated;
    });
  };

  const filteredData =
    selectedGroups.size === 0
      ? scheduleData
      : scheduleData.filter((entry) => selectedGroups.has(entry.group));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Treningstider</h1>
      <p className="text-lg text-muted mb-4">
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
          className="border p-2 rounded"
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
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 border-subtle p-2">
          {allGroups.map((group) => (
            <label key={group} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedGroups.has(group)}
                onChange={() => toggleGroup(group)}
              />
              Gruppe {group}
            </label>
          ))}
        </div>
      )}

      <ScheduleTable data={filteredData} todayName={todayName} />

      <p className="text-sm text-main mt-6">Sist oppdatert: 10. mai 2025</p>
    </div>
  );
}
