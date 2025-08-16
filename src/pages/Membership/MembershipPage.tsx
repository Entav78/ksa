// src/pages/Membership/MembershipPage.tsx
export default function MembershipPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-3xl font-bold mb-3">Medlemskap</h1>
      <p className="text-text/80 mb-6">Bli medlem og bli en del av KSA.</p>

      <a
        href="https://medlemskap.nif.no/23797"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-text px-4 py-2 rounded hover:bg-secondary transition"
      >
        Bli medlem
      </a>

      <h2 className="text-xl font-semibold mt-8 mb-2">Viktig informasjon</h2>
      <ul className="list-disc pl-5 space-y-1 text-text/90">
        <li>Deltakelse/treningsgruppe må bekreftes av klubben før oppstart.</li>
        <li>
          Utmelding gjøres per e-post til{' '}
          <a className="underline text-primary" href="mailto:elin@ksa.no">
            elin@ksa.no
          </a>
          .
        </li>
        <li>
          Utmelding i løpet av sesong gir ikke rett til tilbakebetaling av
          medlemskontingent eller treningsavgift.
        </li>
      </ul>
    </section>
  );
}
