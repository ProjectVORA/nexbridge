import { ArrowLeft, ArrowRight, X } from "lucide-react";

export default function IndustryModal({ industryDetail, setSelectedIndustry, chooseCatalogCategory, chooseService }) {
  if (!industryDetail) return null;

  return (
    <div className="fixed inset-0 z-[95] overflow-y-auto bg-[#080616] pt-[max(1rem,var(--safe-area-inset-top))] pb-8 text-white" role="dialog" aria-modal="true" aria-label={`${industryDetail.name} full details`}>
      <div className="min-h-full mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <button onClick={() => setSelectedIndustry(null)} className="inline-flex items-center gap-2 rounded-full border border-[#2F2FE4] bg-white/10 px-4 py-2.5 text-sm font-medium text-white"><ArrowLeft size={16} /> Back to Industries</button>
          <button onClick={() => setSelectedIndustry(null)} aria-label="Close industry details" className="grid h-11 w-11 place-items-center rounded-full bg-[#080616] text-white ring-1 ring-[#2F2FE4]"><X size={19} /></button>
        </div>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-white">Industries We Serve • {industryDetail.filter}</p>
        <h2 className="mt-2 text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-tight text-white">{industryDetail.name}</h2>
        <p className="mt-1 text-lg font-normal text-white/70">{industryDetail.tagline}</p>
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-[28px] sm:h-96"><img src={industryDetail.image} alt={`${industryDetail.name} — ${industryDetail.status}`} className="h-full w-full object-cover" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#080616] shadow">{industryDetail.status}</span><span className="absolute bottom-4 left-4 rounded-full bg-[#080616]/90 px-3 py-1.5 text-xs font-medium text-white">{industryDetail.timeline}</span></div>
        <p className="mt-6 text-base leading-relaxed text-white/80">{industryDetail.detail}</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] glass p-5 sm:p-6"><h3 className="text-lg font-medium text-white">What we do for this industry</h3><ul className="mt-4 space-y-2.5">{industryDetail.features.map((f) => <li key={f} className="flex gap-3 text-sm leading-relaxed text-white/90"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#2F2FE4] text-[11px] font-medium text-white">✓</span><span>{f}</span></li>)}</ul><h3 className="mt-7 text-lg font-medium text-white">Example project</h3><p className="mt-2 text-sm leading-relaxed text-white/80">{industryDetail.example}</p></div>
          <div className="rounded-[24px] glass p-5 sm:p-6"><h3 className="text-lg font-medium text-white">Products we recommend</h3><div className="mt-4 flex flex-wrap gap-2">{industryDetail.products.map((p) => <button key={p} onClick={() => chooseCatalogCategory(industryDetail.name, p)} className="rounded-full border border-[#2F2FE4] bg-white/5 px-3.5 py-2 text-xs font-normal text-white hover:bg-[#2F2FE4]">{p}</button>)}</div><h3 className="mt-7 text-lg font-medium text-white">Services we provide</h3><div className="mt-4 flex flex-wrap gap-2">{industryDetail.services.map((s) => <button key={s} onClick={() => chooseService(s)} className="rounded-full border border-[#2F2FE4] bg-white/5 px-3.5 py-2 text-xs font-normal text-white hover:bg-[#2F2FE4]">{s}</button>)}</div><button onClick={() => { setSelectedIndustry(null); chooseService("Request a Quote — IT Infrastructure"); }} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Get a Quote <ArrowRight size={16} /></button></div>
        </div>
      </div>
    </div>
  );
}
