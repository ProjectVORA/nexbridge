import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";

function ProductCategoryModal({ productDetail, setSelectedProduct, chooseService }) {
  if (!productDetail) return null;

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-[#080616]/80 pt-[max(1rem,var(--safe-area-inset-top))] pb-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${productDetail.title} details`} onClick={() => setSelectedProduct(null)}>
      <div className="min-h-full flex items-center justify-center px-4">
        <div className="w-full max-w-2xl overflow-hidden rounded-[28px] bg-[#080616] text-white shadow-2xl ring-1 ring-[#2F2FE4]" onClick={(e) => e.stopPropagation()}>
          <div className="relative h-52">
            <img src={productDetail.image} alt={productDetail.title} className="h-full w-full object-cover" />
            <button onClick={() => setSelectedProduct(null)} aria-label="Close product details" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#080616] shadow hover:bg-[#2F2FE4] hover:text-white"><X size={19} /></button>
            <span className="absolute bottom-4 left-4 rounded-full bg-[#080616]/90 px-3 py-1.5 text-xs font-medium text-white">{productDetail.tag}</span>
          </div>
          <div className="p-5 sm:p-6">
            <h3 className="text-2xl font-medium leading-tight text-white sm:text-3xl">{productDetail.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{productDetail.desc}</p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-white">Included in this category</p>
            <ul className="mt-3 space-y-2">
              {productDetail.items.map((x) => (
                <li key={x} className="flex gap-2 text-sm leading-relaxed text-white"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-white" /><span className="[overflow-wrap:anywhere]">{x}</span></li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={() => { const svc = productDetail.service; setSelectedProduct(null); chooseService(svc); }} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Get Best Price <ArrowRight size={16} /></button>
              <button onClick={() => setSelectedProduct(null)} className="rounded-full border border-[#2F2FE4] bg-white/10 px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionsSection({
  productCards,
  productCarouselRef,
  productIndex,
  onProductScroll,
  scrollProducts,
  goToProduct,
  openProduct,
  chooseService,
  productDetail,
  setSelectedProduct,
}) {
  return (
    <section id="solutions" className="border-y border-[#2F2FE4]/30 bg-[#080616]"><div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="eyebrow">Our Solutions</p><h2 className="mt-2 max-w-2xl text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">Everything your business needs to <span className="gradient-text">run on technology</span></h2><p className="mt-3 max-w-2xl text-white/80">Genuine products, configured and ready to use — with GST billing, warranty support and installation. All 7 categories below — tap any card for details.</p>
      <div className="mt-4 flex flex-wrap gap-2"><span className="rounded-full bg-[#2F2FE4] px-3.5 py-1.5 text-xs font-medium text-white">7 Categories</span><span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white ring-1 ring-[#2F2FE4]">Tap a card for details</span><span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white ring-1 ring-[#2F2FE4]">Swipe or use the arrows to see all 7</span></div>
      <div className="relative mt-8">
        <button onClick={() => scrollProducts(-1)} aria-label="Previous products" className="absolute -left-1 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 hover:bg-white hover:text-[#080616] sm:-left-3"><ArrowLeft size={20} /></button>
        <button onClick={() => scrollProducts(1)} aria-label="Next products" className="absolute -right-1 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 hover:bg-white hover:text-[#080616] sm:-right-3"><ArrowRight size={20} /></button>
        <div ref={productCarouselRef} onScroll={onProductScroll} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-1">
          {productCards.map((s) => (
            <article data-product-card key={s.title} onClick={() => openProduct(s.title)} className="group flex w-[300px] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-[26px] glass transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:w-[360px]">
              <div className="relative h-44 overflow-hidden"><img src={s.image} alt={s.title} className="h-full w-full object-cover" /><span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-[#2F2FE4] text-white shadow-lg"><s.icon size={22} /></span><span className="absolute bottom-4 right-4 rounded-full bg-[#080616]/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">Tap for details</span></div>
              <div className="flex flex-1 flex-col p-5"><h3 className="text-xl font-medium leading-tight text-white">{s.title}</h3><p className="mt-1 text-sm font-normal text-white/80">{s.tag}</p><p className="mt-2 text-sm leading-relaxed text-white/80">{s.desc}</p><ul className="mt-4 space-y-1.5">{s.items.map((p) => <li key={p} className="flex items-start gap-2 text-sm font-seminormal text-white"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-white" /><span className="[overflow-wrap:anywhere]">{p}</span></li>)}</ul><div className="mt-auto flex flex-wrap gap-2 pt-5"><button onClick={(e) => { e.stopPropagation(); chooseService(s.service); }} className="inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-4 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Get best price <ArrowUpRight size={16} /></button></div></div>
            </article>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-1.5" role="tablist" aria-label="Product categories">{productCards.map((s, i) => <button key={s.title} role="tab" aria-selected={productIndex === i} aria-label={`Go to ${s.title}`} onClick={() => goToProduct(i)} className={`h-2.5 rounded-full transition ${i === productIndex ? "w-7 bg-[#2F2FE4]" : "w-2.5 bg-white/40 hover:bg-white"}`} />)}</div>
      </div>
      <ProductCategoryModal
        productDetail={productDetail}
        setSelectedProduct={setSelectedProduct}
        chooseService={chooseService}
      />
    </div></section>
  );
}
