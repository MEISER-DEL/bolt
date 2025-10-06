import { Sparkles, Clock, Smartphone, CreditCard as Edit3, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Designs prontos para vender todos os dias',
    description: 'Sem precisar contratar designer — só edite e poste.'
  },
  {
    icon: Clock,
    title: 'Economize tempo e ganhe autoridade',
    description: 'Pareça uma marca grande e profissional em minutos.'
  },
  {
    icon: Smartphone,
    title: 'Modelos prontos para Instagram, WhatsApp e loja física',
    description: 'Stories, posts, banners, e artes para impressões.'
  },
  {
    icon: Edit3,
    title: 'Totalmente editável no Canva (fácil)',
    description: 'Personalize com sua logo em 2 cliques.'
  },
  {
    icon: TrendingUp,
    title: 'Pacote atualizado mensalmente',
    description: 'Designs novos todo mês, sem custo adicional.'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 via-cyan-900 to-teal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
          Por que centenas de assistências estão usando o Pack Premium?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm p-8 rounded-2xl border-2 border-teal-400/40 hover:border-teal-300 hover:shadow-glow-teal transition-all duration-300 hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
