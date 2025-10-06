import { useEffect, useRef } from 'react';

const testimonialImages = [
  'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3771787/pexels-photo-3771787.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=400'
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

        <div className="mt-12 relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonialImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-500/50 hover:border-teal-400 transition-all duration-300"
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

        <div className="mt-16 bg-gradient-cta rounded-2xl p-8 text-center shadow-glow-teal">
          <p className="text-2xl font-bold text-white">
            Junte-se a <span className="text-3xl">500+</span> lojas que já estão vendendo mais com o Pack Premium
          </p>
        </div>
      </div>
    </section>
  );
}
