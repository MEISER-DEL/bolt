import { useState, useEffect } from 'react';

export default function OfferVSL() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadVideo(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('offer-vsl');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="offer-vsl" className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          SEUS CONCORRENTES ESTÃO ROUBANDO SEUS CLIENTES <span className="text-yellow-400">AGORA MESMO</span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Enquanto você perde tempo com stories que ninguém vê, eles tão usando as estratégias certas pra vender todo santo dia.
        </p>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            {loadVideo ? (
              <iframe
                src="https://fast.wistia.net/embed/iframe/kx4nr0gwxe?seo=true&videoFoam=false"
                title="Video VSL Oferta"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                loading="lazy"
              ></iframe>
            ) : (
              <div className="absolute top-0 left-0 w-full h-full bg-zinc-800 flex items-center justify-center">
                <div className="text-white">Carregando vídeo...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
