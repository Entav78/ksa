export default function SkagerrakPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-3xl font-bold mb-3">Skagerrak Swim</h1>
      <p className="text-text/80 mb-6">
        Skagerrak Swim er vårt store årlige arrangement. All praktisk
        informasjon, påmelding og nyheter finner du på den offisielle nettsiden.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://skagerrakswim.no/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md px-4 py-2 bg-primary text-text hover:opacity-90 transition"
        >
          Gå til skagerrakswim.no
        </a>
        <a
          href="/dugnad"
          className="inline-flex items-center rounded-md px-4 py-2 bg-secondary text-text hover:bg-hover transition"
        >
          Frivillighet / dugnad
        </a>
        <a
          href="/kontakt"
          className="inline-flex items-center rounded-md px-4 py-2 border border-border hover:bg-hover transition"
        >
          Kontakt oss
        </a>
      </div>
    </section>
  );
}
