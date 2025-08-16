// src/data/searchData.ts
export interface SearchItem {
  id: string;
  title: string;
  content: string;
  url: string;
}

export const searchData: SearchItem[] = [
  {
    id: 'faq-1',
    title: 'Hva bør barnet ha med seg?',
    content: 'Barnet bør ha med seg badedrakt eller badebukse og håndkle...',
    url: '/kurs/faq',
  },
  {
    id: 'nivaa-hval',
    title: 'Hval-nivå',
    content:
      'Hval-nivået handler om å bli trygg på å dykke hodet under vann...',
    url: '/kurs/nivaaer',
  },
  {
    id: 'homepage',
    title: 'Kristiansand Svømmeallianse',
    content: 'Forside med nyheter, Grasrotandel, Skagerrak Swim...',
    url: '/',
  },
  // legg til flere punkter: kurs, opplæring, om klubben, etc.
];
