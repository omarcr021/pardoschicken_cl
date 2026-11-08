import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_BANNERS } from '../../data/banners';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-neutral-900 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Promociones destacadas"
    >
      {/* Slider Track */}
      <div 
        className="flex transition-transform duration-700 ease-out will-change-transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {HERO_BANNERS.map((banner, idx) => (
          <div
            key={banner.id}
            className="w-full shrink-0 relative aspect-[3/4] md:aspect-[2000/695] bg-neutral-950 flex items-center justify-center overflow-hidden"
          >
            <picture className="w-full h-full block">
              {/* Mobile image */}
              <source media="(max-width: 767px)" srcSet={banner.mobileImage} />
              {/* Desktop image */}
              <source media="(min-width: 768px)" srcSet={banner.desktopImage} />
              <img
                src={banner.desktopImage}
                alt={banner.title}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center select-none"
              />
            </picture>

            {/* Optional subtle overlay with CTA button if user desires to click directly */}
            <a
              href={banner.targetUrl}
              className="absolute inset-0 z-10"
              aria-label={banner.title}
            >
              <span className="sr-only">{banner.title}</span>
            </a>
          </div>
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-[#E3101B] text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 active:scale-95"
        aria-label="Banner anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/40 hover:bg-[#E3101B] text-white backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 active:scale-95"
        aria-label="Banner siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {HERO_BANNERS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'w-8 h-2.5 bg-[#E3101B] shadow-md'
                : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
