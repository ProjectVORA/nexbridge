import { BadgeCheck, ShieldCheck } from "lucide-react";

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="relative overflow-hidden bg-[#162E93] py-16 sm:py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="eyebrow">Certifications & Partnerships</p>

          <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
            Certified. Authorized.
            <span className="text-blue-200"> Genuine — always.</span>
          </h2>

          <p className="mt-3 leading-relaxed text-white/80">
            We work with leading technology brands so your products are genuine,
            supported and covered.
          </p>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative mt-12 overflow-hidden">

          {/* Left / Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#162E93] to-transparent sm:w-28" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#162E93] to-transparent sm:w-28" />

          {/* Moving Track */}
          <div className="certification-marquee flex w-max">

            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-5 px-2 sm:gap-8 sm:px-4"
                aria-hidden={group === 1}
              >
                {certifications.map((c, i) => (
                  <div
                    key={`${group}-${i}`}
                    className="group flex h-28 min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.15] sm:min-w-[220px]"
                  >
                    <BadgeCheck
                      size={25}
                      className="shrink-0 text-cyan-300 transition-transform group-hover:scale-110"
                    />

                    <span className="whitespace-nowrap text-base font-medium text-white">
                      {c}
                    </span>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

        {/* Genuine Products */}
        <div className="mt-12 rounded-[24px] border border-white/20 bg-[#080616]/80 p-5 backdrop-blur-xl sm:p-7">

          <p className="flex flex-wrap items-center gap-2 text-lg font-medium text-white">
            <ShieldCheck className="text-cyan-300" />
            Genuine Products Only
          </p>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            GST Invoice + Manufacturer Warranty on Every Product.
            No grey imports, no refurbished-as-new, no licence shortcuts —
            your invoice is your warranty proof.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "GST Invoice",
              "Manufacturer Warranty",
              "Licensed Software",
              "Sealed & Genuine",
            ].map((x) => (
              <span
                key={x}
                className="rounded-full border border-white/10 bg-[#2F2FE4] px-4 py-2 text-xs font-normal text-white"
              >
                {x}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
