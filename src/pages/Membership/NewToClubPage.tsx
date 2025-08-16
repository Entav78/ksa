import { Link } from 'react-router-dom';
import { Faq } from '@/components/faq/Faq';

export function NewToClubPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-text">
      <h1 className="text-3xl font-bold mb-2">Ny i klubben</h1>
      <p className="mb-6 text-text/80">
        Informasjon for nye medlemmer i Kristiansand Svømmeallianse.
      </p>

      {/* Intro-kort */}
      <div className="rounded-xl border border-border bg-background p-4 shadow-sm mb-8">
        <p>
          Velkommen! Her finner du det viktigste for å komme i gang: innmelding,
          grupper og nivåer, treningstider, utstyr og kontaktinfo.
        </p>
      </div>

      {/* Rask oversikt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <Link
          to="/medlemskap"
          className="rounded-lg border border-border bg-background p-4 hover:bg-hover transition block"
        >
          <h2 className="text-lg font-semibold mb-1">Innmelding & priser</h2>
          <p className="text-sm text-text/80">
            Hvordan melde seg inn og hva det koster.
          </p>
        </Link>

        <Link
          to="/kurs"
          className="rounded-lg border border-border bg-background p-4 hover:bg-hover transition block"
        >
          <h2 className="text-lg font-semibold mb-1">Svømmeopplæring</h2>
          <p className="text-sm text-text/80">
            Finn riktig nivå og meld på via Tryggivann.
          </p>
        </Link>

        <Link
          to="/treningstider"
          className="rounded-lg border border-border bg-background p-4 hover:bg-hover transition block"
        >
          <h2 className="text-lg font-semibold mb-1">Treningstider</h2>
          <p className="text-sm text-text/80">
            Se oppdatert plan for din gruppe.
          </p>
        </Link>

        <Link
          to="/om-klubben"
          className="rounded-lg border border-border bg-background p-4 hover:bg-hover transition block"
        >
          <h2 className="text-lg font-semibold mb-1">Om klubben</h2>
          <p className="text-sm text-text/80">
            Verdier, organisering og kontakt.
          </p>
        </Link>
      </div>

      {/* Utstyr & forventninger */}
      <div className="rounded-xl border border-border bg-background p-5 shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-3">Utstyr og forventninger</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Badetøy som sitter godt (ikke bomull).</li>
          <li>Svømmebriller og badehette anbefales.</li>
          <li>Møt opp 10 min før økten, klar til start.</li>
          <li>Gi beskjed til trener ved fravær eller skade.</li>
        </ul>
      </div>

      {/* Praktisk info */}
      <div className="rounded-xl border border-border bg-background p-5 shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-3">Praktisk info</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <dt className="font-medium">Treningssteder</dt>
            <dd className="text-text/80">Aquarama, Spicheren.</dd>
          </div>
          <div>
            <dt className="font-medium">Kontakt</dt>
            <dd className="text-text/80">
              E-post og telefon til administrasjon/trenere (legg inn når klart).
            </dd>
          </div>
        </dl>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <Link
          to="/kurs"
          className="inline-flex items-center rounded-md px-4 py-2 bg-primary text-text hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Finn nivå og meld på
        </Link>
        <Link
          to="/medlemskap"
          className="inline-flex items-center rounded-md px-4 py-2 bg-secondary text-text hover:bg-hover transition focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          Innmelding & priser
        </Link>
      </div>

      {/* Valgfritt: FAQ hvis du vil gjenbruke */}
      <Faq />
    </section>
  );
}
