import { BadgeCheck, Handshake, ShieldCheck, Zap } from "lucide-react";

export default function BrandsSection({ partnerLogos }) {
  return (
    <section id="brands" className="border-y border-[#2F2FE4]/30 bg-[#080616]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="eyebrow">Our Brand Partners</p>
          <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
            Trusted by the <span className="gradient-text">world's best</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            We are authorized partners for leading technology brands — genuine products, full warranty and certified support.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {partnerLogos.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4] hover:bg-white/[0.07] hover:shadow-xl hover:shadow-[#2F2FE4]/10"
            >
              {/* Logo mark */}
              <div className="flex h-10 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {brand.svg}
              </div>
              {/* Brand name */}
              <span className="text-xs font-medium text-white/60 transition-colors group-hover:text-white">
                {brand.name}
              </span>
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${brand.color}15, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <BadgeCheck size={16} className="text-[#90CAF9]" />
            <span className="text-xs font-medium text-white/70">100% Genuine Products</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <ShieldCheck size={16} className="text-[#90CAF9]" />
            <span className="text-xs font-medium text-white/70">Manufacturer Warranty</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <Handshake size={16} className="text-[#90CAF9]" />
            <span className="text-xs font-medium text-white/70">Authorized Partner</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <Zap size={16} className="text-[#90CAF9]" />
            <span className="text-xs font-medium text-white/70">Fast Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
