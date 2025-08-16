// src/pages/About/AboutPage.tsx
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-3xl font-bold mb-4">Om KSA</h1>
      <p className="mb-6 text-text/80">
        Kort om klubbens historie og profil. (TODO: fyll inn)
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="/om/verdier-mal"
          className="rounded-lg border border-border p-4 hover:bg-hover transition"
        >
          <h2 className="text-lg font-semibold">Verdier og mål</h2>
          <p className="text-sm text-text/80">Hva vi står for.</p>
        </a>
        <a
          href="/om/styret"
          className="rounded-lg border border-border p-4 hover:bg-hover transition"
        >
          <h2 className="text-lg font-semibold">Styret og organisasjon</h2>
          <p className="text-sm text-text/80">Roller og struktur.</p>
        </a>
        <a
          href="/om/arsmoter"
          className="rounded-lg border border-border p-4 hover:bg-hover transition"
        >
          <h2 className="text-lg font-semibold">Årsmøter</h2>
          <p className="text-sm text-text/80">Sakspapirer og protokoller.</p>
        </a>
      </div>
    </section>
  );
}
