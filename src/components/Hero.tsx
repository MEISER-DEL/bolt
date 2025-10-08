import { useState, useEffect } from 'react';

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
          +2.700 mídias prontas podem <span className="text-teal-400">multiplicar o faturamento</span> da sua loja de celulares ou assistência técnica, de forma rápida e simples!
        </h1>

        <p className="text-xs sm:text-sm text-white font-bold max-w-3xl mx-auto mb-12">
          Veja como ter acesso as artes altamente profissionais, sem gastar seu tempo e que servem para tudo o que você precisar!
        </p>

        <div className="max-w-md mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative" style={{ paddingTop: '177.78%' }}>
            {loadVideo ? (
              <iframe
                src="https://fast.wistia.net/embed/iframe/xkk49rnnzu?seo=true&videoFoam=false"
                title="Video VSL"
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

        <div className="flex items-center justify-center mb-8">
          <span className="text-lg font-medium text-gray-300">
            👉 Clique abaixo e leve agora seu Pack Premium Completo, com acesso imediato e artes 100% editáveis.
          </span>
        </div>

        <button
          onClick={scrollToPricing}
          className="bg-gradient-cta text-white text-xl font-bold px-12 py-5 rounded-xl shadow-lg inline-flex items-center space-x-2"
        >
          <span>🔥 QUERO ALAVANCAR MINHA EMPRESA</span>
        </button>
      </div>
    </section>
  );
}
