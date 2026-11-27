import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection({
  caseStudies,
  caseStudySliderRef,
  scrollCaseStudies,
  onCaseStudyScroll,
  caseStudyIndex,
  goToCaseStudy,
  chooseService,
}) {
  return (
    <section id="case-studies" className="bg-[#080616]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-3xl">
          <p className="eyebrow">Case Studies</p>
          <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
            Real work. Real <span className="gradient-text">results.</span>
          </h2>
          <p className="mt-3 leading-relaxed text-white/80">
            The challenge, the solution and the result — for projects like yours. Six recent projects, with real on-site photos.
          </p>
        </div>

        {/* ────────── CASE STUDIES SLIDER ────────── */}
        <div className="relative mt-8">

          {/* Desktop Arrows */}
          <button
            onClick={() => scrollCaseStudies(-1)}
            aria-label="Previous case study"
            className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-left-6"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => scrollCaseStudies(1)}
            aria-label="Next case study"
            className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-right-6"
          >
            <ArrowRight size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={caseStudySliderRef}
            onScroll={onCaseStudyScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-4"
          >
            {caseStudies.map((cs) => (
              <article
                key={cs.title}
                data-case-card
                className="flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] glass transition hover:-translate-y-1 sm:w-[380px] lg:w-[400px]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={cs.image} alt={cs.title} className="h-full w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#080616] shadow">
                    {cs.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-medium leading-tight text-white [overflow-wrap:anywhere]">{cs.title}</h3>
                  <p className="mt-1 text-xs font-normal text-white/60">{cs.meta}</p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Challenge</p>
                      <ul className="mt-2 space-y-1.5">
                        {cs.challenge.map((x) => (
                          <li key={x} className="flex gap-2 text-sm text-white/80">
                            <span className="text-white">•</span>
                            <span className="[overflow-wrap:anywhere]">{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Solution</p>
                      <ul className="mt-2 space-y-1.5">
                        {cs.solution.map((x) => (
                          <li key={x} className="flex gap-2 text-sm text-white/80">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-white" />
                            <span className="[overflow-wrap:anywhere]">{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-[#2F2FE4]">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Result</p>
                      <ul className="mt-2 space-y-1.5">
                        {cs.result.map((x) => (
                          <li key={x} className="flex gap-2 text-sm font-normal text-white">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-white" />
                            <span className="[overflow-wrap:anywhere]">{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80">
                    Get a similar result <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Case study slides">
            {caseStudies.map((cs, i) => (
              <button
                key={cs.title}
                role="tab"
                aria-selected={caseStudyIndex === i}
                aria-label={`Go to ${cs.title}`}
                onClick={() => goToCaseStudy(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  caseStudyIndex === i
                    ? "w-7 bg-[#2F2FE4] shadow-lg"
                    : "w-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
        {/* ────────── END SLIDER ────────── */}

      </div>
    </section>
  );
}
