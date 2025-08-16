// src/pages/Volunteers/VolunteersPage.tsx
export default function VolunteersPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-2xl font-bold mb-4">Dugnad og frivillighet</h1>
      <ul className="list-disc pl-5 space-y-2 text-text/90">
        <li>Lotteri – viktig inntekt (TODO)</li>
        <li>Skagerrak Swim – felles dugnadshelg (TODO)</li>
        <li>Dommere og arrangementskomité (TODO)</li>
      </ul>
      <p className="mt-4">
        Se presentasjon:{' '}
        <a
          href="https://docs.google.com/presentation/d/1nqTEgQp_VE9yU_H9io_GZ_lDjh0IWU3FfwzPJYM4Wa8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-primary"
        >
          Foreldremøte (lenke)
        </a>
      </p>
    </section>
  );
}
