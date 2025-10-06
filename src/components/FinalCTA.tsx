import { AlertCircle, TrendingDown } from 'lucide-react';

export default function FinalCTA() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AlertCircle className="w-12 h-12 text-teal-400" />
            <h2 className="text-4xl sm:text-5xl font-extrabold">
              Ainda está pensando?
            </h2>
          </div>

          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            Cada minuto sem esse pack é uma venda que você pode estar perdendo.
          </p>

          <div className="flex items-center justify-center space-x-3 mb-12">
            <TrendingDown className="w-8 h-8 text-red-400" />
            <p className="text-xl text-teal-300 font-bold">
              Aproveite enquanto está com desconto ativo por tempo limitado.
            </p>
          </div>

          <button
            onClick={scrollToPricing}
            className="bg-gradient-cta hover:shadow-glow-teal text-white text-2xl font-extrabold px-16 py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse-slow inline-flex items-center space-x-3"
          >
            <span>🚀 QUERO ALAVANCAR MINHA EMPRESA AGORA</span>
          </button>

          <p className="text-gray-400 mt-6 text-sm">
            (Acesso Imediato Após a Compra)
          </p>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            © 2025 Pack Premium. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2">
            Este produto é comercializado com garantia de 7 dias através da plataforma de pagamento segura.
          </p>
        </div>
      </footer>
    </>
  );
}
