// Keep it simple: flat list + published flag
export type NavItem = {
  label: string;
  to: string;
  published: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  // Forside
  { label: 'Forside', to: '/', published: true },

  // Kurs / opplæring
  { label: 'Svømmeopplæring', to: '/kurs', published: true },

  // Trening
  { label: 'Treningstider', to: '/treningstider', published: false }, // ← sett true når klar
  { label: 'Terminliste', to: '/terminliste', published: false },
  { label: 'Grupper', to: '/grupper', published: false },
  { label: 'Trenere', to: '/trenere', published: false },
  { label: 'Utstyr', to: '/utstyr', published: false },

  // Medlemskap
  { label: 'Medlemskap', to: '/medlemskap', published: false },
  { label: 'Ny i klubben', to: '/ny-i-klubben', published: false },

  // Om klubben
  { label: 'Om klubben', to: '/om', published: false },
  { label: 'Verdier & mål', to: '/om/verdier-mal', published: false },
  { label: 'Styret & organisasjon', to: '/om/styret', published: false },
  { label: 'Årsmøter', to: '/om/arsmoter', published: false },

  // Dugnader
  { label: 'Dugnad', to: '/dugnad', published: false },

  // Kontakt
  { label: 'Kontakt', to: '/kontakt', published: false },
  { label: 'Hvor trener vi?', to: '/kontakt/steder', published: false },
  { label: 'Sosiale medier', to: '/sosiale-medier', published: false },

  // Eksternt innhold / egen side
  { label: 'Skagerrak Swim', to: '/skagerrak-swim', published: false },
];
