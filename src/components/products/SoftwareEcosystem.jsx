import { Building2 } from "lucide-react";
import SoftwareEcosystemNode from "./SoftwareEcosystemNode";

export default function SoftwareEcosystem({ softwareCards, setSelectedProduct }) {
  // Automatically distribute software on both sides
  const midpoint = Math.ceil(softwareCards.length / 2);

  const leftProducts = softwareCards.slice(0, midpoint);
  const rightProducts = softwareCards.slice(midpoint);

  // Dynamically calculate node positions
  const getPositions = (products, side) => {
    return products.map((product, index) => {
      const total = products.length;

      const y =
        total === 1
          ? 250
          : 75 + (index * 350) / (total - 1);

      return {
        product,
        x: side === "left" ? 145 : 855,
        y,
        side,
      };
    });
  };

  const leftNodes = getPositions(leftProducts, "left");
  const rightNodes = getPositions(rightProducts, "right");

  const allNodes = [...leftNodes, ...rightNodes];

  // Connections between software and business
  const createBusinessPath = (node) => {
    if (node.side === "left") {
      // Left software → Center business
      return `M ${node.x} ${node.y}
      C 300 ${node.y}, 350 250, 500 250`;
    }

    // Right software → Center business
    return `M ${node.x} ${node.y}
    C 700 ${node.y}, 650 250, 500 250`;
  };

  // Software-to-software connections
  const softwareLinks = [];

  leftNodes.forEach((left, index) => {
    if (rightNodes.length > 0) {
      const right = rightNodes[index % rightNodes.length];

      softwareLinks.push({
        id: `${left.product.title}-${right.product.title}`,
        path: `M ${left.x} ${left.y}
          C 350 ${left.y}, 650 ${right.y}, ${right.x} ${right.y}`,
      });
    }
  });

  return (
    <section className="relative  overflow-hidden">

      {/* Section Heading */}
      <div className="">
        <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
          Software Ecosystem
        </h2>

        <p className="mt-3 text-lg text-gray-400">
          Every business operation connected. Every solution working together.
        </p>
      </div>

      {/* Main Diagram */}
      <div className="relative overflow-x-auto  bg-[#000000] shadow-2xl">

        <div className="relative mx-auto h-[600px] min-w-[1000px] max-w-[1400px]">

          {/* Background Atmosphere */}
          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(#60a5fa 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          {/* SVG CONNECTIONS */}
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full pointer-events-none"
          >
            <defs>

              <linearGradient id="businessBlueFlow">
                <stop offset="0%" stopColor="#0755c9" />
                <stop offset="45%" stopColor="#1679ff" />
                <stop offset="100%" stopColor="#06c9ff" />
              </linearGradient>

              <linearGradient id="softwareCrossFlow">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>

              <filter id="businessGlow">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* SOFTWARE TO SOFTWARE CONNECTIONS */}
            {softwareLinks.map((link) => (
              <path
                key={link.id}
                d={link.path}
                fill="none"
                stroke="url(#softwareCrossFlow)"
                strokeWidth="2"
                strokeDasharray="5 12"
                opacity=".22"
              />
            ))}

            {/* SOFTWARE TO BUSINESS CONNECTIONS */}
            {allNodes.map((node, index) => {
              const path = createBusinessPath(node);

              return (
                <g key={node.product.title}>

                  {/* Thick flowing background */}
                  <path
                    d={path}
                    fill="none"
                    stroke="#0755d8"
                    strokeWidth="25"
                    opacity=".13"
                  />

                  {/* Main blue connection */}
                  <path
                    d={path}
                    fill="none"
                    stroke="url(#businessBlueFlow)"
                    strokeWidth="15"
                    opacity=".65"
                  />

                  {/* Bright animated line */}
                  <path
                    d={path}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    strokeDasharray="12 16"
                    filter="url(#businessGlow)"
                    className="network-flow"
                    opacity=".9"
                  />

                  {/* Moving data particles */}
                  <circle
                    r="4"
                    fill="#a5f3fc"
                    filter="url(#businessGlow)"
                  >
                    <animateMotion
                      dur={`${3 + (index % 4) * 0.8}s`}
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>

                  <circle
                    r="2.5"
                    fill="#38bdf8"
                    opacity=".8"
                  >
                    <animateMotion
                      dur={`${5 + (index % 3)}s`}
                      begin="-2s"
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>

                </g>
              );
            })}

            {/* OUTER NETWORK CONNECTIONS */}
            <path
              d="M145 75 C350 0 650 0 855 75"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="5 14"
              opacity=".4"
            />

            <path
              d="M145 425 C350 500 650 500 855 425"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeDasharray="5 14"
              opacity=".4"
            />

          </svg>

          {/* LEFT SOFTWARE NODES */}
          {leftNodes.map((node, index) => (
            <SoftwareEcosystemNode
              key={node.product.title}
              product={node.product}
              side="left"
              index={index}
              x={node.x}
              y={node.y}
              setSelectedProduct={setSelectedProduct}
            />
          ))}

          {/* RIGHT SOFTWARE NODES */}
          {rightNodes.map((node, index) => (
            <SoftwareEcosystemNode
              key={node.product.title}
              product={node.product}
              side="right"
              index={index}
              x={node.x}
              y={node.y}
              setSelectedProduct={setSelectedProduct}
            />
          ))}

          {/* CENTRAL BUSINESS NODE */}
          <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

            {/* Orb */}
            <button
              onClick={() => setSelectedProduct("Your Business")}
              className="group relative flex h-[210px] w-[210px] items-center justify-center rounded-full border border-cyan-400/60 bg-gradient-to-br from-blue-500 via-blue-800 to-[#020617] shadow-[0_0_80px_20px_rgba(37,99,235,0.3)] transition-transform duration-500 hover:scale-105"
            >

              {/* Outer Ring */}
              <div className="absolute -inset-4 rounded-full border border-blue-400/20 animate-pulse" />

              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-40" />

              {/* Inner Sphere */}
              <div className="absolute inset-3 rounded-full border border-cyan-300/40 bg-gradient-to-br from-[#102d68] via-[#061b4b] to-[#020617] shadow-[inset_0_0_35px_rgba(6,182,212,0.5)]" />

              {/* Inner Ring */}
              <div className="absolute inset-7 rounded-full border border-blue-300/20" />

              {/* Business Identity */}
              <div className="relative z-10 flex flex-col items-center">

                <Building2
                  size={36}
                  className="mb-3 text-cyan-200 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                />

                <span className="text-xl font-medium tracking-tight text-white">
                  YOUR
                </span>

                <span className="text-xl font-medium tracking-tight text-white">
                  BUSINESS
                </span>

              </div>
            </button>

            {/* Subtitle */}
            <div className="mt-7 whitespace-nowrap text-center">
              <p className="text-xs font-normal uppercase tracking-[0.25em] text-cyan-300">
                Connected Business Ecosystem
              </p>

              <p className="mt-2 text-[10px] text-blue-200/50">
                Powered by interconnected software
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
