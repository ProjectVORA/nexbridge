import { Sparkles } from "lucide-react";
import { hardwareCards, softwareCards } from "../../data/products";
import HardwareCard from "../products/HardwareCard";
import SoftwareEcosystem from "../products/SoftwareEcosystem";
import ProductDetailsModal from "../products/ProductDetailsModal";

export default function ProductsSection({ selectedProduct, setSelectedProduct, chooseService }) {
  return (
    <section id="products" className="relative overflow-hidden bg-[#050505] py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

        {/* --- HARDWARE SECTION (Reference Image Style 1) --- */}

        {/* FOUR-CARD LAYOUT — each card has its own 4-product slider */}
        <section className="relative overflow-hidden bg-[#050505]  text-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

            {/* ─── HEADING ADDED HERE ─── */}
            <div className="mb-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2F2FE4]/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#90CAF9] ring-1 ring-[#2F2FE4]/30">
                <Sparkles size={14} /> Hardware Ecosystem
              </span>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
                Enterprise-Grade <span className="gradient-text">Hardware Solutions</span>
              </h2>
              <p className="mt-3 text-[16px] leading-relaxed text-white/70">
                From networking infrastructure to advanced IoT, drones, and robotics — we provide the physical backbone for your digital operations.
                Hover over a card to explore the specific products within each category.
              </p>
            </div>

            {/* ─── YOUR GRID CODE ─── */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 h-auto md:h-[500px]">
              {hardwareCards.map((card) => (
                <div
                  key={card.id}
                  className={`relative min-h-[320px] md:min-h-0 ${card.span}`}
                >
                  <HardwareCard
                    product={card}
                    setSelectedProduct={setSelectedProduct}
                    chooseService={chooseService}
                  />
                </div>
              ))}
            </div>

            {/* --- SOFTWARE SECTION (Reference Image Style 2) --- */}
            <div className="py-10">
              <SoftwareEcosystem
                softwareCards={softwareCards}
                setSelectedProduct={setSelectedProduct}
              />
            </div>

          </div>
        </section>

      </div>

      {/* --- MODAL --- */}
      <ProductDetailsModal
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        chooseService={chooseService}
      />
    </section>
  );
}
