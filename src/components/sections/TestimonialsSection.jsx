import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

export default function TestimonialsSection({ testimonials, testimonialSliderRef, scrollTestimonials }) {
  return (
    <section className="bg-[#162E93] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* ────────── LEFT SIDE: HEADING & CONTROLS ────────── */}
          <div className="lg:col-span-4 flex flex-col items-start pr-4">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Quote size={32} className="text-white/80" fill="currentColor" />
            </div>

            <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-medium leading-tight text-white">
              What our<br />customers are<br />saying
            </h2>

            {/* Arrows to scroll the slider */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => scrollTestimonials(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white hover:text-[#162E93]"
                aria-label="Previous review"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => scrollTestimonials(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white hover:text-[#162E93]"
                aria-label="Next review"
              >
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

          {/* ────────── RIGHT SIDE: HORIZONTAL SLIDER ────────── */}
          <div className="lg:col-span-8 relative w-full">
            {/*
              The slider container.
              We use negative margin and padding so the cards can bleed off the right edge naturally.
            */}
            <div
              ref={testimonialSliderRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-6 shadow-xl sm:w-[340px]"
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex gap-1 text-[#00B67A]">
                      {Array.from({ length: item.stars }).map((_, starIdx) => (
                        <Star key={starIdx} size={18} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="mt-5 text-sm leading-relaxed text-gray-700 line-clamp-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#2F2FE4] to-[#080616] text-xs font-bold text-white">
                      {item.initials}
                    </span>
                    <div className="text-left">
                      <span className="block text-sm font-semibold text-gray-900">{item.role}</span>
                      <span className="block text-xs text-gray-500">{item.org}</span>
                    </div>
                  </div>
                </div>
              ))}
              {/* Invisible spacer to allow the last card to scroll fully to the left */}
              <div className="w-4 shrink-0 sm:w-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
