// data/scheduleData.ts
export const lastUpdated = '2025-05-10'; // ISO YYYY-MM-DD
// ...export const scheduleData = [...]

export type ScheduleEntry = {
  group: string;
  day: string;
  time: string;
  location: string;
  basis: 'yes' | 'no';
};

export const scheduleData: ScheduleEntry[] = [
  {
    group: 'A',
    day: 'Mandag',
    time: '16:00 - 18:00',
    location: 'Spicheren',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Tirsdag',
    time: '06:00 - 08:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Tirsdag',
    time: '18:00 - 20:00',
    location: 'Spicheren',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Onsdag',
    time: '15:45 - 17:30',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Torsdag',
    time: '16:00 - 18:00',
    location: 'Spicheren',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Fredag',
    time: '06:00 - 08:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Fredag',
    time: '16:00 - 18:00',
    location: 'Spicheren',
    basis: 'no',
  },
  {
    group: 'A',
    day: 'Lørdag',
    time: '07:00 - 09:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'B',
    day: 'Mandag',
    time: '16:00 - 18:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'B',
    day: 'Tirsdag',
    time: '18:00 - 21:00',
    location: 'Aquarama',
    basis: 'yes',
  },
  {
    group: 'B',
    day: 'Onsdag',
    time: '16:00 - 18:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'B',
    day: 'Torsdag',
    time: '18:00 - 21:00',
    location: 'Aquarama',
    basis: 'yes',
  },
  {
    group: 'B',
    day: 'Fredag',
    time: '16:30 - 18:30',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'B',
    day: 'Lørdag',
    time: '07:00 - 09:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'C',
    day: 'Mandag',
    time: '16:00 - 18:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'C',
    day: 'Tirsdag',
    time: '18:00 - 21:00',
    location: 'Aquarama',
    basis: 'yes',
  },
  {
    group: 'C',
    day: 'Onsdag',
    time: '16:00 - 18:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'C',
    day: 'Torsdag',
    time: '16:00 - 17:30',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'C',
    day: 'Lørdag',
    time: '08:00 - 10:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'D',
    day: 'Tirsdag',
    time: '19:00 - 20:30',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'D',
    day: 'Onsdag',
    time: '17:30 - 18:45',
    location: 'Aquarama',
    basis: 'yes',
  },
  {
    group: 'D',
    day: 'Torsdag',
    time: '17:30 - 18:45',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'E',
    day: 'Mandag',
    time: '19:00 - 20:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'E',
    day: 'Onsdag',
    time: '19:00 - 20:00',
    location: 'Aquarama',
    basis: 'no',
  },
  {
    group: 'F',
    day: 'Onsdag',
    time: '18:00 - 19:00',
    location: 'Aquarama',
    basis: 'no',
  },
];
