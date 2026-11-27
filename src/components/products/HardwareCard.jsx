import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

export default function HardwareCard({ product, setSelectedProduct, chooseService }) {
  const items = product.items || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalMs = 3500;

  // Autoplay per card
  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const activeItem = items[activeIndex] || { name: "", desc: "" };

  const go = (dir) =>
    setActiveIndex((p) => (p + dir + items.length) % items.length);

  return (
    <article
      onClick={() => setSelectedProduct(`${product.title} — ${activeItem.name}`)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group relative flex h-full min-h-[250px] w-full cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-[#111]"
    >
      {/* ── Background image slides with each product ── */}
      {items.map((it, i) => (
        <img
          key={it.name}
          src={it.image}
          alt={it.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay - Darker at the bottom to ensure text readability */}

      {/* Top-right dots (one per product) */}
      <div className="absolute right-5 top-5 z-10 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Show ${items[i].name}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-6 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Bottom content wrapper ── */}
      <div className="relative z-10 mt-auto flex w-full flex-col p-5 sm:p-6">

        {/* Text Content Group */}
        <div className="mb-4">
          {/* Category tag */}

          {/* Sliding product name + desc */}
          <div className="relative mt-2 h-[56px] overflow-hidden">
            {items.map((it, i) => (
              <div
                key={it.name}
                className={`absolute inset-0 flex flex-col justify-start transition-all duration-500 ${
                  i === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="shrink-0 text-cyan-400" />
                  <span className="text-3xl font-medium text-white">{it.name}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/70">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons - aligned to the bottom */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              chooseService(product.service);
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Get a Quote <ArrowUpRight size={15} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(`${product.title} — ${activeItem.name}`);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Details <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Arrows (hover) */}
      {items.length > 1 && (
        <>
          <button
            aria-label="Previous product"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-black"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            aria-label="Next product"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-black"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </article>
  );
}
