// src/pages/About/AnnualMeetingsPage.tsx
export default function AnnualMeetingsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 bg-background text-text">
      <h1 className="text-2xl font-bold mb-4">Årsmøtedokumenter</h1>
      <p className="text-text/80 mb-4">
        Per år: sakspapirer og signert protokoll.
      </p>
      <ul className="space-y-2">
        {/* TODO: list opp år dynamisk */}
        <li className="rounded border border-border p-3">2025 – TODO</li>
      </ul>
    </section>
  );
}
