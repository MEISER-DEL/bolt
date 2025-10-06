import { MessageSquare, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Silva',
    business: 'Assistência TechCell',
    message: 'Em 2 semanas minha loja mudou completamente! Os clientes começaram a comentar que o Instagram ficou mais profissional.',
    rating: 5
  },
  {
    name: 'Mariana Costa',
    business: 'Cell Express',
    message: 'Economizei mais de R$500 por mês que gastava com designer. O Pack tem tudo que eu preciso!',
    rating: 5
  },
  {
    name: 'Rafael Mendes',
    business: 'Smart Fix',
    message: 'Material de qualidade absurda! Meus stories agora têm 3x mais visualizações.',
    rating: 5
  },
  {
    name: 'Juliana Santos',
    business: 'Cell Point',
    message: 'Investimento que se paga sozinho. Fechei 5 vendas diretas do Instagram na primeira semana!',
    rating: 5
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
          O que donos de loja estão dizendo 👇
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-8 hover:shadow-glow-teal transition-all duration-300 border-2 border-teal-400/40 hover:border-cyan-400 hover:scale-105"
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-teal-500 text-teal-500" />
                ))}
              </div>

              <div className="flex items-start space-x-3 mb-4">
                <MessageSquare className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <p className="text-gray-200 text-lg leading-relaxed italic">
                  "{testimonial.message}"
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-teal-500/30">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-300">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-cta rounded-2xl p-8 text-center shadow-glow-teal">
          <p className="text-2xl font-bold text-white">
            Junte-se a <span className="text-3xl">500+</span> lojas que já estão vendendo mais com o Pack Premium
          </p>
        </div>
      </div>
    </section>
  );
}
