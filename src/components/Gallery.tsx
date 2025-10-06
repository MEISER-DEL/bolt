import { useEffect, useRef } from 'react';
import arte1 from '../assets/arte1 - Copy.png';
import arte3 from '../assets/arte3.png';
import arte4 from '../assets/arte4.png';
import arte5 from '../assets/arte5.png';

const carouselImages = [
  arte1,
  arte5,
  arte4,
  arte3,
  arte1,
  arte5,
  arte4,
  arte3
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.8;
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 via-zinc-700/20 to-zinc-800/20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-4 drop-shadow-lg">
          Veja alguns dos designs que você vai receber 👇
        </h2>

        <div className="mt-16 relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-2xl border-4 border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Design exemplo ${(index % 4) + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={280}
                  height={360}
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 rounded-2xl p-8 text-center shadow-xl">
          <p className="text-xl text-white font-medium">
            <span className="text-3xl font-extrabold">+2700 modelos</span> prontos para você usar hoje mesmo e transformar sua presença digital!
          </p>
        </div>
      </div>
    </section>
  );
}
