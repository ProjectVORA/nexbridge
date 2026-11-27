import { ArrowRight, Phone } from "lucide-react";

export default function FinalCta({ setContactTab, goTo }) {
  return (
    <section className="bg-[#2F2FE4]"><div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24"><div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#2F2FE4] to-[#080616] p-[1.5px]"><div className="rounded-[31px] bg-[#080616] px-6 py-10 text-center sm:px-10 sm:py-14">
      <p className="eyebrow">Final Call To Action</p><h2 className="mx-auto mt-3 max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-tight text-white">Ready to Transform Your IT Infrastructure?</h2><p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/80">Tell us what you need today — get a clear plan, a genuine quote and a team that stays after go-live.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-3"><a
        href="tel:+919000000000"
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-[#080616] ring-1 ring-[#2F2FE4] transition-colors hover:bg-[#2F2FE4] hover:text-white"
      >
        <Phone size={17} />
        Call Us Today
      </a><button onClick={() => { setContactTab("quote"); goTo("contact"); }} className="inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Request Free Consultation <ArrowRight size={17} /></button></div>
      <p className="mt-4 text-xs font-normal text-white/80">Free consultation • No obligation • Reply within 2 hours in working hours</p>
    </div></div></div></section>
  );
}
