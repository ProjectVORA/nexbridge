import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export default function IndustriesSection({
  industryFilters,
  industryFilter,
  setIndustryFilter,
  industrySliderRef,
  scrollIndustries,
  onIndustryScroll,
  industryIndex,
  setIndustryIndex,
  goToIndustry,
  detailedIndustries,
  openIndustry,
  chooseCatalogCategory,
  chooseService,
}) {
  return (
    <section id="industries" className="bg-[#1A1953]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">

        <div className="max-w-3xl">
          <p className="eyebrow">Industries We Serve</p>
          <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
            Industries We Serve — <span className="text-white">Tailored IT For Every Business</span>
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-white/80">
            One partner, different needs. See what we build for YOUR industry — real work, installed and working on site.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Filter industries">
          {industryFilters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={industryFilter === f}
              onClick={() => {
                setIndustryFilter(f);
                // Reset slider to start when filter changes
                if (industrySliderRef.current) industrySliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                setIndustryIndex(0);
              }}
              className={`rounded-full px-4 py-2.5 text-sm font-normal transition ${
                industryFilter === f
                  ? "bg-[#2F2FE4] text-white shadow-lg"
                  : "bg-white/10 text-white ring-1 ring-[#2F2FE4] hover:bg-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mt-3 text-sm text-white/80" role="status">
          Showing <strong className="text-white">{detailedIndustries.filter((c) => industryFilter === "All" || c.filter === industryFilter).length}</strong> {industryFilter === "All" ? "industries" : `${industryFilter} solution`}. Tap View Full Details to open the full screen for that industry.
        </p>

        {/* ────────── INDUSTRIES SLIDER ────────── */}
        <div className="relative mt-8">

          {/* Desktop Arrows */}
          <button
            onClick={() => scrollIndustries(-1)}
            aria-label="Previous industry"
            className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-left-6"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={() => scrollIndustries(1)}
            aria-label="Next industry"
            className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-right-6"
          >
            <ArrowRight size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={industrySliderRef}
            onScroll={onIndustryScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-4"
          >
            {detailedIndustries
              .filter((c) => industryFilter === "All" || c.filter === industryFilter)
              .map((card) => (
                <article
                  key={card.id}
                  data-industry-card
                  className="flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] glass transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[400px] md:w-[460px]"
                >
                  <div className="relative h-52 w-full overflow-hidden sm:h-60">
                    <img src={card.image} alt={`${card.name} — ${card.status}`} className="h-full w-full object-cover" />
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#080616] shadow-lg">{card.status}</span>
                    <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#080616]/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                      <card.icon size={14} />{card.filter}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-[22px] font-medium leading-tight text-white [overflow-wrap:anywhere]">{card.name}</h3>
                    <p className="mt-1 text-sm font-normal text-white/70">{card.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 [overflow-wrap:anywhere]">{card.detail}</p>

                    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white">What We Do For This Industry</p>
                    <ul className="mt-3 space-y-2">
                      {card.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm font-seminormal leading-snug text-white">
                          <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-white" />
                          <span className="[overflow-wrap:anywhere]">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-2xl border border-[#2F2FE4] bg-white/10 p-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Example Project</p>
                      <p className="mt-1.5 text-sm font-seminormal leading-relaxed text-white [overflow-wrap:anywhere]">{card.example}</p>
                      <p className="mt-1 text-xs font-normal text-white">{card.timeline}</p>
                    </div>

                    <div className="mt-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">Popular Products</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {card.products.map((p) => (
                          <button key={p} onClick={() => chooseCatalogCategory(card.name, p)} className="rounded-full border border-[#2F2FE4] bg-[#080616] px-3 py-1.5 text-xs font-normal text-white transition hover:bg-[#2F2FE4] [overflow-wrap:anywhere]">
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => openIndustry(card.id)} className="mt-auto pt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white shadow-md hover:bg-white hover:text-[#080616]">
                      View Full Details <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Industry slides">
            {detailedIndustries
              .filter((c) => industryFilter === "All" || c.filter === industryFilter)
              .map((c, i) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={industryIndex === i}
                  aria-label={`Go to ${c.name}`}
                  onClick={() => goToIndustry(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    industryIndex === i
                      ? "w-7 bg-[#2F2FE4] shadow-lg"
                      : "w-2.5 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
          </div>

        </div>
        {/* ────────── END SLIDER ────────── */}

        <div className="mt-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#2F2FE4] to-[#080616] p-[1.5px]">
          <div className="flex flex-col gap-4 rounded-[27px] bg-[#080616] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-xl font-medium text-white sm:text-2xl">Not Sure Which Industry Fits You?</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 [overflow-wrap:anywhere]">
                We also serve: <strong className="text-white">Professional Services, Hospitality, Real Estate, NGOs, Coaching Institutes</strong> — Talk to an Expert
              </p>
            </div>
            <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">
              Talk to an Expert <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
