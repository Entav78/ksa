// src/components/social/ElfsightWidget.tsx
import { useEffect } from 'react';

type Props = { appId: string };

export default function ElfsightWidget({ appId }: Props) {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="elfsightcdn.com/platform.js"],script[src*="static.elfsight.com/platform"]'
    );
    if (!existing) {
      const s = document.createElement('script');
      s.src = 'https://elfsightcdn.com/platform.js';
      s.async = true;
      s.setAttribute('data-elfsight', 'true'); // marker so we can detect it later
      document.body.appendChild(s);
    }
  }, []);

  // The data-elfsight-app-lazy attribute is optional; Elfsight uses it but
  // the widget also works without it.
  return <div className={appId} data-elfsight-app-lazy />;
}
