// src/pages/Groups/GroupA.tsx  (kopiér for B–F og bytt A)
export default function GroupC() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-2xl font-bold mb-2">Gruppe C</h1>
      <p className="text-text/80 mb-4">
        Konkurranse, NM-gruppe. (TODO: fyll inn)
      </p>

      <h2 className="text-lg font-semibold mb-2">Trenere</h2>
      <ul className="list-disc pl-5 text-text/90">
        <li>Navn – erfaring (TODO)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">Anbefalt utstyr</h2>
      <ul className="list-disc pl-5 text-text/90">
        <li>Briller, hette, treningstøy, osv. (TODO)</li>
      </ul>
    </section>
  );
}
