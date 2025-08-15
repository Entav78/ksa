import { useEffect } from 'react';

type Props = { appId: string }; // f.eks. "elfsight-app-abc123"

export function ElfsightWidget({ appId }: Props) {
  useEffect(() => {
    // Unngå å legge til scriptet flere ganger
    if (!document.querySelector('script[data-elfsight]')) {
      const s = document.createElement('script');
      s.src = 'https://static.elfsight.com/platform/platform.js';
      s.async = true;
      s.setAttribute('data-elfsight', 'true');
      document.body.appendChild(s);
    }
  }, []);

  return <div className={appId} />;
}
