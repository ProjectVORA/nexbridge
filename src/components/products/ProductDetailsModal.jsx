import { ArrowRight, X } from "lucide-react";
import { hardwareCards, softwareCards } from "../../data/products";

export default function ProductDetailsModal({ selectedProduct, setSelectedProduct, chooseService }) {
  const allProducts = [...hardwareCards, ...softwareCards];
  const detail = allProducts.find((x) => x.title === selectedProduct);
  if (!detail) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-md" onClick={() => setSelectedProduct(null)}>
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#111] text-white shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img src={detail.image} alt={detail.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-6">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-normal uppercase tracking-wider backdrop-blur-md">
              {detail.tag}
            </span>
            <h3 className="mt-3 text-3xl font-medium">{detail.title}</h3>
          </div>
        </div>

        <div className="p-8">
          <p className="text-base leading-relaxed text-gray-300">{detail.desc}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => { const svc = detail.service; setSelectedProduct(null); chooseService(svc); }}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              Request a Demo <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="rounded-full border border-white/20 bg-transparent px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
