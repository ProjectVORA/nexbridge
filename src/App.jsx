import { useEffect, useRef, useState } from "react";

import { callApi } from "./lib/api";
import { heroSlides } from "./data/heroSlides";
import { testimonials } from "./data/testimonials";
import { certifications, partnerLogos } from "./data/brands";
import { whyItems } from "./data/whyItems";
import { detailedIndustries, industryFilters } from "./data/industries";
import { caseStudies } from "./data/caseStudies";
import { productCards } from "./data/products";

import TopBar from "./components/layout/TopBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import IntroBento from "./components/sections/IntroBento";
import ProductsSection from "./components/sections/ProductsSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import WhySection from "./components/sections/WhySection";
import IndustriesSection from "./components/sections/IndustriesSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import BrandsSection from "./components/sections/BrandsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import FinalCta from "./components/sections/FinalCta";
import IndustryModal from "./components/modals/IndustryModal";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSection, setMobileSection] = useState("Products");
  const [activeSection, setActiveSection] = useState("home");

  const [productIndex, setProductIndex] = useState(0);
  const productCarouselRef = useRef(null);
  const [industryFilter, setIndustryFilter] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [contactTab, setContactTab] = useState("quote");
  const [quoteForm, setQuoteForm] = useState({ name: "", phone: "", email: "", company: "", industry: "IT", service: "Request a Quote — IT Infrastructure", budget: "Not sure yet — advise me", message: "" });
  const [supportForm, setSupportForm] = useState({ name: "", phone: "", issue: "Hardware", priority: "Medium", message: "" });
  const [partnerForm, setPartnerForm] = useState({ company: "", contact: "", email: "", type: "Reseller", message: "" });
  const [quoteStatus, setQuoteStatus] = useState({ status: "idle", message: "" });
  const [supportStatus, setSupportStatus] = useState({ status: "idle", message: "" });
  const [partnerStatus, setPartnerStatus] = useState({ status: "idle", message: "" });
  const [whatsAppNote, setWhatsAppNote] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState("");
  const testimonialSliderRef = useRef(null);
  const [, setSelectedSolution] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [industryIndex, setIndustryIndex] = useState(0);
  const industrySliderRef = useRef(null);
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const caseStudySliderRef = useRef(null);

  const scrollTestimonials = (dir) => {
    const el = testimonialSliderRef.current;
    if (!el) return;
    // Scroll by the width of one card plus the gap
    const card = el.querySelector(".snap-start");
    const step = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollIndustries = (dir) => {
    const el = industrySliderRef.current;
    if (!el) return;
    const card = el.querySelector("[data-industry-card]");
    const step = card ? card.offsetWidth + 20 : 400;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goToIndustry = (i) => {
    const el = industrySliderRef.current;
    if (!el) return;
    const card = el.querySelector("[data-industry-card]");
    const step = card ? card.offsetWidth + 20 : 400;
    el.scrollTo({ left: i * step, behavior: "smooth" });
    setIndustryIndex(i);
  };

  const onIndustryScroll = () => {
    const el = industrySliderRef.current;
    if (!el) return;
    const card = el.querySelector("[data-industry-card]");
    const step = card ? card.offsetWidth + 20 : 400;
    setIndustryIndex(Math.round(el.scrollLeft / step));
  };

  const scrollCaseStudies = (dir) => {
    const el = caseStudySliderRef.current;
    if (!el) return;
    const card = el.querySelector("[data-case-card]");
    const step = card ? card.offsetWidth + 20 : 400;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goToCaseStudy = (i) => {
    const el = caseStudySliderRef.current;
    if (!el) return;
    const card = el.querySelector("[data-case-card]");
    const step = card ? card.offsetWidth + 20 : 400;
    el.scrollTo({ left: i * step, behavior: "smooth" });
    setCaseStudyIndex(i);
  };

  const onCaseStudyScroll = () => {
    const el = caseStudySliderRef.current;
    if (!el) return;
    const card = el.querySelector("[data-case-card]");
    const step = card ? card.offsetWidth + 20 : 400;
    setCaseStudyIndex(Math.round(el.scrollLeft / step));
  };

  useEffect(() => {
    document.title = "IT Infrastructure, Networking & Cybersecurity Solutions Company | Your Company Name";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Your trusted partner for IT infrastructure, networking, cybersecurity, cloud solutions, hardware procurement, software licensing, surveillance systems, and managed IT services. Serving businesses across India with end-to-end technology solutions.";
  }, []);

  useEffect(() => {
    callApi("records.list", { collection: "quote_requests", limit: 1 }).catch(() => {});
  }, []);

  useEffect(() => {
    const onScroll = () => {
      for (const id of ["home", "products", "solutions", "industries", "certifications", "case-studies", "brands", "contact"]) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 240 && el.getBoundingClientRect().bottom > 240) setActiveSection(id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollProducts = (dir) => {
    const el = productCarouselRef.current; if (!el) return;
    const card = el.querySelector("[data-product-card]");
    const step = card ? card.offsetWidth + 20 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };
  const goToProduct = (i) => {
    const el = productCarouselRef.current; if (!el) return;
    const card = el.querySelector("[data-product-card]");
    const step = card ? card.offsetWidth + 20 : 340;
    el.scrollTo({ left: i * step, behavior: "smooth" });
    setProductIndex(i);
  };
  const onProductScroll = () => {
    const el = productCarouselRef.current; if (!el) return;
    const card = el.querySelector("[data-product-card]");
    const step = card ? card.offsetWidth + 20 : 340;
    setProductIndex(Math.min(productCards.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  const goTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); setOpenDropdown(null); };
  const chooseService = (service) => { setQuoteForm((f) => ({ ...f, service })); setContactTab("quote"); goTo("contact"); };
  const chooseCatalogCategory = (category, product) => {
    setQuoteForm((f) => ({ ...f, service: "Request a Quote — IT Infrastructure", message: product ? `Please share your best price for ${product} (${category}).` : `Please share your best price for ${category}.` })); setContactTab("quote"); goTo("contact");
  };
  const openProduct = (title) => setSelectedProduct(title);
  const chooseNavChild = (child) => {
    if (child.solutionId) { setSelectedSolution(child.solutionId); setMenuOpen(false); setOpenDropdown(null); return; }
    if (child.service) setQuoteForm((f) => ({ ...f, service: child.service || f.service }));
    if (child.contactTab) setContactTab(child.contactTab);
    if (child.enquiry === "Partner With Us") { setContactTab("partner"); }
    if (child.enquiry === "Support Request") { setContactTab("support"); }
    goTo(child.target);
  };

  const openIndustry = (id) => { setSelectedIndustry(id); };
  const footerIndustry = (label) => {
    const map = { "Financial Services": "Finance", "IT": "IT" };
    setIndustryFilter(map[label] || label);
    goTo("industries");
  };

  const handleQuote = async (e) => {
    e.preventDefault(); if (quoteStatus.status === "busy") return;
    if (!quoteForm.name.trim() || !quoteForm.phone.trim() || !quoteForm.message.trim()) { setQuoteStatus({ status: "error", message: "Please add your name, phone number and a short message so we can respond." }); return; }
    setQuoteStatus({ status: "busy", message: "Saving your enquiry…" });
    try {
      await callApi("records.create", { collection: "quote_requests", value: { ...quoteForm, enquiry: "Request a Quote", created_at: new Date().toISOString() }, idempotency_key: `quote-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` });
      setQuoteStatus({ status: "saved", message: "Thank you! We will contact you within 2 hours." });
      setQuoteForm({ name: "", phone: "", email: "", company: "", industry: "IT", service: "Request a Quote — IT Infrastructure", budget: "Not sure yet — advise me", message: "" });
    } catch (err) { setQuoteStatus({ status: "error", message: err instanceof Error ? err.message : "We could not save your enquiry. Please try again or call us." }); }
  };
  const handleSupport = async (e) => {
    e.preventDefault(); if (supportStatus.status === "busy") return;
    if (!supportForm.name.trim() || !supportForm.phone.trim() || !supportForm.message.trim()) { setSupportStatus({ status: "error", message: "Please add your name, phone number and a description of the issue." }); return; }
    setSupportStatus({ status: "busy", message: "Saving your support request…" });
    try {
      await callApi("records.create", { collection: "support_requests", value: { ...supportForm, enquiry: "Support Request", created_at: new Date().toISOString() }, idempotency_key: `support-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` });
      setSupportStatus({ status: "saved", message: "Thank you! We will contact you within 2 hours." });
      setSupportForm({ name: "", phone: "", issue: "Hardware", priority: "Medium", message: "" });
    } catch (err) { setSupportStatus({ status: "error", message: err instanceof Error ? err.message : "We could not save your request. Please try again or call us." }); }
  };
  const handlePartner = async (e) => {
    e.preventDefault(); if (partnerStatus.status === "busy") return;
    if (!partnerForm.company.trim() || !partnerForm.contact.trim() || !partnerForm.message.trim()) { setPartnerStatus({ status: "error", message: "Please add your company, contact name and a short message." }); return; }
    setPartnerStatus({ status: "busy", message: "Saving your partnership enquiry…" });
    try {
      await callApi("records.create", { collection: "partner_requests", value: { ...partnerForm, enquiry: "Partner With Us", created_at: new Date().toISOString() }, idempotency_key: `partner-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` });
      setPartnerStatus({ status: "saved", message: "Thank you! We will contact you within 2 hours." });
      setPartnerForm({ company: "", contact: "", email: "", type: "Reseller", message: "" });
    } catch (err) { setPartnerStatus({ status: "error", message: err instanceof Error ? err.message : "We could not save your enquiry. Please try again or call us." }); }
  };

  const industryDetail = selectedIndustry ? detailedIndustries.find((x) => x.id === selectedIndustry) : undefined;
  const productDetail = selectedProduct ? productCards.find((x) => x.title === selectedProduct) : undefined;

  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh", background: "#080616" }} className="overflow-x-clip text-white">
      {/* 1. TOP PROMO BAR - Fixed at the very top */}
      <TopBar />

      {/* 2. MAIN NAVIGATION - Fixed just below the promo bar */}
      <Header
        activeSection={activeSection}
        goTo={goTo}
        chooseNavChild={chooseNavChild}
        chooseService={chooseService}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        heroSearch={heroSearch}
        setHeroSearch={setHeroSearch}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        mobileSection={mobileSection}
        setMobileSection={setMobileSection}
      />

      <main className="w-full min-w-0 pt-[100px]">
        <Hero heroSlides={heroSlides} chooseService={chooseService} goTo={goTo} />

        <IntroBento />

        <ProductsSection
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          chooseService={chooseService}
        />

        <SolutionsSection
          productCards={productCards}
          productCarouselRef={productCarouselRef}
          productIndex={productIndex}
          onProductScroll={onProductScroll}
          scrollProducts={scrollProducts}
          goToProduct={goToProduct}
          openProduct={openProduct}
          chooseService={chooseService}
          productDetail={productDetail}
          setSelectedProduct={setSelectedProduct}
        />

        <WhySection whyItems={whyItems} chooseService={chooseService} />

        <IndustriesSection
          industryFilters={industryFilters}
          industryFilter={industryFilter}
          setIndustryFilter={setIndustryFilter}
          industrySliderRef={industrySliderRef}
          scrollIndustries={scrollIndustries}
          onIndustryScroll={onIndustryScroll}
          industryIndex={industryIndex}
          setIndustryIndex={setIndustryIndex}
          goToIndustry={goToIndustry}
          detailedIndustries={detailedIndustries}
          openIndustry={openIndustry}
          chooseCatalogCategory={chooseCatalogCategory}
          chooseService={chooseService}
        />

        <CertificationsSection certifications={certifications} />

        <CaseStudiesSection
          caseStudies={caseStudies}
          caseStudySliderRef={caseStudySliderRef}
          scrollCaseStudies={scrollCaseStudies}
          onCaseStudyScroll={onCaseStudyScroll}
          caseStudyIndex={caseStudyIndex}
          goToCaseStudy={goToCaseStudy}
          chooseService={chooseService}
        />

        <BrandsSection partnerLogos={partnerLogos} />

        <TestimonialsSection
          testimonials={testimonials}
          testimonialSliderRef={testimonialSliderRef}
          scrollTestimonials={scrollTestimonials}
        />

        <ContactSection
          contactTab={contactTab}
          setContactTab={setContactTab}
          quoteForm={quoteForm}
          setQuoteForm={setQuoteForm}
          supportForm={supportForm}
          setSupportForm={setSupportForm}
          partnerForm={partnerForm}
          setPartnerForm={setPartnerForm}
          quoteStatus={quoteStatus}
          supportStatus={supportStatus}
          partnerStatus={partnerStatus}
          handleQuote={handleQuote}
          handleSupport={handleSupport}
          handlePartner={handlePartner}
          whatsAppNote={whatsAppNote}
          setWhatsAppNote={setWhatsAppNote}
        />

        <FinalCta setContactTab={setContactTab} goTo={goTo} />

        <Footer
          goTo={goTo}
          chooseService={chooseService}
          setSelectedSolution={setSelectedSolution}
          setContactTab={setContactTab}
          footerIndustry={footerIndustry}
          certifications={certifications}
        />
      </main>

      <IndustryModal
        industryDetail={industryDetail}
        setSelectedIndustry={setSelectedIndustry}
        chooseCatalogCategory={chooseCatalogCategory}
        chooseService={chooseService}
      />
    </div>
  );
}
