export default function SoftwareEcosystemNode({ product, side, x, y, setSelectedProduct }) {
  const isLeft = side === "left";

  return (
    <div
      className="absolute z-20 w-[250px] -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(x / 1000) * 100}%`,
        top: `${(y / 500) * 100}%`,
      }}
    >
      {/* Glass Card */}
      <div
        onClick={() => setSelectedProduct(product.title)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/[0.055] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09] hover:shadow-[0_12px_40px_rgba(56,189,248,0.12)]"
      >
        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.10] via-transparent to-transparent opacity-70" />

        {/* Ambient glow */}
        <div className={`pointer-events-none absolute -top-10 ${
          isLeft ? "-left-10" : "-right-10"
        } h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/25`} />

        {/* Top section */}
        <div className={`relative flex items-center gap-3 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}>

          {/* Glass Icon */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-white/15 to-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-110">

            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 opacity-70" />

            <div className="relative z-10 text-cyan-200 drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]">
              {product.icon && <product.icon size={27} strokeWidth={1.7} />}
            </div>
          </div>

          {/* Product Information */}
          <div className={`min-w-0 flex-1 ${
            isLeft ? "text-left" : "text-right"
          }`}>
            <span className="text-[9px] font-seminormal uppercase tracking-[0.18em] text-cyan-300/70">
              {product.tag || "BUSINESS SOLUTION"}
            </span>

            <h3 className="mt-1 text-sm font-normal leading-tight text-white">
              {product.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className={`relative mt-4 line-clamp-2 text-[10px] leading-relaxed text-slate-300/65 ${
          isLeft ? "text-left" : "text-right"
        }`}>
          {product.desc}
        </p>

        {/* Bottom separator */}
        <div className="relative mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Corner reflection */}
        <div className="pointer-events-none absolute right-0 top-0 h-5 w-5 rounded-tr-2xl border-r border-t border-white/20" />
      </div>
    </div>
  );
}
