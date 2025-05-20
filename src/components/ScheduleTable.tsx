type ScheduleEntry = {
  group: string;
  day: string;
  time: string;
  location: string;
  basis: 'yes' | 'no';
};

type Props = {
  data: ScheduleEntry[];
  todayName: string;
};

export function ScheduleTable({ data, todayName }: Props) {
  if (data.length === 0) {
    return <p>Ingen treninger funnet for valgte grupper.</p>;
  }

  return (
    <div className="px-1 sm:px-4">
      <table className="w-full border border-collapse mt-4">
        <thead>
          <tr>
            <th className="border p-2">Gruppe</th>
            <th className="border p-2">Dag</th>
            <th className="border p-2">Tid</th>
            <th className="border p-2">Sted</th>
            <th className="border p-2">Basis</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            console.log(
              'entry.day:',
              entry.day.toLowerCase(),
              '| todayName:',
              todayName
            );
            const isToday =
              entry.day.trim().toLowerCase() === todayName.trim().toLowerCase();
            const rowClass = isToday ? 'text-black font-bold' : '';

            return (
              <tr key={index} className={rowClass}>
                <td className="border p-2">{entry.group}</td>
                <td className="border p-2">
                  {entry.day}
                  {isToday && '📍'}
                </td>
                <td className="border p-2">{entry.time}</td>
                <td className="border p-2">{entry.location}</td>
                <td className="border p-2 text-center">
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
