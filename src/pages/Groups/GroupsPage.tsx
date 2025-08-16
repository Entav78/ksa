// src/pages/Groups/GroupsPage.tsx
export default function GroupsPage() {
  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-3xl font-bold mb-4">Treningsgrupper</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {groups.map((g) => (
          <a
            key={g}
            href={`/grupper/${g.toLowerCase()}`}
            className="rounded-lg border border-border p-4 hover:bg-hover transition"
          >
            <h2 className="text-lg font-semibold">Gruppe {g}</h2>
            <p className="text-sm text-text/80">Info, trenere og utstyr.</p>
          </a>
        ))}
      </div>
    </section>
  );
}
