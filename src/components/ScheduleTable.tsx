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
    <table className="w-full border border-collapse mt-4">
      <thead>
        <tr>
          <th className="border p-2">Gruppe</th>
          <th className="border p-2">Dag</th>
          <th className="border p-2">Tid</th>
          <th className="border p-2">Sted</th>
          <th className="border p-2">Basistrening</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr
            key={index}
            className={
              entry.day.toLowerCase() === todayName ? 'bg-yellow-100' : ''
            }
          >
            <td className="border p-2">{entry.group}</td>
            <td className="border p-2">{entry.day}</td>
            <td className="border p-2">{entry.time}</td>
            <td className="border p-2">{entry.location}</td>
            <td className="border p-2 text-center">
              {entry.basis === 'yes' ? '🏋️‍♂️' : ''}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
