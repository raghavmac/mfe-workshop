import React, { useRef, useEffect } from 'react';

export default function Catalog() {
  const ref = useRef(null);

  const renderMicrofrontend = () => {
    window.mountCatalogMfe(ref.current);
  }

  useEffect(() => {
    if (window && document && !document.getElementById('app-catalog')) {
      const script = document.createElement('script');
      script.id = 'app-catalog';
      script.src = 'http://localhost:8081/main.bundle.js';
      script.onload = renderMicrofrontend;
      document.head.appendChild(script);
    } else {
      renderMicrofrontend();
    }
  }, []);

  return (
    <div ref={ref} />
  )
}