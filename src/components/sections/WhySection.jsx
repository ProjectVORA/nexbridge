import { ArrowRight } from "lucide-react";
import CardSwap from "../../component/card";

export default function WhySection({ whyItems, chooseService }) {
  return (
    <section id="why" className="border-y border-[#2F2FE4]/30 bg-[#080616]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        {/* 2-Column Layout: Left Content, Right CardSwap */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">

          {/* LEFT SIDE: Text Content */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Why Choose Us?</p>
            <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight text-white">
              Technology That Drives <span className="gradient-text">Business Growth</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Plain-language advice. No jargon. Clear choices and costs. Installed, tested and handed over — ready to use.
            </p>

            {/* Optional: Add a list of features below the text to fill the left side */}
            <ul className="mt-8 space-y-4">
              {whyItems.slice(0, 4).map((w) => (
                <li key={w.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#2F2FE4]">
                    <w.icon size={16} />
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-white">{w.title}</h3>
                    <p className="text-xs text-white/60">{w.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => chooseService("Request a Quote — IT Infrastructure")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-white hover:text-[#080616] hover:scale-105"
            >
              Start with a free consultation <ArrowRight size={16} />
            </button>
          </div>

          {/* RIGHT SIDE: CardSwap */}
          <div className="relative h-[500px] w-full sm:h-[600px] flex items-center justify-center lg:justify-end">
            {/*
              CardSwap Props Explanation:
              - width/height: The size of individual cards
              - cardDistance/verticalDistance: How far apart the cards stack
              - delay: How fast they auto-swap (in ms)
            */}
            <CardSwap
              width={340}
              height={400}
              cardDistance={40}
              verticalDistance={40}
              delay={4000}
              pauseOnHover={true}
              theme="dark"
            >
              {/* Generate the cards directly inside CardSwap using your whyItems data */}
              {whyItems.map((item, index) => (
                <div
                  key={item.title}
                  className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[18px] p-6"
                  style={{
                    background: 'linear-gradient(180deg, #3a3644 0%, #27242f 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                  }}
                >
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mb-6">
                      <item.icon size={24} />
                    </span>
                    <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom decoration */}
                  <div className="mt-6 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-white/40">
                    <span>0{index + 1}</span>
                    <span>TechVista</span>
                  </div>
                </div>
              ))}
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );
}
