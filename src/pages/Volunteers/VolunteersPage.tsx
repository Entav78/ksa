// src/pages/Volunteers/VolunteersPage.tsx
import { Link } from 'react-router-dom';

export function VolunteersPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-text">
      <h1 className="text-3xl font-bold mb-2">Dugnad i KSA</h1>
      <p className="mb-6 text-text/80">
        Dugnad er en viktig del av driften vår. Når alle bidrar litt, får vi til
        mye – både sportslig og sosialt. Her finner du en komprimert oversikt
        over hvordan dugnad fungerer hos oss.
      </p>

      {/* Hvordan fungerer dugnad */}
      <div className="rounded-lg border border-border bg-background p-4 shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-3">Slik fungerer dugnad</h2>
        <ul className="list-disc pl-5 space-y-1 text-text/90">
          <li>
            Dugnadsoppgaver fordeles på grupper og perioder gjennom sesongen.
          </li>
          <li>
            Varsling om oppgaver skjer via Spond/epost. Meld fra hvis du ikke
            kan møte, så vi rekker å finne erstatter.
          </li>
          <li>
            Noen oppgaver kan gi avlastning/poeng i andre dugnader – dette
            fremgår i utlysningen.
          </li>
          <li>
            Inntektene fra dugnad går direkte til aktivitet for barna/utøverne.
          </li>
        </ul>
      </div>

      {/* Lotteri */}
      <div className="rounded-lg border border-border bg-background p-4 shadow-sm mb-6">
        <h3 className="font-semibold mb-2">Lotteri</h3>
        <p className="text-text/80 mb-2">
          Lotteri er en av klubbens viktigste inntektskilder. Alle familier får
          et sett lodd å selge i én eller flere perioder.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Utdeling av lodd annonseres i Spond/epost.</li>
          <li>Betaling og innlevering skjer iht. informasjon i utsendelsen.</li>
          <li>
            Kan du ikke delta i perioden? Ta kontakt tidlig for å bytte eller
            avtale alternativ løsning.
          </li>
        </ul>
      </div>

      {/* Skagerrak Swim */}
      <div className="rounded-lg border border-border bg-background p-4 shadow-sm mb-6">
        <h3 className="font-semibold mb-2">
          Skagerrak Swim – felles dugnadshelg
        </h3>
        <p className="text-text/80 mb-2">
          Under{' '}
          <Link
            to="/skagerrak-swim"
            className="text-primary underline underline-offset-2"
          >
            Skagerrak Swim
          </Link>{' '}
          stiller hele klubben. Det er mange ulike oppgaver – både i hallen og
          rundt arrangementet.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Typiske oppgaver: sekretariat, vakter, kiosk, rigg/rydd.</li>
          <li>Skiftplan publiseres i forkant – bytt internt ved behov.</li>
          <li>Alle bidrag teller – også korte økter.</li>
        </ul>
      </div>

      {/* Dommere */}
      <div className="rounded-lg border border-border bg-background p-4 shadow-sm mb-6">
        <h3 className="font-semibold mb-2">Dommere</h3>
        <p className="text-text/80 mb-2">
          Klubben trenger flere dommere for å kunne delta og arrangere stevner.
          Kurs er korte og praktiske – vi hjelper deg i gang.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Målgruppe: foresatte og engasjerte medlemmer.</li>
          <li>Kurs annonseres i Spond/epost – meld interesse når du kan.</li>
          <li>Alle kostnader knyttet til kurs dekkes av klubben.</li>
        </ul>
      </div>

      {/* Frivillige verv */}
      <div className="rounded-lg border border-border bg-background p-4 shadow-sm mb-8">
        <h3 className="font-semibold mb-2">Frivillige verv</h3>
        <p className="text-text/80 mb-2">
          Vi trenger folk i blant annet arrangementskomité og dugnadskomité.
          Bidra med det du kan – mye eller lite.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Arrangementskomité: planlegging og gjennomføring av stevner.</li>
          <li>Dugnadskomité: koordinering og informasjon.</li>
          <li>Andre oppgaver etter behov (foto, web, info m.m.).</li>
        </ul>
      </div>

      {/* FAQ – tilpass med detaljer fra presentasjonen senere */}
      <div className="rounded-lg border border-border bg-background p-4 shadow-sm mb-8">
        <h3 className="font-semibold mb-2">Ofte stilte spørsmål</h3>
        <dl className="space-y-3">
          <div>
            <dt className="font-medium">Hva hvis jeg ikke kan møte?</dt>
            <dd className="text-text/80">
              Forsøk å bytte internt og gi beskjed i Spond/til kontaktperson så
              snart som mulig.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Kan jeg bidra på andre måter?</dt>
            <dd className="text-text/80">
              Ja! Si fra hva du kan bidra med (kiosk, vakter, mat, foto, IT,
              transport osv.). Alt hjelper.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Hvordan får jeg informasjon?</dt>
            <dd className="text-text/80">
              Spond er hovedkanalen. Viktig info sendes også på epost ved behov.
            </dd>
          </div>
        </dl>
      </div>

      {/* Kontakt */}
      <div className="rounded-lg border border-border bg-background p-5 shadow-sm">
        <h3 className="font-semibold mb-2">Kontakt</h3>
        <p className="text-text/80">
          Spørsmål om dugnad? Ta kontakt via{' '}
          <Link
            to="/kontakt"
            className="text-primary underline underline-offset-2"
          >
            kontaktsiden
          </Link>
          . Vi svarer fortløpende.
        </p>
        {/* Når dere vil publisere en offentlig PDF senere, legg den i /public/docs/
            og vis en knapp her. Eksempel:
        <a
          href="/docs/dugnad-oversikt.pdf"
          className="mt-3 inline-block rounded-md px-4 py-2 bg-primary text-text hover:opacity-90 transition"
        >
          Last ned oversikt (PDF)
        </a>
        */}
      </div>
    </section>
  );
}
