import { Gift, MessageSquare, TrendingUp, FileSpreadsheet, Instagram, Calendar } from 'lucide-react';

const bonuses = [
  {
    icon: MessageSquare,
    number: 1,
    title: '50 Scripts poderosos para atendimentos no WhatsApp',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: TrendingUp,
    number: 2,
    title: 'Guia Prático para Redes Sociais',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: FileSpreadsheet,
    number: 3,
    title: 'Planilha Lucrativa 6.0',
    color: 'from-teal-600 to-cyan-600'
  },
  {
    icon: Instagram,
    number: 4,
    title: 'Venda no instagram enquanto foca no que importa',
    color: 'from-teal-600 to-teal-700'
  },
  {
    icon: MessageSquare,
    number: 5,
    title: '100 Legendas perfeitas para seus posts',
    color: 'from-cyan-600 to-cyan-700'
  },
  {
    icon: Calendar,
    number: 6,
    title: 'Seu calendário de postagens já está pronto',
    color: 'from-teal-700 to-cyan-700'
  }
];

export default function Bonus() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Gift className="w-12 h-12 text-cyan-400 drop-shadow-glow" />
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              BÔNUS EXCLUSIVOS
            </h2>
          </div>
          <p className="text-xl text-teal-200">
            Tudo isso incluído no seu Pack Premium sem custo adicional!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.number}
                className="relative bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-6 hover:shadow-glow-teal transition-all duration-300 hover:scale-105 border-2 border-teal-400/40 hover:border-cyan-400"
              >
                <div className={`absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br ${bonus.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {bonus.number}
                </div>

                <div className="flex items-start space-x-4 mt-2">
                  <div className={`w-12 h-12 bg-gradient-to-br ${bonus.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">
                      {bonus.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-cta text-white px-8 py-4 rounded-2xl shadow-glow-teal">
            <p className="text-2xl font-bold">
              Valor Total dos Bônus: <span className="text-3xl">R$ 597,00</span>
            </p>
            <p className="text-sm mt-1 text-teal-200">Seu investimento hoje: apenas R$ 27,90</p>
          </div>
        </div>
      </div>
    </section>
  );
}
