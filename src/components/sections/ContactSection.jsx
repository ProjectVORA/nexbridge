import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { budgetOptions, industryOptions, serviceOptions } from "../../data/navigation";

const inputCls = "w-full rounded-xl border border-[#2F2FE4] bg-[#080616] px-3.5 py-3 text-sm text-white outline-none focus:border-white focus:ring-2 focus:ring-[#2F2FE4] placeholder:text-white/50";
const labelCls = "mb-1.5 block text-sm font-normal text-white";

export default function ContactSection({
  contactTab,
  setContactTab,
  quoteForm,
  setQuoteForm,
  supportForm,
  setSupportForm,
  partnerForm,
  setPartnerForm,
  quoteStatus,
  supportStatus,
  partnerStatus,
  handleQuote,
  handleSupport,
  handlePartner,
  whatsAppNote,
  setWhatsAppNote,
}) {
  return (
    <section id="contact" className="bg-[#162E93]"><div className="mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20"><div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2F2FE4] to-[#080616] p-[1.5px] shadow-2xl"><div className="grid gap-6 rounded-[31px] bg-[#080616] p-5 sm:p-8 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white">Contact Us</p><h2 className="mt-2 text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.02] tracking-tight text-white">Ready to Transform Your <span className="gradient-text">IT Infrastructure?</span></h2><p className="mt-3 leading-relaxed text-white/80">Let our experts help you design, deploy, and manage technology solutions that keep your business secure, connected, and productive.</p>
        <h3 className="mt-6 text-lg font-medium text-white">Contact Information</h3>
        <div className="mt-4 space-y-3">
          <a href="tel:+919000000000" target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-[#2F2FE4] hover:bg-white/20"><Phone className="shrink-0 text-white" /><span><span className="block text-xs text-white/70">Phone</span><span className="font-medium text-white">+91 90000 00000</span><span className="block text-[11px] text-white/70">Placeholder — replace with your real number</span></span></a>
          <a href="mailto:info@yourcompany.com" target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-[#2F2FE4] hover:bg-white/20"><Mail className="shrink-0 text-white" /><span><span className="block text-xs text-white/70">Email</span><span className="font-medium text-white [overflow-wrap:anywhere]">info@yourcompany.com</span></span></a>
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-[#2F2FE4]"><MapPin className="shrink-0 text-white" /><span><span className="block text-xs text-white/70">Address</span><span className="font-medium text-white">Bengaluru, Karnataka, India</span></span></div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-[#2F2FE4]"><Clock className="shrink-0 text-white" /><span><span className="block text-xs text-white/70">Hours</span><span className="font-medium text-white">Mon–Sat • 9:30 AM – 7 PM</span><span className="block text-xs font-normal text-white">24/7 Emergency Support</span></span></div>
        </div>
        <button onClick={() => setWhatsAppNote((v) => !v)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]"><MessageCircle size={18} /> Chat on WhatsApp</button>
        {whatsAppNote && <p role="status" className="mt-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-normal text-white ring-1 ring-[#2F2FE4]">WhatsApp chat is a visual button in this preview — please call +91 90000 00000 or use a form on this page.</p>}
      </div>

      <div className="rounded-[26px] bg-[#1A1953] p-5 ring-1 ring-[#2F2FE4] sm:p-7">
        <h3 className="text-xl font-medium text-white">Tell us what you need</h3><p className="mt-1 text-sm text-white/80">Choose a form — every form replies within 2 hours in working hours.</p>
        <div className="mt-5 grid grid-cols-3 gap-2" role="tablist" aria-label="Contact forms">
          {(["quote", "support", "partner"]).map((tab) => <button key={tab} role="tab" aria-selected={contactTab === tab} onClick={() => setContactTab(tab)} className={`rounded-full px-2 py-2.5 text-[12px] font-medium sm:text-sm ${contactTab === tab ? "bg-[#2F2FE4] text-white" : "bg-white/10 text-white ring-1 ring-[#2F2FE4] hover:bg-white/20"}`}>{tab === "quote" ? "Request a Quote" : tab === "support" ? "Support Request" : "Partner With Us"}</button>)}
        </div>

        {contactTab === "quote" && (
          <form onSubmit={handleQuote} className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className={labelCls}>Full Name *</span><input required value={quoteForm.name} onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })} placeholder="Your name" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Phone *</span><input required type="tel" value={quoteForm.phone} onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })} placeholder="+91 …" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Email</span><input type="email" value={quoteForm.email} onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })} placeholder="you@company.com" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Company</span><input value={quoteForm.company} onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })} placeholder="Company / school / shop" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Industry</span><select value={quoteForm.industry} onChange={(e) => setQuoteForm({ ...quoteForm, industry: e.target.value })} className={inputCls}>{industryOptions.map((o) => <option key={o} className="bg-[#080616] text-white">{o}</option>)}</select></label>
              <label className="block"><span className={labelCls}>Budget</span><select value={quoteForm.budget} onChange={(e) => setQuoteForm({ ...quoteForm, budget: e.target.value })} className={inputCls}>{budgetOptions.map((o) => <option key={o} className="bg-[#080616] text-white">{o}</option>)}</select></label>
              <label className="block sm:col-span-2"><span className={labelCls}>Service / Product *</span><select value={quoteForm.service} onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })} className={inputCls}>{serviceOptions.map((o) => <option key={o} className="bg-[#080616] text-white">{o}</option>)}</select></label>
              <label className="block sm:col-span-2"><span className={labelCls}>Message *</span><textarea required rows={4} value={quoteForm.message} onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })} placeholder="Tell us what you need — e.g. new office setup, 10 laptops, school WiFi, or a custom software idea." className={`${inputCls} resize-y [overflow-wrap:anywhere]`} /></label>
            </div>
            {quoteStatus.message && <p role="status" className={`mt-4 rounded-xl px-4 py-3 text-sm font-normal ${quoteStatus.status === "saved" ? "bg-white text-[#080616] ring-1 ring-[#2F2FE4]" : quoteStatus.status === "error" ? "bg-[#080616] text-white ring-1 ring-white" : "bg-white/10 text-white ring-1 ring-[#2F2FE4]"}`}>{quoteStatus.message}</p>}
            <button type="submit" disabled={quoteStatus.status === "busy"} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616] disabled:opacity-60">{quoteStatus.status === "busy" ? "Saving…" : "Request My Free Quote"} <ArrowRight size={17} /></button>
          </form>
        )}
        {contactTab === "support" && (
          <form onSubmit={handleSupport} className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className={labelCls}>Full Name *</span><input required value={supportForm.name} onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })} placeholder="Your name" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Phone *</span><input required type="tel" value={supportForm.phone} onChange={(e) => setSupportForm({ ...supportForm, phone: e.target.value })} placeholder="+91 …" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Issue Type</span><select value={supportForm.issue} onChange={(e) => setSupportForm({ ...supportForm, issue: e.target.value })} className={inputCls}>{["Hardware", "Networking", "Software", "Security", "Cloud", "AMC", "CCTV / Access Control", "Other"].map((o) => <option key={o} className="bg-[#080616] text-white">{o}</option>)}</select></label>
              <label className="block"><span className={labelCls}>Priority</span><select value={supportForm.priority} onChange={(e) => setSupportForm({ ...supportForm, priority: e.target.value })} className={inputCls}>{["Low", "Medium", "High", "Urgent — system down"].map((o) => <option key={o} className="bg-[#080616] text-white">{o}</option>)}</select></label>
              <label className="block sm:col-span-2"><span className={labelCls}>Message *</span><textarea required rows={5} value={supportForm.message} onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })} placeholder="What is happening? When did it start? Which device / room is affected?" className={`${inputCls} resize-y [overflow-wrap:anywhere]`} /></label>
            </div>
            {supportStatus.message && <p role="status" className={`mt-4 rounded-xl px-4 py-3 text-sm font-normal ${supportStatus.status === "saved" ? "bg-white text-[#080616] ring-1 ring-[#2F2FE4]" : supportStatus.status === "error" ? "bg-[#080616] text-white ring-1 ring-white" : "bg-white/10 text-white ring-1 ring-[#2F2FE4]"}`}>{supportStatus.message}</p>}
            <button type="submit" disabled={supportStatus.status === "busy"} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616] disabled:opacity-60">{supportStatus.status === "busy" ? "Saving…" : "Send Support Request"} <ArrowRight size={17} /></button>
          </form>
        )}
        {contactTab === "partner" && (
          <form onSubmit={handlePartner} className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block"><span className={labelCls}>Company *</span><input required value={partnerForm.company} onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })} placeholder="Your company" className={inputCls} /></label>
              <label className="block"><span className={labelCls}>Contact Person *</span><input required value={partnerForm.contact} onChange={(e) => setPartnerForm({ ...partnerForm, contact: e.target.value })} placeholder="Full name" className={inputCls} /></label>
              <label className="block sm:col-span-2"><span className={labelCls}>Email</span><input type="email" value={partnerForm.email} onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })} placeholder="you@company.com" className={inputCls} /></label>
              <label className="block sm:col-span-2"><span className={labelCls}>Partnership Type</span><select value={partnerForm.type} onChange={(e) => setPartnerForm({ ...partnerForm, type: e.target.value })} className={inputCls}>{["Reseller", "Distributor", "Referral Partner", "Service / Installation Partner", "Other"].map((o) => <option key={o} className="bg-[#080616] text-white">{o}</option>)}</select></label>
              <label className="block sm:col-span-2"><span className={labelCls}>Message *</span><textarea required rows={5} value={partnerForm.message} onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })} placeholder="Tell us about your business, your customers and what partnership you have in mind." className={`${inputCls} resize-y [overflow-wrap:anywhere]`} /></label>
            </div>
            {partnerStatus.message && <p role="status" className={`mt-4 rounded-xl px-4 py-3 text-sm font-normal ${partnerStatus.status === "saved" ? "bg-white text-[#080616] ring-1 ring-[#2F2FE4]" : partnerStatus.status === "error" ? "bg-[#080616] text-white ring-1 ring-white" : "bg-white/10 text-white ring-1 ring-[#2F2FE4]"}`}>{partnerStatus.message}</p>}
            <button type="submit" disabled={partnerStatus.status === "busy"} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616] disabled:opacity-60">{partnerStatus.status === "busy" ? "Saving…" : "Send Partnership Enquiry"} <ArrowRight size={17} /></button>
          </form>
        )}
        <p className="mt-3 text-center text-xs text-white/80">Your details are used only to respond to this enquiry.</p>
      </div>
    </div></div></div></section>
  );
}
