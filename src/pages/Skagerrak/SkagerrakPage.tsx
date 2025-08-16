// src/pages/SkagerrakSwimPage.tsx
export default function Skagerrak() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-2xl font-bold mb-4">Skagerrak Swim</h1>
      <p className="text-text/80 mb-4">
        Mer informasjon finner du på skagerrakswim.no.
      </p>
      <a
        href="https://skagerrakswim.no/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-text px-4 py-2 rounded hover:bg-secondary transition"
      >
        Gå til Skagerrak Swim
      </a>
    </section>
  );
}
