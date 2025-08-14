// src/components/opplaering/steps.ts
import { Step } from './types';

export const steps: Step[] = [
  {
    question: 'Er barnet skeptisk til vann?',
    noNextIndex: 1,
    yesResult: {
      level: 'Hval',
      message: 'Vi anbefaler hvalmerket for barn som er skeptiske til vann.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=2',
    },
    image: '/img/opplaering/hvalmerket.png',
  },
  {
    question:
      'Er barnet komfortabelt med å ha hodet under vann uten svømmebriller?',
    noResult: {
      level: 'Hval',
      message:
        'Vi anbefaler hvalmerket hvis barnet ikke liker å ha hodet under vann.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=2',
    },
    yesNextIndex: 2,
    image: '/img/opplaering/hvalmerket.png',
  },
  {
    question:
      'Kan barnet hente gjenstand på 1m dypt vann uten svømmebriller? Hopper fra bassengkanten alene?',
    noResult: {
      level: 'Hval',
      message:
        'Vi anbefaler hvalmerket for barn som fortsatt trenger å øve på dette.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=2',
    },
    yesNextIndex: 3,
    image: '/img/opplaering/hvalmerket.png',
  },
  {
    question:
      'Kan barnet flyte på mage og rygg uten hjelp i minst 15 sek (med ørene under vann uansett posisjon)?',
    noResult: {
      level: 'Skilpadde',
      message:
        'Vi anbefaler skilpaddemerket for å trene mer på flyteferdigheter.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=3',
    },
    yesNextIndex: 4,
    image: '/img/opplaering/skilpaddemerket.png',
  },
  {
    question:
      'Kan barnet svømme crawl beinspark på mage og rygg over 10 m uten hjelp?',
    noResult: {
      level: 'Pingvin',
      message: 'Vi anbefaler pingvinmerket for videre beinspark-trening.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=4',
    },
    yesNextIndex: 5,
    image: '/img/opplaering/pingvinmerket.png',
  },
  {
    question: 'Kan barnet svømme 15 m crawl og 15 m ryggcrawl?',
    noResult: {
      level: 'Selungen',
      message:
        'Vi anbefaler selungenmerket for å øve på teknikk og utholdenhet.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=5',
    },
    yesNextIndex: 6,
    image: '/img/opplaering/selungenmerket.png',
  },
  {
    question:
      'Kan barnet svømme 25 m crawl med pust på siden, 25 m ryggcrawl og stupe?',
    noResult: {
      level: 'Sel',
      message: 'Vi anbefaler selmerket for å forbedre teknikk og stup.',
      link: 'https://tryggivann.no/finnkursklubb.aspx?arr=68&kurstype=6',
    },
    yesResult: {
      level: 'Gratulerer!',
      message:
        'Barnet ditt har fullført alle nivåer. Kontakt klubben for å høre om videre svømmetilbud.',
      link: '/kontakt',
      image: '/img/opplaering/gratulerer.gif',
    },
    image: '/img/opplaering/selmerket.png',
  },
];
