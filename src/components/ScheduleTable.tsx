import React from 'react';
import type { ScheduleEntry } from '../data/scheduleData';

type Props = {
  data: ScheduleEntry[];
  todayName: string;
};

const normalize = (s: string) =>
  s.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();

export default function ScheduleTable({ data, todayName }: Props) {
  if (data.length === 0) {
    return (
      <p className="text-text">Ingen treninger funnet for valgte grupper.</p>
    );
  }

  return (
    <div className="overflow-x-auto max-w-full">
      <table
        className="
          w-full border border-border border-collapse mt-4
          text-text bg-background
        "
      >
        <thead className="bg-header">
          <tr>
            <th className="border border-border p-2 text-right sm:text-center">
              <span className="sm:hidden">Gr.</span>
              <span className="hidden sm:inline">Gruppe</span>
            </th>
            <th className="border border-border p-2">Dag</th>
            <th className="border border-border p-2">Tid</th>
            <th className="border border-border p-2">Sted</th>
            <th className="border border-border p-2">Basis</th>
          </tr>
        </thead>

        <tbody>
          {data.map((entry, index) => {
            const isToday = normalize(entry.day) === normalize(todayName);

            // Rad-for-rad sebrastriper via palettvariablene dine
            // "I dag" = fet + 📍, men beholder samme stripe som andre rader
            const rowClass = `odd:bg-stripe even:bg-background hover:bg-hover ${
              isToday ? 'font-bold' : ''
            }`;

            return (
              <tr key={`${entry.group}-${index}`} className={rowClass}>
                <td className="border border-border p-2 text-right sm:text-center">
                  {entry.group}
                </td>

                <td className="border border-border p-2">
                  {entry.day}
                  {isToday && ' 📍'}
                </td>

                <td className="border border-border p-2">{entry.time}</td>
                <td className="border border-border p-2">{entry.location}</td>

                <td className="border border-border p-2 text-center">
                  {entry.basis === 'yes' ? '🏋️‍♀️' : ''}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
