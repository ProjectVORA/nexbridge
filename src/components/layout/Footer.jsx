import { ArrowRight, ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer({
  goTo,
  chooseService,
  setSelectedSolution,
  setContactTab,
  footerIndustry,
  certifications,
}) {
  return (
    <footer className="relative border-t border-[#2F2FE4]/30 bg-[#050412] text-white">

      {/* Top CTA Band */}
      <div className="border-b border-[#2F2FE4]/20 bg-gradient-to-r from-[#0a0820] via-[#120f3d] to-[#0a0820]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-[clamp(1.3rem,3vw,1.9rem)] font-medium leading-tight">
              Ready to transform your <span className="gradient-text">IT infrastructure</span>?
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Get a free consultation and a clear, vendor-neutral roadmap — no obligations.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => chooseService("Request a Quote — IT Infrastructure")}
              className="inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-all hover:bg-white hover:text-[#080616] hover:scale-105 active:scale-95"
            >
              Get a Free Quote <ArrowRight size={16} />
            </button>
            <a
              href="tel:+919000000000"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">

          {/* Column 1: Brand + Contact (span 4) */}
          <div className="lg:col-span-4">
            <button onClick={() => goTo("home")} className="flex items-center gap-2.5 text-left" aria-label="TechVista — home">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#2F2FE4] to-[#162E93] text-[24px] font-medium text-white shadow-lg">
                T
              </span>
              <span className="leading-none">
                <span className="block text-[21px] font-medium tracking-tight text-white">
                  Tech<span className="gradient-text">Vista</span>
                </span>
                <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-white/80">
                  Solutions
                </span>
              </span>
            </button>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              End-to-end technology solutions — hardware, software, networking, cybersecurity, cloud and managed IT for businesses across India.
            </p>

            <div className="mt-6 space-y-3">
              <a href="tel:+919000000000" target="_blank" rel="noopener" className="flex items-start gap-3 text-sm text-white/80 transition hover:text-white">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
                  <Phone size={15} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-white/50">Call us</span>
                  +91 90000 00000
                </span>
              </a>
              <a href="mailto:info@yourcompany.com" target="_blank" rel="noopener" className="flex items-start gap-3 text-sm text-white/80 transition hover:text-white">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
                  <Mail size={15} />
                </span>
                <span className="[overflow-wrap:anywhere]">
                  <span className="block text-[11px] uppercase tracking-wider text-white/50">Email us</span>
                  info@yourcompany.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
                  <MapPin size={15} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-white/50">Visit us</span>
                  123 Tech Park, Bengaluru, Karnataka 560001
                </span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
                  <Clock size={15} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-white/50">Working hours</span>
                  Mon–Sat: 9:00 AM – 7:00 PM
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {[
                { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
                { label: "Twitter / X", icon: "X", href: "https://x.com" },
                { label: "Facebook", icon: "f", href: "https://facebook.com" },
                { label: "Instagram", icon: "ig", href: "https://instagram.com" },
                { label: "YouTube", icon: "▶", href: "https://youtube.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/70 transition hover:border-[#2F2FE4] hover:bg-[#2F2FE4] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Products</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Hardware", target: "products" },
                { label: "Networking", target: "products" },
                { label: "Cybersecurity", target: "products" },
                { label: "Storage & Backup", target: "products" },
                { label: "Software", target: "products" },
                { label: "Cloud Solutions", target: "products" },
                { label: "Power & Infrastructure", target: "products" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => goTo(l.target)}
                    className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
                  >
                    <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Solutions</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "IT Consulting", id: "it-consulting" },
                { label: "Infrastructure Deployment", id: "infrastructure-deployment" },
                { label: "Network Design", id: "network-design" },
                { label: "Cloud Migration", id: "cloud-migration" },
                { label: "Security Assessment", id: "security-assessment" },
                { label: "AMC Support", id: "amc-support" },
                { label: "Managed IT", id: "managed-it" },
                { label: "Helpdesk Support", id: "helpdesk-support" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => { setSelectedSolution(l.id); goTo("solutions"); }}
                    className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
                  >
                    <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Industries</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                "Education", "Healthcare", "Manufacturing", "Retail",
                "Financial Services", "Government", "IT / Startups", "Logistics",
              ].map((label) => (
                <li key={label}>
                  <button
                    onClick={() => footerIndustry(label)}
                    className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
                  >
                    <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter + Quick Links (span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Stay Updated</h4>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Get IT tips, product updates and exclusive offers — straight to your inbox.
            </p>

            <h4 className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "About Us", target: "why" },
                { label: "Case Studies", target: "case-studies" },
                { label: "Certifications", target: "certifications" },
                { label: "Partner With Us", target: "contact" },
                { label: "Support", target: "contact" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => {
                      if (l.label === "Partner With Us") { setContactTab("partner"); }
                      if (l.label === "Support") { setContactTab("support"); }
                      goTo(l.target);
                    }}
                    className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
                  >
                    <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications Strip */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            Certified & Authorized Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {certifications.map((c) => (
              <span key={c} className="text-xs font-normal text-white/50">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#030209]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-center text-xs text-white/40 sm:text-left">
            © {new Date().getFullYear()} TechVista Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((l) => (
              <button key={l} className="text-xs text-white/40 transition hover:text-white">
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Made in India
          </div>
        </div>
      </div>
    </footer>
  );
}
