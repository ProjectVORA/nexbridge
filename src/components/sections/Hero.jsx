import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero({ heroSlides, chooseService, goTo }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const touchX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCarouselIndex((i) => (i + 1) % heroSlides.length), 4000);
    return () => clearInterval(timer);
  }, [carouselIndex, heroSlides.length]);

  return (
    <>
      <section id="home" aria-label="Hero slider" className="relative w-full overflow-hidden bg-[#080616]"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx < -40) setCarouselIndex((i) => (i + 1) % heroSlides.length);
          if (dx > 40) setCarouselIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
          touchX.current = null;
        }}>

        {/* Preload next image for smoother transitions */}
        {heroSlides[(carouselIndex + 1) % heroSlides.length] && (
          <img
            src={heroSlides[(carouselIndex + 1) % heroSlides.length].image}
            alt=""
            className="hidden"
            loading="eager"
          />
        )}

        <div className="relative h-[580px] w-full sm:h-[600px] lg:h-[710px]">

          {/* Image with smooth fade transition */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, idx) => (
              <img
                key={`slide-${idx}`}
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                  idx === carouselIndex ? 'opacity-100' : 'opacity-0'
                }`}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080616]/95 via-[#080616]/70 to-[#080616]/10" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080616]/70 to-transparent" aria-hidden="true" />

          {/* Content with staggered animation */}
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6">
            <div className="max-w-2xl">

              {/* Badge with entrance animation */}
              <span
                key={`badge-${carouselIndex}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#080616] animate-fade-in-up"
                style={{ animationDelay: '100ms' }}
              >
                <span className="h-2 w-2 rounded-full bg-[#2F2FE4] pulse-dot" />
                End-to-End Technology Solutions
              </span>

              {/* Title with slide animation */}
              <h1
                key={`title-${carouselIndex}`}
                className="mt-4 text-[clamp(2.2rem,6vw,4.2rem)] font-medium leading-[1.02] tracking-tight text-white animate-slide-in-left"
                style={{ animationDelay: '200ms' }}
              >
                {heroSlides[carouselIndex].title}
              </h1>

              {/* Subtitle with fade */}
              <p
                key={`subtitle-${carouselIndex}`}
                className="mt-2 text-[clamp(1.05rem,2.5vw,1.5rem)] font- text-white animate-fade-in"
                style={{ animationDelay: '300ms' }}
              >
                {heroSlides[carouselIndex].subtitle}
              </p>

              {/* Description with fade */}
              <p
                key={`text-${carouselIndex}`}
                className="mt-3 max-w-xl text-[16px] leading-relaxed text-white/90 animate-fade-in"
                style={{ animationDelay: '400ms' }}
              >
                {heroSlides[carouselIndex].text}
              </p>

              {/* Buttons with staggered entrance */}
              <div
                key={`buttons-${carouselIndex}`}
                className="mt-6 flex flex-wrap gap-3 animate-fade-in-up"
                style={{ animationDelay: '500ms' }}
              >
                <button
                  onClick={() => chooseService(heroSlides[carouselIndex].service)}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#080616] hover:shadow-2xl hover:scale-105 active:scale-95"
                >
                  {heroSlides[carouselIndex].cta}
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => goTo("products")}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#080616] hover:border-white hover:scale-105 active:scale-95"
                >
                  Browse Products
                </button>

              </div>

            </div>
          </div>

          {/* Navigation buttons with hover effects */}
          <button
            onClick={() => setCarouselIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)}
            aria-label="Previous slide"
            className="group absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur-sm text-[#080616] shadow-xl transition-all duration-300 hover:bg-[#2F2FE4] hover:text-white hover:scale-110 hover:shadow-2xl active:scale-95 sm:left-5"
          >
            <ArrowLeft size={19} className="transition-transform group-hover:-translate-x-0.5" />
          </button>

          <button
            onClick={() => setCarouselIndex((i) => (i + 1) % heroSlides.length)}
            aria-label="Next slide"
            className="group absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur-sm text-[#080616] shadow-xl transition-all duration-300 hover:bg-[#2F2FE4] hover:text-white hover:scale-110 hover:shadow-2xl active:scale-95 sm:right-5"
          >
            <ArrowRight size={19} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Progress indicators */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6">
            <div className="mx-auto max-w-7xl">

              {/* Dot indicators with smooth transitions */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Hero slides">
                {heroSlides.map((s, i) => (
                  <button
                    key={s.title}
                    role="tab"
                    aria-selected={carouselIndex === i}
                    aria-label={`Go to slide: ${s.title}`}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === carouselIndex
                        ? "w-7 bg-white shadow-lg scale-110"
                        : "w-2.5 bg-white/50 hover:bg-white/80 hover:scale-125"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add these CSS animations to your global styles or Tailwind config */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes progressFill {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-progress-fill {
          animation: progressFill 5s linear forwards;
        }

        .pulse-dot {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}
