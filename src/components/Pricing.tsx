import { Check, Shield } from 'lucide-react';

const basicIncludes = [
  '25 POSTS EDITÁVEIS',
  '10 STORIES',
  '30 REELS VIRAIS'
];

const premiumIncludes = [
  '400 VÍDEOS PARA IPHONE',
  '300 VÍDEOS PARA XIAOMI',
  '200 VÍDEOS PARA ASSISTÊNCIA',
  '370 POSTS PRONTOS E EDITÁVEIS',
  'IPHONE | XIAOMI | POCO | REALME',
  '200 IMAGENS FULL IPHONE',
  '230 IMAGENS FULL XIAOMI',
  '42 DESTAQUES EDITÁVEIS',
  '50 BIOGRAFIAS',
  '50 LEGENDAS PRONTAS',
  'MODELO PARA PLACA PIX'
];

const bonuses = [
  '50 scripts para atendimento no whatsapp',
  'Estratégia para redes sociais',
  'Controle de serviços para assistência técnica',
  'Controle de vendas para loja de celulares',
  'Instagram vendedor automático',
  '50 Frases Persuasivas',
  '50 Biografias Personalizadas (Assistência Técnica)',
  '+200 Ganchos Virais'
];

export default function Pricing() {
  const handlePurchase = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-transparent to-teal-600/20 animate-pulse-slow"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-teal-800/40 to-cyan-800/40 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-2 border-teal-400/40 hover:border-teal-300 hover:shadow-glow-teal transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">MARKETING SIMPLES</h3>
              <p className="text-sm text-gray-300 font-medium mb-6">acesso imediato</p>
            </div>

            <div className="space-y-3 mb-8">
              {basicIncludes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-white">R$9,90</span>
              </div>

              <button
                onClick={() => handlePurchase('https://pay.cakto.com.br/bbqvjep')}
                className="w-full bg-gradient-cta hover:shadow-glow-teal text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105"
              >
                QUERO ESSA OPÇÃO
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-white text-teal-600 text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                MAIS VENDIDO
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-extrabold text-white mb-2">SUPER OFERTA</h3>
              <p className="text-sm text-teal-100 font-bold mb-4">porque sua empresa vale muito mais</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <h4 className="font-bold text-white mb-4 text-lg">O QUE ESTÁ INCLUSO?</h4>
              <div className="space-y-2">
                {premiumIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-200 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <h4 className="font-bold text-white mb-4 text-lg">BÔNUS EXCLUSIVOS:</h4>
              <div className="space-y-2">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-teal-200 flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium text-sm">BÔNUS {index + 1}: {bonus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="text-teal-200 line-through text-3xl mb-1 font-bold">R$ 97,00</div>
                <div className="text-6xl font-extrabold text-white mb-2">R$27,90</div>
                <div className="text-teal-100 font-bold text-lg">MAIS BARATO QUE UMA PIZZA!</div>
              </div>

              <button
                onClick={() => handlePurchase('https://pay.cakto.com.br/dzcr2op')}
                className="w-full bg-white hover:bg-gray-100 text-teal-600 font-bold py-5 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg text-lg animate-pulse-slow"
              >
                🔥 QUERO ESSA OPÇÃO
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-teal-500/30">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Shield className="w-8 h-8 text-green-500" />
            <h3 className="text-2xl font-bold text-white">Garantia de Satisfação</h3>
          </div>
          <p className="text-center text-gray-200 text-lg">
            <span className="font-bold">7 dias de garantia total.</span> Se não gostar, é só pedir reembolso. Sem perguntas, sem complicação.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-red-600 font-bold text-xl">
            ⚠️ APROVEITE AGORA — Você NÃO vai encontrar esse preço depois!
          </p>
        </div>
      </div>
    </section>
  );
}
