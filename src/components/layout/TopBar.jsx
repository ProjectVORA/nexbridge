export default function TopBar() {
  return (
    <div className="fixed left-0 top-0 z-[60] w-full bg-[#2F2FE4] px-3 py-2 text-center text-[11px] font-normal text-white sm:text-[12px] shadow-sm">
      <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>End-to-End Technology Solutions</span>
        <span className="hidden sm:inline">|</span>
        <span>Serving Across India</span>
        <span className="hidden sm:inline">|</span>
        <span>24/7 Support - Call: <a href="tel:+919000000000" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-gray-200">+91 90000 00000</a></span>
      </span>
    </div>
  );
}
