import { useEffect, useRef } from 'react';
import { MessageSquare, Star } from 'lucide-react';
import depoimento1 from '../assets/depoimento1.jpg';
import depoimento2 from '../assets/depoimento2.jpg';
import depoimento3 from '../assets/depoimento3.jpg';
import depoimento4 from '../assets/depoimento2 (1).jpg';

const testimonialImages = [
  depoimento1,
  depoimento2,
  depoimento3,
  depoimento4,
  depoimento1,
  depoimento2,
  depoimento3,
  depoimento4
];

const testimonials = [
  {
    name: 'joneduassistec',
    business: 'Assistência Técnica',
    message: 'Top comprei, muito bom e completo. Vale a pena!',
    rating: 5
  },
  {
    name: 'Cliente Satisfeito',
    business: 'Loja de Celulares',
    message: 'Já estamos usando aqui na loja, facilita demais nossa vida que é corrida, não temos tempo de ficar toda hora editando vídeo nem criando postagens, as meninas aqui adoraram kkkk',
    rating: 5
  },
  {
    name: 'Dono de Loja',
    business: 'Assistência Técnica',
    message: 'Muito bom irmão tá de parabéns. No início pensei que era golpe, mas meti a cara mesmo assim, pelo preço que c tá vendendo tá muito de graça. Vlw meu amigo. Qualquer dúvida só chamar. Pra cima!',
    rating: 5
  },
  {
    name: 'Empreendedor',
    business: 'Cell Express',
    message: 'Show de bola! Fica ligado aí que essa semana tem atualizações de artes editáveis, muita coisa nova...',
    rating: 5
  }
];

export default function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    let animationId: number;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;

      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4">
          O que donos de loja estão dizendo 👇
        </h2>

        <div className="mt-12 relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-500/50 hover:border-teal-400 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Depoimento ${(index % 4) + 1}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width={320}
                  height={500}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

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
