import { FaExternalLinkAlt } from 'react-icons/fa';

export type PartnerItem = {
  title: string;
  img: string; // importert logo
  alt: string; // tilgjengelighets-tekst
  href?: string; // valgfri lenke
};

type Props = { items: PartnerItem[] };

export function PartnerGrid({ items }: Props) {
  return (
    <section aria-labelledby="partnergrid-title" className="mt-10">
      <h2
        id="partnergrid-title"
        className="text-xl font-semibold text-center mb-4 text-text"
      >
        Samarbeid og støtte
      </h2>

      <div className="flex justify-center">
        <div
          className="
            flex flex-wrap justify-center gap-4
            max-w-5xl mx-auto
          "
        >
          {items.map((it) => {
            const Card = (
              <div
                className="
                  h-24 sm:h-28 md:h-32
                  rounded-xl border border-border
                  bg-background text-text
                  shadow-sm
                  flex items-center justify-center
                  p-3
                  transition
                  hover:shadow-md
                "
                title={it.title}
              >
                <img
                  src={it.img}
                  alt={it.alt}
                  className="partner-logo"
                  loading="lazy"
                />
              </div>
            );

            return it.href ? (
              <a
                key={it.title}
                href={it.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative rounded-xl
                  focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-[var(--primary-color)]
                  focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-color)]
                "
              >
                {Card}
                <span className="sr-only">{it.title} – åpnes i ny fane</span>
                <FaExternalLinkAlt
                  aria-hidden
                  className="
                    absolute top-2 right-2 text-primary
                    opacity-0 group-hover:opacity-70 transition
                    text-sm
                  "
                />
              </a>
            ) : (
              <div key={it.title}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
