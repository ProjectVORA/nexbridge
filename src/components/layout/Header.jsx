import { ArrowRight, ChevronDown, ChevronRight, Mail, Menu, Phone, Search, X } from "lucide-react";
import { NAV } from "../../data/navigation";

export default function Header({
  activeSection,
  goTo,
  chooseNavChild,
  chooseService,
  searchOpen,
  setSearchOpen,
  heroSearch,
  setHeroSearch,
  menuOpen,
  setMenuOpen,
  openDropdown,
  setOpenDropdown,
  mobileSection,
  setMobileSection,
}) {
  return (
    <header className="fixed left-0 top-[36px] sm:top-[34px] z-50 w-full border-b border-white/5 bg-[#080616]/95 shadow-lg shadow-black/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-3 py-2.5 sm:px-5">

        {/* Logo */}
        <button onClick={() => goTo("home")} className="flex min-w-0 items-center gap-2.5 text-left" aria-label="TechVista — home">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#2F2FE4] to-[#162E93] text-[22px] font-medium text-white shadow-lg">T</span>
          <span className="leading-none">
            <span className="block text-[19px] font-medium tracking-tight text-white sm:text-[21px]">
              Tech<span className="gradient-text">Vista</span>
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-white/80">Solutions</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex shrink-0 items-center justify-center gap-0.5"
          aria-label="Main navigation"
        >
          {NAV.map((item) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => item.groups || item.items ? setOpenDropdown(item.id) : setOpenDropdown(null)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => { if (item.groups || item.items) setOpenDropdown(openDropdown === item.id ? null : item.id); else goTo(item.target); }}
                aria-expanded={openDropdown === item.id}
                aria-haspopup={item.groups || item.items ? "true" : undefined}
                className={`relative flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-normal transition ${activeSection === item.id || openDropdown === item.id ? "bg-[#2F2FE4] text-white shadow-md" : "text-white hover:bg-[#2F2FE4]"}`}
              >
                {item.label}
                {(item.groups || item.items) && <ChevronDown size={13} className={`transition ${openDropdown === item.id ? "rotate-180" : ""}`} />}
              </button>

              {/* Mega Menu Dropdown - Changed Positioning to Right-Aligned to prevent overflow */}
              {openDropdown === item.id && item.groups && (
                <div className="absolute left-0 top-full z-50 w-[860px] pt-2">
                  <div className="rounded-3xl border border-[#2F2FE4] bg-[#080616] p-5 shadow-2xl">
                    <div className="grid grid-cols-4 gap-5">
                      {item.groups.map((g) => (
                        <div key={g.heading}>
                          <p className="border-b border-[#2F2FE4]/40 pb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white">{g.heading}</p>
                          <ul className="mt-3 space-y-1">
                            {g.items.map((c) => (
                              <li key={c.label}>
                                <button onClick={() => chooseNavChild(c)} className="w-full rounded-lg px-2 py-2 text-left text-[13px] font-normal text-white/80 hover:bg-[#2F2FE4] hover:text-white transition-colors">{c.label}</button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#2F2FE4] px-5 py-4 text-sm">
                      <span className="font-normal text-white">Not sure which product fits? <span className="text-white/80">Tell us your use case.</span></span>
                      <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#080616] transition hover:scale-105">Get a Quote <ArrowRight size={14} /></button>
                    </div>
                  </div>
                </div>
              )}

              {/* Normal Dropdown */}
              {openDropdown === item.id && item.items && !item.groups && (
                <div className="absolute left-0 top-full z-50 w-64 pt-2">
                  <div className="rounded-2xl border border-[#2F2FE4] bg-[#080616] p-2 shadow-2xl">
                    {item.items.map((c) => (
                      <button key={c.label} onClick={() => chooseNavChild(c)} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-normal text-white hover:bg-[#2F2FE4] hover:text-white transition-colors">{c.label}<ChevronRight size={14} className="text-white/50" /></button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {searchOpen ? (
            <form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); goTo("products"); }} className="flex items-center gap-1 rounded-full border border-[#2F2FE4] bg-[#1A1953] p-1 pl-3">
              <label className="sr-only" htmlFor="nav-search">Search products</label>
              <input id="nav-search" autoFocus value={heroSearch} onChange={(e) => setHeroSearch(e.target.value)} placeholder="Search products…" className="w-28 bg-transparent text-sm text-white outline-none placeholder:text-white/50 sm:w-40" />
              <button type="submit" className="rounded-full bg-[#2F2FE4] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#162E93]">Go</button>
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search" className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10 text-white"><X size={15} /></button>
            </form>
          ) : (
            <button onClick={() => setSearchOpen(true)} aria-label="Search products" className="grid h-10 w-10 place-items-center rounded-full border border-[#2F2FE4] bg-white/10 text-white transition hover:bg-white/20"><Search size={18} /></button>
          )}
          <a href="tel:+919000000000" target="_blank" rel="noopener" className="hidden h-10 items-center gap-2 rounded-full border border-[#2F2FE4]/50 bg-[#2F2FE4] px-3.5 text-[13px] font-medium text-white transition hover:bg-[#162E93] md:inline-flex">
            <Phone size={15} className="text-white" />
            <span className="hidden lg:inline">+91 90000 00000</span><span className="lg:hidden">Call</span>
          </a>
          <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="hidden items-center gap-2 rounded-full bg-[#2F2FE4] px-4 py-2.5 text-[13px] font-medium text-white shadow-md hover:bg-white hover:text-[#080616] sm:inline-flex transition-colors">Get a Quote <ArrowRight size={15} /></button>
          <button onClick={() => setMenuOpen((v) => !v)} className="flex h-11 items-center gap-2 rounded-full border border-white/30 bg-[#2F2FE4] px-3 text-sm font-medium text-white lg:hidden xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={19} />}<span className="hidden sm:inline">MENU</span></button>
        </div>
      </div>

      {/* Mobile Menu Overlay - High Z-Index to cover everything */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] overflow-y-auto bg-[#080616] pt-4 text-white lg:hidden">
          <div className="min-h-full px-4 pb-8 pt-2">
            <div className="mx-auto flex max-w-3xl items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#2F2FE4] to-[#162E93] text-lg font-medium text-white">T</span>
                <span className="font-medium text-white">Tech<span className="gradient-text">Vista</span> <span className="block text-[9px] tracking-[0.28em] text-white/80">SOLUTIONS</span></span>
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-[#2F2FE4] text-white"><X size={20} /></button>
            </div>
            <p className="mx-auto mt-6 max-w-3xl px-1 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">End-to-End Technology Solutions</p>
            <div className="grid gap-1">
              {NAV.map((item) => {
                const hasChildren = !!(item.groups || item.items);
                const expanded = mobileSection === item.id;
                const flat = item.groups ? item.groups.flatMap((g) => g.items.map((c) => ({ ...c, label: `${g.heading} — ${c.label}` }))) : (item.items || []);
                return (
                  <div key={item.id} className="overflow-hidden rounded-2xl border border-white/20 bg-[#2F2FE4]">
                    <div className="flex items-center">
                      <button onClick={() => goTo(item.target)} className="flex-1 px-4 py-4 text-left text-[21px] font-medium leading-tight text-white">{item.label}</button>
                      {hasChildren && <button onClick={() => setMobileSection(expanded ? null : item.id)} aria-expanded={expanded} aria-label={`Toggle ${item.label}`} className="grid h-11 w-11 place-items-center text-white"><ChevronDown size={18} className={`transition ${expanded ? "rotate-180" : ""}`} /></button>}
                    </div>
                    {hasChildren && expanded && <div className="border-t border-white/20 bg-[#080616] px-2 pb-2 pt-1">{flat.map((c) => <button key={c.label} onClick={() => chooseNavChild(c)} className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-seminormal text-white hover:bg-[#2F2FE4]">{c.label}</button>)}</div>}
                  </div>
                );
              })}
            </div>
            <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-4 py-3.5 text-sm font-medium text-white">Get a Quote <ArrowRight size={16} /></button>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-normal text-white">
              <a href="tel:+919000000000" target="_blank" rel="noopener" className="flex items-center gap-2"><Phone size={15} className="text-white" /> +91 90000 00000</a>
              <a href="mailto:info@yourcompany.com" target="_blank" rel="noopener" className="flex items-center gap-2 [overflow-wrap:anywhere]"><Mail size={15} className="text-white" /> info@yourcompany.com</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
