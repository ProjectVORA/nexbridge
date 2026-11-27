import {
  Sparkles, Users, ArrowUpRight, ShieldCheck, ArrowRight, FileText, Settings,
  CalendarDays, Cpu, Code2, Network, Cloud, Wrench, Cctv, Server,
} from "lucide-react";

export default function IntroBento() {
  return (
    <section className="bg-[#080616]" aria-label="Intro headline">
      {/* Top Header Area */}
      <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white ring-1 ring-[#2F2FE4] animate-fade-in">
          <Sparkles size={14} className="text-white" />
          End-to-End Technology Solutions
        </span>

        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(1.7rem,4.5vw,2.8rem)] font-medium leading-tight text-white animate-slide-up">
          Building Intelligent, Secure &amp; Future-Ready Businesses
        </h2>

        <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-white/80 animate-fade-in-delay">
          Delivering world-class hardware, software, networking, cybersecurity, cloud, and managed services that enable organizations to innovate, scale, and succeed in a digital-first world.
        </p>
      </div>

      {/* Bento Grid Layout - Using YOUR Content */}
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

          {/* CARD 1: Left Vertical (Large) - 500+ Clients */}
          <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-3xl bg-[#2f2d95] p-6 flex flex-col justify-between overflow-hidden border border-white/5 hover:border-[#2F2FE4]/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#0606ec] blur-3xl group-hover:bg-[#2F2FE4] transition-colors" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 text-white shadow-lg">
                <Users size={24} />
              </div>
              <h3 className="text-4xl font-medium text-white mb-2">500+</h3>
              <p className="text-lg font-normal text-white/90 leading-tight">Happy Clients</p>
            </div>

            <div className="relative z-10 mt-6">
              <p className="text-sm text-white/60 leading-relaxed">
                Empowering businesses across industries with reliable technology solutions and dedicated support.
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm font-normal text-[#c9c9ee] group-hover:text-white transition-colors">
                View Case Studies <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* CARD 2: Top Middle - 99.9% Uptime */}
          <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-gradient-to-br from-[#7a7ae9] to-[#0400fa] p-6 flex flex-col justify-center items-start overflow-hidden border border-transparent hover:shadow-lg hover:shadow-[#2F2FE4]/20 transition-all animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl -mr-10 -mt-10" />
            <h3 className="text-5xl font-medium text-white tracking-tighter mb-1">99.9%</h3>
            <p className="text-sm font-medium text-blue-100">System Uptime</p>
            <p className="text-xs text-blue-200/80 mt-1">Guaranteed reliability for your critical operations.</p>
          </div>

          {/* CARD 3: Top Right - Safe and Secure */}
          <div className="group relative col-span-1 md:col-span-1 lg:col-span-2 rounded-3xl bg-[#0f0e3e] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/5 hover:border-[#2F2FE4]/50 transition-all animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#2F2FE4]/10 flex items-center justify-center text-[#2F2FE4] group-hover:bg-[#2F2FE4] group-hover:text-white transition-colors">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-1">Safe and Secure</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Enterprise-grade cybersecurity protecting your data, networks, and infrastructure 24/7.
              </p>
              <button className="mt-2 flex items-center gap-1 text-xs font-normal text-white/80 hover:text-white transition-colors">
                Read more <ArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* CARD 4: Bottom Center Wide - Maintain Business Health */}
          <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-r from-[#3a38b6] to-[#1a194c] p-6 flex flex-col justify-center overflow-hidden border border-white/5 hover:border-[#2F2FE4]/50 transition-all animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="absolute right-0 bottom-0 h-40 w-80 rounded-full bg-[#2F2FE4]/10 blur-3xl" />
            <h3 className="text-xl font-medium text-white mb-2 relative z-10">Maintain Business Health</h3>
            <p className="text-sm text-white/70 mb-4 max-w-md relative z-10">
              Proactive monitoring and maintenance to keep your IT infrastructure running smoothly without downtime.
            </p>
            <div className="flex flex-wrap gap-3 relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-normal text-white backdrop-blur-sm">
                <FileText size={14} /> Reports
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-normal text-white backdrop-blur-sm">
                <Settings size={14} /> Management
              </span>
            </div>
          </div>

          {/* CARD 5: Bottom Right - 10+ Years */}
          <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-[#191782] p-6 flex flex-col justify-center items-end text-right overflow-hidden border border-white/5 hover:border-[#2F2FE4]/50 transition-all animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <div className="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-green-500 blur-2xl -ml-10 -mb-10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-500/20 text-green-400 mb-3 ml-auto">
                <CalendarDays size={20} />
              </div>
              <h3 className="text-5xl font-medium text-white tracking-tighter mb-1">10+<span className="text-2xl align-top ml-1">Yrs</span></h3>
              <p className="text-sm font-medium text-white/80">Industry Experience</p>
              <p className="text-xs text-white/50 mt-1">Delivering excellence since day one.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Services Strip - Orange Cut-Style Buttons */}

      <div
        className="relative overflow-hidden border-y border-[#2F2FE4]/30 bg-[#080616] py-5"
        aria-label="Services"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#080616] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#080616] to-transparent" />

        {/*
          Keep two identical groups for a seamless marquee.
          Use the same service list in both groups.
        */}

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

          {[1, 2].map((set) => (
            <div
              key={set}
              className="flex shrink-0 items-center gap-3 px-2"
            >
              {[

                { name: "Hardware", icon: Cpu },
                { name: "Software", icon: Code2 },
                { name: "Networking", icon: Network },
                { name: "Cybersecurity", icon: ShieldCheck },
                { name: "Cloud", icon: Cloud },
                { name: "Managed IT", icon: Wrench },
                { name: "CCTV", icon: Cctv },
                { name: "Data Center", icon: Server },
                { name: "Hardware", icon: Cpu },
                { name: "Software", icon: Code2 },
                { name: "Networking", icon: Network },
                { name: "Cybersecurity", icon: ShieldCheck },
                { name: "Cloud", icon: Cloud },
                { name: "Managed IT", icon: Wrench },
                { name: "CCTV", icon: Cctv },
                { name: "Data Center", icon: Server },
              ].map((service, idx) => (
                <span
                  key={idx}
                  className="
    service-cut-button
    group relative inline-flex shrink-0 items-center
    gap-2
    rounded-[10px]
    bg-[#FF805C]
    py-2 pl-2 pr-5
    text-[#171717]
    transition-all duration-300
    hover:bg-[#FF956F]
  "
                >
                  {/* Icon */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                    <service.icon
                      size={29}
                      strokeWidth={2.8}
                      className="text-[#171717]"
                    />
                  </span>

                  {/* Text */}
                  <span className="whitespace-nowrap text-[21px] font-medium tracking-tight">
                    {service.name}
                  </span>
                </span>
              ))}
            </div>
          ))}

        </div>
      </div>

      {/* Add this to your existing <style jsx> block */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        /* Keep your existing animations here... */
        @keyframes fadeUp { ... }
        @keyframes fadeIn { ... }
        .animate-fade-in { ... }
        .animate-slide-up { ... }
      `}</style>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .animate-fade-in-delay { animation: fadeIn 0.6s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up { animation: fadeUp 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fadeUp 0.5s ease-out forwards; opacity: 0; }
      `}</style>
    </section>
  );
}
