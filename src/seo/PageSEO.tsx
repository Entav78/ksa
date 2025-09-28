import { useEffect } from 'react';

type Props = {
  title?: string;
  description?: string;
  canonicalPath?: string; // f.eks. "/treningstider"
};

export default function PageSEO({ title, description, canonicalPath }: Props) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    // Marker meta vi styrer, så vi kan rydde opp ved rutenavigasjon
    const managedAttr = 'data-managed-by';
    const manager = 'PageSEO';

    // description
    let metaDesc = document.head.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    const createdDesc = !metaDesc;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute(managedAttr, manager);
      document.head.appendChild(metaDesc);
    }
    if (description) metaDesc.setAttribute('content', description);

    // canonical
    let linkCanonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    const createdCanon = !linkCanonical;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute(managedAttr, manager);
      document.head.appendChild(linkCanonical);
    }
    if (canonicalPath) {
      const origin = window.location.origin;
      linkCanonical.setAttribute('href', origin + canonicalPath);
    }

    // opprydding ved unmount / ruteskifte
    return () => {
      if (title) document.title = prevTitle;
      if (createdDesc && metaDesc?.getAttribute(managedAttr) === manager) {
        metaDesc.remove();
      }
      if (
        createdCanon &&
        linkCanonical?.getAttribute(managedAttr) === manager
      ) {
        linkCanonical.remove();
      }
    };
  }, [title, description, canonicalPath]);

  return null;
}
