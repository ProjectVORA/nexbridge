import { useState, useEffect, useRef, useCallback } from 'react';
import CardSwap, { Card } from './component/card';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroSectionRef = useRef(null);
  const darkSectionRef = useRef(null);
  const thirdSectionRef = useRef(null);
  const fourthSectionRef = useRef(null);
  const bigTypeRef = useRef(null);
  const darkTextRef = useRef(null);
  const wordElementsRef = useRef([]);

  const projectPathRef = useRef(null);
  const projectPathLengthRef = useRef(0);

  const [hoveredProject, setHoveredProject] = useState(null);
  const hoverImageRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const cursorTagRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const [showCursorTag, setShowCursorTag] = useState(false);

  const coinsRef = useRef([]);

  const [textIndex, setTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('main');

  // --- Contact Form State ---
  const [contactStep, setContactStep] = useState(1);
  const [selectedService, setSelectedService] = useState('development');
  const [formData, setFormData] = useState({ name: '', email: '' });

  // --- WhatsApp ---
  const WHATSAPP_NUMBER = '918073415414';
  const WHATSAPP_MESSAGE = encodeURIComponent('Hi StackBergAI! I would like to discuss a project.');
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  const textVariants = [
    [
      "We design and build",
      "websites, brand systems,",
      "and digital products that",
      "work as hard as they look."
    ],
    [
      "Whether you're launching",
      "a product, rebuilding a",
      "brand, or replacing a tired",
      "site, one team takes it",
      "from sketch to live build."
    ]
  ];

  const nextText = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setTextIndex((prev) => (prev + 1) % textVariants.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 350);
  }, [isAnimating, textVariants.length]);

  useEffect(() => {
    const textInterval = setInterval(nextText, 6000);
    return () => clearInterval(textInterval);
  }, [nextText]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    let raf;
    const tick = () => {
      const el = cursorTagRef.current;
      if (el) {
        const currentX = parseFloat(el.dataset.x || '0');
        const currentY = parseFloat(el.dataset.y || '0');
        const nx = currentX + (targetPos.current.x - currentX) * 0.18;
        const ny = currentY + (targetPos.current.y - currentY) * 0.18;
        el.dataset.x = nx;
        el.dataset.y = ny;
        el.style.left = `${nx}px`;
        el.style.top = `${ny}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let raf;
    const tick = () => {
      const el = hoverImageRef.current;
      if (el) {
        const currentX = parseFloat(el.dataset.x || '0');
        const currentY = parseFloat(el.dataset.y || '0');
        const nx = currentX + (mousePos.current.x - currentX) * 0.15;
        const ny = currentY + (mousePos.current.y - currentY) * 0.15;
        el.dataset.x = nx;
        el.dataset.y = ny;
        el.style.transform = `translate(${nx}px, ${ny}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (projectPathRef.current) {
      const length = projectPathRef.current.getTotalLength();
      projectPathLengthRef.current = length;
      projectPathRef.current.style.strokeDasharray = length;
      projectPathRef.current.style.strokeDashoffset = length;
    }

    const handleScroll = () => {
      if (!thirdSectionRef.current || !projectPathRef.current) return;
      const rect = thirdSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom - 400;
      const totalScrollDist = sectionBottom - sectionTop;
      const currentScrollDist = windowHeight - sectionTop;
      const progress = currentScrollDist / (windowHeight + totalScrollDist);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const drawLength = projectPathLengthRef.current * clampedProgress;
      projectPathRef.current.style.strokeDashoffset = projectPathLengthRef.current - drawLength;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const COIN_SIZE = 72;
  const FALL_INTERVAL = 2000;
  const GRAVITY = 0.5;
  const BOUNCE_FACTOR = 0.65;
  const MAX_FALL_SPEED = 18;
  const GROUND_Y_OFFSET = 16;
  const MAX_COINS = 4;
  const ROLL_FACTOR = 0.90;
  const COIN_IMAGE_URL = 'https://res.cloudinary.com/djpfw1goz/image/upload/v1792412647/Glossy_Blue_Glass_N_Coin_pv9bam.png';

  const projectsList = [
    { name: "Shine Pro Cars", type: "Development", year: "2026", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792411357/Screenshot_2026-10-19_173136_cexvmj.png" },
    { name: "Cortland", type: "Web design", year: "2026", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/download_4_yrdwpi.jpg" },
    { name: "Rally", type: "Development", year: "2025", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/AP-Mockups_Apple_Devices_omcrev.jpg" },
    { name: "Rhinestone", type: "Development", year: "2025", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/NOD_Marketing_Agency_Bold_Re-Branding_Identity_2026___Navigate_to_Destination_ieykpo.jpg" },
    { name: "Ezra", type: "Development", year: "2024", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/Orchard_Studio_a_clean_Framer_template_for_creative_studios__prdz9c.jpg" },
  ];

  // ============================================================
  // SERVICES DATA - MAIN CATEGORIES (CardSwap display)
  // ============================================================
  const servicesList = [
    { num: "01", title: "Web Development", desc: "Begin Web development with our Project Discovery session, aligning our team with your goals, timeline, and required functionalities. We prioritize understanding your content strategy, feature needs, and desired user experiences.", bg: "#141414", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/Orchard_Studio_a_clean_Framer_template_for_creative_studios__prdz9c.jpg" },
    { num: "02", title: "UX/UI Design", desc: "Join our UX/UI Design Workshop to kickstart your design journey. We'll analyze user experiences, pinpoint issues, and create a strategic vision for an engaging interface that aligns with business goals and user needs.", bg: "#191919", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/download_4_yrdwpi.jpg" },
    { num: "03", title: "Brand Identity", desc: "We craft cohesive brand identities that tell your story, establish a strong market presence, and resonate deeply with your target audience across all digital touchpoints.", bg: "#1e1e1e", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/NOD_Marketing_Agency_Bold_Re-Branding_Identity_2026___Navigate_to_Destination_ieykpo.jpg" },
    { num: "04", title: "Software Development & Integration", desc: "Builds custom applications, integrates enterprise systems, and maintains business workflows. From specialized enterprise platforms and internal CRMs/ERPs to web & mobile apps (iOS, Android, React Native, Flutter) — we deliver end-to-end.", bg: "#161616", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/AP-Mockups_Apple_Devices_omcrev.jpg" },
    { num: "05", title: "Cloud & DevOps", desc: "Managing cloud infrastructure across AWS, Google Cloud, and Azure. We handle containerization with Docker & Kubernetes, build CI/CD pipelines, and ensure your deployments are scalable, resilient, and automated.", bg: "#1a1a1a", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/Orchard_Studio_a_clean_Framer_template_for_creative_studios__prdz9c.jpg" },
    { num: "06", title: "AI & Machine Learning Integration", desc: "Implementing generative AI, RAG pipelines, LLMs, and data analytics into your products and workflows — turning cutting-edge models into practical business advantage.", bg: "#141414", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/NOD_Marketing_Agency_Bold_Re-Branding_Identity_2026___Navigate_to_Destination_ieykpo.jpg" },
    { num: "07", title: "Cybersecurity Services", desc: "Protects data and systems through firewalls, multi-factor authentication (MFA), endpoint protection, antivirus software, and vulnerability scans — safeguarding your business from evolving threats.", bg: "#191919", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/download_4_yrdwpi.jpg" },
    { num: "08", title: "Dedicated Teams & Staff Augmentation", desc: "Providing remote, offshore, or part-time/full-time developers to plug seamlessly into your existing workflow — scale your team without the overhead.", bg: "#1e1e1e", image: "https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/AP-Mockups_Apple_Devices_omcrev.jpg" },
  ];

  // ============================================================
  // SERVICES DATA - COMPREHENSIVE IT SERVICES (tabbed display)
  // ============================================================
  const mainCategories = [
    { icon: "", title: "Infrastructure Services", desc: "Manages physical and virtual foundational elements like servers, data centers, local networks, firewalls, and hardware procurement." },
    { icon: "", title: "Cybersecurity Services", desc: "Protects data and systems through firewalls, multi-factor authentication (MFA), endpoint protection, antivirus software, and vulnerability scans." },
    { icon: "", title: "Cloud & Storage Services", desc: "Provides remote access to data storage, virtual platforms, and Software-as-a-Service (SaaS) applications." },
    { icon: "", title: "Help Desk & Technical Support", desc: "Resolves day-to-day user issues, hardware troubleshooting, and remote software assistance." },
    { icon: "", title: "Data Backup & Disaster Recovery", desc: "Prevents permanent data loss and builds protocols to restore business operations after a system failure or attack." },
    { icon: "", title: "Software Development & Integration", desc: "Designs, codes, and maintains custom business applications or internal tools." },
    { icon: "", title: "IT Consulting & Strategy", desc: "Helps leadership plan technology roadmaps, system upgrades, and compliance requirements." },
  ];

  const softwareServices = [
    { title: "Custom Software Development", desc: "Building specialized enterprise platforms, internal business tools, CRMs, and ERP systems from scratch." },
    { title: "Web & Mobile App Development", desc: "Designing and coding responsive websites, e-commerce stores, and native or cross-platform mobile apps (iOS, Android, React Native, Flutter)." },
    { title: "UI/UX Design", desc: "Creating wireframes, prototypes, and user-centric digital interfaces." },
    { title: "Cloud & DevOps", desc: "Managing cloud infrastructure (AWS, Google Cloud, Azure), containerization (Docker, Kubernetes), and CI/CD pipelines." },
    { title: "AI & Machine Learning Integration", desc: "Implementing generative AI, RAG pipelines, LLMs, and data analytics." },
    { title: "Quality Assurance & Testing", desc: "Running automated and manual testing to ensure security, compliance, and bug-free performance." },
    { title: "Legacy Modernization & Maintenance", desc: "Upgrading outdated systems, refactoring code, and providing ongoing support SLAs." },
    { title: "Dedicated Teams & Staff Augmentation", desc: "Providing remote, offshore, or part-time/full-time developers to plug into your existing workflow." },
  ];

  const deliveryModels = [
    { icon: "", title: "Internal IT Teams", desc: "Staff employed directly by an organization to manage daily technology needs." },
    { icon: "", title: "Managed Service Providers (MSPs)", desc: "External companies hired on a contract basis to proactively monitor and maintain systems for a flat fee." },
  ];

  // ============================================================
  // MENU NAVIGATION DATA
  // ============================================================
  const menuItems = [
    { label: "Home", target: "top" },
    { label: "Services", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Contacts", target: "contacts" },
  ];

  const scrollToSection = (target) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (target === 'services') {
        const el = document.getElementById('services-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (target === 'projects') {
        const el = document.getElementById('projects-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (target === 'contacts') {
        const el = document.getElementById('contacts-section');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }, 250);
  };

  const getPageRect = (el) => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return {
      left: r.left + window.scrollX,
      top: r.top + window.scrollY,
      right: r.right + window.scrollX,
      bottom: r.bottom + window.scrollY,
      width: r.width,
      height: r.height,
    };
  };

  const animateCoin = useCallback((entry, now) => {
    const { el: coin, state } = entry;
    if (!coin || !state.active) return;

    if (state.isDragging) {
      entry.frameId = requestAnimationFrame((t) => animateCoin(entry, t));
      return;
    }

    const delta = Math.min(32, now - state.lastFrameTime) / 16;
    state.lastFrameTime = now;

    state.vy += GRAVITY * delta;
    if (state.vy > MAX_FALL_SPEED) state.vy = MAX_FALL_SPEED;

    state.x += state.vx * delta;
    state.y += state.vy * delta;

    state.rotation += state.vx * delta * ROLL_FACTOR;

    const coinLeft = state.x;
    const coinRight = state.x + COIN_SIZE;
    const coinTop = state.y;
    const coinBottom = state.y + COIN_SIZE;

    for (let w of wordElementsRef.current) {
      const rect = getPageRect(w);
      if (!rect) continue;
      if (coinRight > rect.left && coinLeft < rect.right && coinBottom > rect.top && coinTop < rect.bottom) {
        const overlapLeft = coinRight - rect.left;
        const overlapRight = rect.right - coinLeft;
        const overlapTop = coinBottom - rect.top;
        const overlapBottom = rect.bottom - coinTop;
        const minOverlapX = Math.min(overlapLeft, overlapRight);
        const minOverlapY = Math.min(overlapTop, overlapBottom);

        if (minOverlapX < minOverlapY) {
          if (overlapLeft < overlapRight) {
            state.x = rect.left - COIN_SIZE;
            state.vx = -state.vx * BOUNCE_FACTOR;
          } else {
            state.x = rect.right;
            state.vx = -state.vx * BOUNCE_FACTOR;
          }
        } else {
          if (overlapTop < overlapBottom) {
            state.y = rect.top - COIN_SIZE;
            state.vy = -state.vy * BOUNCE_FACTOR;
            state.vx += (Math.random() - 0.5) * 1.5;
          } else {
            state.y = rect.bottom;
            state.vy = -state.vy * BOUNCE_FACTOR;
          }
        }
      }
    }

    if (darkTextRef.current) {
      const rect = getPageRect(darkTextRef.current);
      if (rect && coinRight > rect.left && coinLeft < rect.right && coinBottom > rect.top && coinTop < rect.bottom) {
        const overlapLeft = coinRight - rect.left;
        const overlapRight = rect.right - coinLeft;
        const overlapTop = coinBottom - rect.top;
        const overlapBottom = rect.bottom - coinTop;
        const minOverlapX = Math.min(overlapLeft, overlapRight);
        const minOverlapY = Math.min(overlapTop, overlapBottom);

        if (minOverlapX < minOverlapY) {
          if (overlapLeft < overlapRight) {
            state.x = rect.left - COIN_SIZE;
            state.vx = -state.vx * BOUNCE_FACTOR;
          } else {
            state.x = rect.right;
            state.vx = -state.vx * BOUNCE_FACTOR;
          }
        } else {
          if (overlapTop < overlapBottom) {
            state.y = rect.top - COIN_SIZE;
            state.vy = -state.vy * BOUNCE_FACTOR;
            state.vx += (Math.random() - 0.5) * 1.5;
          } else {
            state.y = rect.bottom;
            state.vy = -state.vy * BOUNCE_FACTOR;
          }
        }
      }
    }

    if (heroSectionRef.current) {
      const heroRect = getPageRect(heroSectionRef.current);
      if (heroRect) {
        const heroBottomPage = heroRect.bottom - GROUND_Y_OFFSET;
        if (state.y + COIN_SIZE > heroBottomPage) {
          state.y = heroBottomPage - COIN_SIZE;
          if (state.vy > 0.5) {
            state.vy = -state.vy * BOUNCE_FACTOR;
            state.vx *= 0.98;
          } else {
            state.vy = 0;
            if (Math.abs(state.vx) < 0.2) state.vx = 0;
          }
        }
        if (state.y < heroRect.top) {
          state.y = heroRect.top;
          state.vy = -state.vy * BOUNCE_FACTOR;
        }
        if (state.x < heroRect.left) {
          state.x = heroRect.left;
          state.vx = -state.vx * BOUNCE_FACTOR;
        }
        if (state.x + COIN_SIZE > heroRect.right) {
          state.x = heroRect.right - COIN_SIZE;
          state.vx = -state.vx * BOUNCE_FACTOR;
        }
      }
    }

    coin.style.transform = `translate(${state.x}px, ${state.y}px) rotate(${state.rotation}deg)`;
    entry.frameId = requestAnimationFrame((t) => animateCoin(entry, t));
  }, []);

  const removeOldestCoin = useCallback(() => {
    if (coinsRef.current.length === 0) return;
    const oldest = coinsRef.current.shift();
    if (oldest) {
      oldest.state.active = false;
      if (oldest.frameId) cancelAnimationFrame(oldest.frameId);
      if (oldest.el && oldest.el.parentNode) {
        oldest.el.remove();
      }
    }
  }, []);

  const spawnCoin = useCallback(() => {
    if (!heroSectionRef.current) return;

    const heroRect = getPageRect(heroSectionRef.current);
    if (!heroRect) return;

    while (coinsRef.current.length >= MAX_COINS) {
      removeOldestCoin();
    }

    const startX = heroRect.left + 20;
    const startY = heroRect.top + 40;

    const coin = document.createElement('img');
    coin.className = 'coin';
    coin.src = COIN_IMAGE_URL;
    coin.alt = 'StackBergAI coin';
    coin.draggable = false;
    coin.style.position = 'absolute';
    coin.style.left = '0px';
    coin.style.top = '0px';
    coin.style.transform = `translate(${startX}px, ${startY}px) rotate(0deg)`;
    coin.style.width = COIN_SIZE + 'px';
    coin.style.height = COIN_SIZE + 'px';
    coin.style.borderRadius = '50%';
    coin.style.objectFit = 'contain';
    coin.style.filter = 'drop-shadow(0 4px 12px rgba(0,0,0,0.6)) drop-shadow(0 0 6px rgba(255,215,0,0.35))';
    coin.style.cursor = 'grab';
    coin.style.zIndex = '100';
    coin.style.userSelect = 'none';
    coin.style.touchAction = 'none';
    coin.style.pointerEvents = 'auto';
    coin.style.willChange = 'transform';
    coin.style.background = 'transparent';
    coin.style.border = 'none';
    coin.style.padding = '0';

    document.body.appendChild(coin);

    const state = {
      x: startX,
      y: startY,
      vx: 2.5,
      vy: 0,
      rotation: 0,
      isDragging: false,
      dragOffsetX: 0,
      dragOffsetY: 0,
      lastFrameTime: performance.now(),
      active: true,
    };

    const entry = { el: coin, state, frameId: null };
    coinsRef.current.push(entry);

    const clampToViewport = (px, py) => {
      const maxX = window.scrollX + document.documentElement.clientWidth - COIN_SIZE;
      const maxY = window.scrollY + document.documentElement.clientHeight - COIN_SIZE;
      return {
        x: Math.max(window.scrollX, Math.min(px, maxX)),
        y: Math.max(window.scrollY, Math.min(py, maxY)),
      };
    };

    const onPointerDown = (e) => {
      e.preventDefault();
      state.isDragging = true;
      const rect = coin.getBoundingClientRect();
      const coinPageX = rect.left + window.scrollX;
      const coinPageY = rect.top + window.scrollY;
      state.dragOffsetX = (e.clientX + window.scrollX) - coinPageX;
      state.dragOffsetY = (e.clientY + window.scrollY) - coinPageY;
      coin.style.cursor = 'grabbing';
      coin.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e) => {
      if (!state.isDragging) return;
      e.preventDefault();
      const rawX = (e.clientX + window.scrollX) - state.dragOffsetX;
      const rawY = (e.clientY + window.scrollY) - state.dragOffsetY;
      const clamped = clampToViewport(rawX, rawY);
      const dx = clamped.x - state.x;
      state.x = clamped.x;
      state.y = clamped.y;
      state.rotation += dx * 1.5;
      coin.style.transform = `translate(${state.x}px, ${state.y}px) rotate(${state.rotation}deg)`;
    };

    const onPointerUp = (e) => {
      state.isDragging = false;
      coin.style.cursor = 'grab';
      try { coin.releasePointerCapture(e.pointerId); } catch (err) {}
      state.lastFrameTime = performance.now();
    };

    coin.addEventListener('pointerdown', onPointerDown);
    coin.addEventListener('pointermove', onPointerMove);
    coin.addEventListener('pointerup', onPointerUp);
    coin.addEventListener('pointercancel', onPointerUp);

    state.lastFrameTime = performance.now();
    entry.frameId = requestAnimationFrame((t) => animateCoin(entry, t));
  }, [animateCoin, removeOldestCoin]);

  useEffect(() => {
    const words = document.querySelectorAll('.type-word');
    wordElementsRef.current = Array.from(words);

    const timeout = setTimeout(() => spawnCoin(), 500);
    const interval = setInterval(() => spawnCoin(), FALL_INTERVAL);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [spawnCoin]);

  useEffect(() => {
    const words = document.querySelectorAll('.type-word');
    wordElementsRef.current = Array.from(words);
  });

  // Helper: split word into letters with highlight-on-hover (no spin)
  const renderSpinWord = (word) => {
    return (
      <span className="inline-flex items-baseline flex-nowrap whitespace-nowrap">
        {word.split('').map((letter, i) => (
          <span
            key={i}
            className="hero-letter"
            style={{ animationDelay: `${i * 20}ms` }}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&family=Michroma&display=swap');`}</style>
      <style>{`
        html, body {
          overflow-x: hidden;
          overflow-y: auto;
          margin: 0;
          padding: 0;
          background-color: #111;
          -webkit-tap-highlight-color: transparent;
        }
        * { -webkit-text-size-adjust: 100%; }
        button, a, input, .hero-letter { touch-action: manipulation; }

        .type-word { position: relative; display: inline-block; }
        .dark-text-element { position: relative; display: block; }
        .coin {
          pointer-events: auto;
          will-change: transform;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* ---------- HERO LETTER HIGHLIGHT ON HOVER (NO SPIN) ---------- */
        .hero-letter {
          display: inline-block;
          transform-origin: center;
          transition: color 0.3s ease, text-shadow 0.3s ease;
          will-change: color, text-shadow;
          cursor: default;
        }
        @media (hover: hover) {
          .hero-letter:hover {
            color: #ffffff;
            text-shadow:
              0 0 18px rgba(255, 255, 255, 0.75),
              0 0 45px rgba(120, 180, 255, 0.55);
          }
        }

        @keyframes rollOut {
          0% { transform: translateY(0) rotateX(0deg); opacity: 1; filter: blur(0px); }
          100% { transform: translateY(-40px) rotateX(-90deg); opacity: 0; filter: blur(4px); }
        }
        @keyframes rollIn {
          0% { transform: translateY(40px) rotateX(90deg); opacity: 0; filter: blur(4px); }
          100% { transform: translateY(0) rotateX(0deg); opacity: 1; filter: blur(0px); }
        }
        .text-spin-out {
          animation: rollOut 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center top;
        }
        .text-spin-in {
          animation: rollIn 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center bottom;
        }

        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes dashFlow { to { stroke-dashoffset: -1000; } }
        @keyframes pulseCore { 0%, 100% { r: 6; opacity: 0.9; } 50% { r: 10; opacity: 0.4; } }
        @keyframes floatY { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes driftX { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(18px); } }

        .svg-spin-slow { animation: spinSlow 40s linear infinite; transform-origin: center; }
        .svg-spin-medium { animation: spinSlow 22s linear infinite; transform-origin: center; }
        .svg-spin-reverse { animation: spinReverse 30s linear infinite; transform-origin: center; }
        .svg-orbit { animation: orbit 14s linear infinite; transform-origin: center; }
        .svg-orbit-fast { animation: orbit 9s linear infinite; transform-origin: center; }
        .svg-dash { animation: dashFlow 18s linear infinite; }
        .svg-pulse-core { animation: pulseCore 2.4s ease-in-out infinite; }
        .svg-float { animation: floatY 7s ease-in-out infinite; }
        .svg-drift { animation: driftX 9s ease-in-out infinite; }

        .svg-anim-layer.transitioning * { animation-play-state: paused; }

        .project-card {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          cursor: pointer;
          transform: translateZ(0);
        }

        .project-img-base {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-img-hover {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,120 Q25,90 50,120 T100,120 L100,120 L0,120 Z"/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,120 Q25,90 50,120 T100,120 L100,120 L0,120 Z"/></svg>');
          -webkit-mask-size: 100% 200%;
          mask-size: 100% 200%;
          -webkit-mask-position: bottom;
          mask-position: bottom;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 2;
          opacity: 0;
        }

        .project-card:hover .project-img-hover {
          -webkit-mask-position: top;
          mask-position: top;
          transform: scale(1.05);
          opacity: 1;
          filter: blur(2px);
          animation: clearWater 0.8s forwards;
        }

        .project-card:hover .project-img-base {
          transform: scale(1.05);
          filter: brightness(0.7);
        }

        @keyframes clearWater {
          0% { filter: blur(6px); }
          100% { filter: blur(0px); }
        }

        .service-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .service-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.05);
        }
        .service-scroll::-webkit-scrollbar-thumb {
          background: rgba(29,78,216,0.6);
          border-radius: 2px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes menuItemIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .menu-item-anim {
          animation: menuItemIn 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          opacity: 0;
        }

        @keyframes waPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
          70% { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        .wa-pulse {
          animation: waPulse 2.2s infinite;
        }
        .wa-btn:hover .wa-label {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }
        .wa-label {
          opacity: 0;
          transform: translateX(12px);
          transition: all 0.35s cubic-bezier(0.19, 1, 0.22, 1);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .wa-label { display: none; }
        }

        /* ---------- MOBILE-SPECIFIC HERO FIXES ---------- */
        @media (max-width: 640px) {
          .hero-line { line-height: 0.9; }
          .hero-letter { font-size: inherit; }
        }
      `}</style>

      {/* ============================================================ */}
      {/* FULL-SCREEN MENU OVERLAY                                     */}
      {/* ============================================================ */}
      <div
        className={`fixed inset-0 z-[200] transition-all duration-500 ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        <div
          className={`absolute inset-0 md:inset-6 bg-[#0d0d0d] md:rounded-[2rem] border border-white/10 overflow-y-auto overflow-x-hidden flex flex-col transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-6 scale-[0.98]'
          }`}
        >
          <div className="absolute -top-40 -right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-blue-700/20 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-blue-900/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex justify-between items-center p-5 md:p-12 shrink-0">
            <div className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
              StackBergAI <span className="text-blue-500">.</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-colors"
            >
              close.
              <span className="text-lg md:text-xl leading-none transition-transform group-hover:rotate-90">×</span>
            </button>
          </div>

          <nav className="relative z-10 flex-1 flex flex-col justify-center px-5 md:px-24 py-6 md:py-8">
            <div className="flex flex-col gap-2 md:gap-4">
              {menuItems.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.target)}
                  className={`menu-item-anim group text-left flex items-baseline gap-3 md:gap-8 py-1.5 md:py-3 ${
                    isMenuOpen ? '' : 'opacity-0'
                  }`}
                  style={{ animationDelay: isMenuOpen ? `${150 + idx * 80}ms` : '0ms' }}
                >
                  <span className="font-mono text-[10px] md:text-sm text-white/30 group-hover:text-blue-500 transition-colors w-6 md:w-8 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter text-white/40 group-hover:text-white transition-colors duration-300 leading-[0.95]">
                    {item.label}
                  </span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 text-blue-500 self-center shrink-0 md:w-7 md:h-7"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </nav>

          <div className="relative z-10 border-t border-white/10 p-5 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shrink-0">
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs text-white/30 uppercase tracking-widest mb-1">Contact</span>
              <a href="mailto:support@stackbergai.com" className="text-sm md:text-base text-white/80 hover:text-blue-400 transition-colors break-all">
                support@stackbergai.com
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:w-[18px] md:h-[18px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp us
            </a>
            <span className="text-xs md:text-sm text-white/30">© StackBergAI 2026</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FLOATING WHATSAPP BUTTON                                     */}
      {/* ============================================================ */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="wa-btn fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[150] flex items-center group"
      >
        <span className="wa-label mr-3 bg-[#1c1c1c] text-white text-sm font-medium px-4 py-2 rounded-full shadow-xl border border-white/10 whitespace-nowrap">
          Chat with us
        </span>
        <span className="wa-pulse relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-xl transition-transform duration-300 group-hover:scale-110">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#0b0b0b" className="md:w-8 md:h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </span>
      </a>

      <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center gap-6 md:gap-8 p-3 sm:p-4 md:p-8" style={{ fontFamily: "'Commissioner', sans-serif" }}>

        {/* FIRST SECTION */}
        <div ref={heroSectionRef} className="bg-blue-700 w-full max-w-[1700px] min-h-[85vh] md:h-[85vh] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 relative overflow-hidden flex flex-col text-[#E2E8E3]">
          <header className="flex justify-between items-center z-10 gap-3">
            <div className="text-2xl md:text-4xl font-semibold text-black tracking-tight">
              StackBergAI <span className="text-white">.</span>
            </div>
            <div className="flex gap-2 md:gap-3 text-xs md:text-base font-medium">
              <button className="bg-[#051633] hover:bg-black transition-colors px-3 py-2 md:px-5 md:py-2.5 rounded-full text-white whitespace-nowrap">
                <span className="hidden sm:inline">get in touch.</span>
                <span className="sm:hidden">touch.</span>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-white hover:bg-gray-200 transition-colors px-3 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-1.5 md:gap-2 text-black whitespace-nowrap">
                menu. <span className="text-base md:text-lg leading-none pt-0.5">≡</span>
              </button>
            </div>
          </header>

                              <main className="flex-1 relative flex flex-col justify-end mt-8 md:mt-0">
            <div ref={bigTypeRef} className="flex flex-col gap-1 md:gap-4 z-10 w-full">
              {/* WE BUILD - Side by side on both mobile and desktop */}
              <div className="flex justify-between w-full gap-4 md:gap-8">
                <span className="type-word hero-line text-[13vw] md:text-[7vw] leading-[0.85] tracking-tighter font-medium">{renderSpinWord('WE')}</span>
                <span className="type-word hero-line text-[13vw] md:text-[7vw] leading-[0.85] tracking-tighter font-medium">{renderSpinWord('BUILD')}</span>
              </div>
              
              {/* WEBSITES PEOPLE - Stacked on mobile (flex-col), side-by-side on desktop (md:flex-row) */}
              <div className="flex flex-col md:flex-row md:justify-between w-full gap-1 md:gap-8">
                <span className="type-word hero-line text-[13vw] md:text-[7vw] leading-[0.85] tracking-tighter font-medium">
                  {renderSpinWord('WEBSITES')}
                </span>
                <span className="type-word hero-line text-[13vw] md:text-[7vw] leading-[0.85] tracking-tighter font-medium md:text-right">
                  {renderSpinWord('PEOPLE')}
                </span>
              </div>
              
              {/* REMEMBER. */}
              <div className="flex justify-start w-full">
                <span className="type-word hero-line text-[13vw] md:text-[7vw] leading-[0.85] tracking-tighter font-medium">{renderSpinWord('REMEMBER.')}</span>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0 w-full md:w-[450px] text-sm md:text-lg leading-relaxed text-[#E2E8E3] z-10 font-light">
              Awake is a creative digital studio in Warsaw. We design and build premium websites and web products for founders and product teams who need to stand out.
            </div>
          </main>
        </div>

        {/* SECOND SECTION */}
        <section
          ref={darkSectionRef}
          onClick={nextText}
          onMouseEnter={() => setShowCursorTag(true)}
          onMouseLeave={() => setShowCursorTag(false)}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            targetPos.current = {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            };
          }}
          className="bg-[#1c1c1c] w-full max-w-[1700px] min-h-[80vh] md:min-h-[110vh] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-16 relative overflow-hidden flex items-center justify-center select-none"
          style={{ perspective: '1200px', cursor: 'none' }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '20% 50%',
              }}
            />
            <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[250px] h-[250px] md:w-[700px] md:h-[700px] border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-[25%] -translate-y-1/2 w-[160px] h-[160px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-white/[0.03] to-transparent rotate-45 border border-white/[0.05]" />
          </div>

          <div
            className={`absolute inset-0 pointer-events-none overflow-hidden svg-anim-layer ${isAnimating ? 'transitioning' : ''}`}
            aria-hidden="true"
          >
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] opacity-40" viewBox="0 0 600 600" fill="none">
              <circle cx="300" cy="300" r="240" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="6 14" className="svg-spin-slow" style={{ transformOrigin: '300px 300px' }} />
              <circle cx="300" cy="300" r="200" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="2 10" className="svg-spin-reverse" style={{ transformOrigin: '300px 300px' }} />
              <g className="svg-orbit" style={{ transformOrigin: '300px 300px' }}>
                <circle cx="300" cy="60" r="4" fill="rgba(255,255,255,0.55)" />
                <circle cx="540" cy="300" r="3" fill="rgba(255,255,255,0.35)" />
                <circle cx="300" cy="540" r="5" fill="rgba(255,255,255,0.45)" />
                <circle cx="60" cy="300" r="2.5" fill="rgba(255,255,255,0.3)" />
              </g>
              <g className="svg-orbit-fast" style={{ transformOrigin: '300px 300px' }}>
                <circle cx="300" cy="100" r="3" fill="rgba(120,180,255,0.7)" />
                <circle cx="500" cy="300" r="2" fill="rgba(120,180,255,0.5)" />
                <circle cx="300" cy="500" r="3.5" fill="rgba(120,180,255,0.6)" />
              </g>
              <circle cx="300" cy="300" r="6" fill="rgba(120,180,255,0.9)" className="svg-pulse-core" style={{ transformOrigin: '300px 300px' }} />
            </svg>
          </div>

          <h2
            ref={darkTextRef}
            className="dark-text-element relative z-10 text-center text-[#b3b9b4] text-2xl sm:text-3xl md:text-6xl lg:text-[4vw] font-medium leading-[1.15] md:leading-[1.05] tracking-tight max-w-[100%] lg:max-w-[1700px] flex flex-col items-center justify-center gap-1 md:gap-2"
          >
            {textVariants[textIndex].map((line, index) => (
              <span
                key={`${textIndex}-${index}`}
                className={`block transform-gpu ${
                  isAnimating ? 'text-spin-out' : 'text-spin-in'
                }`}
                style={{ animationDelay: isAnimating ? '0ms' : `${index * 40}ms` }}
              >
                {line}
              </span>
            ))}
          </h2>

          <div
            ref={cursorTagRef}
            className="pointer-events-none absolute z-30 transition-opacity duration-200 hidden md:block"
            style={{
              left: 0,
              top: 0,
              transform: 'translate(-50%, -50%)',
              opacity: showCursorTag ? 1 : 0,
            }}
          >
            <div className="flex flex-col items-center justify-center gap-1 bg-blue-700 text-black text-[10px] md:text-xs font-medium w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg text-center leading-tight">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              click here
            </div>
          </div>
        </section>

        {/* THIRD SECTION - OUR PROJECTS */}
        <section
          id="projects-section"
          ref={thirdSectionRef}
          className="bg-[#1c1c1c] w-full max-w-[1700px] min-h-screen rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-16 relative overflow-hidden flex flex-col text-[#b3b9b4]"
        >
          <h2 className="text-[13vw] md:text-[12vw] leading-[0.85] tracking-tighter font-medium text-[#b3b9b4] z-10">
            OUR PROJECTS
          </h2>

          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
            <svg viewBox="0 0 1000 2000" className="w-full h-full" preserveAspectRatio="none">
              <path
                ref={projectPathRef}
                d="M 600 0 C 1000 200, 1000 400, 500 500 C 0 600, 0 800, 500 900 C 1000 1000, 1000 1200, 500 1400 C 0 1600, 0 1800, 500 2000"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="50"
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
            </svg>
          </div>

          <div className="relative z-10 flex-1 mt-10 md:mt-32 w-full max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-32 pb-16 md:pb-32">
            <div className="flex w-full justify-start pl-2 md:pl-24">
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[500px]">
                <div className="project-card w-full aspect-video shadow-2xl">
                  <img className="project-img-base" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/Orchard_Studio_a_clean_Framer_template_for_creative_studios__prdz9c.jpg" alt="Orchard Studio" />
                  <img className="project-img-hover" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/download_4_yrdwpi.jpg" alt="Orchard Studio Hover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-gray-400">Development</span>
                  <span className="text-xl md:text-3xl text-[#b3b9b4]">Orchard Studio</span>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end pr-2 md:pr-24">
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[500px]">
                <div className="project-card w-full aspect-video shadow-2xl">
                  <img className="project-img-base" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/AP-Mockups_Apple_Devices_omcrev.jpg" alt="Smart Devices" />
                  <img className="project-img-hover" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/NOD_Marketing_Agency_Bold_Re-Branding_Identity_2026___Navigate_to_Destination_ieykpo.jpg" alt="Smart Devices Hover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-gray-400">Branding & Product</span>
                  <span className="text-xl md:text-3xl text-[#b3b9b4]">NOD Agency</span>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-start pl-2 md:pl-24">
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[500px]">
                <div className="project-card w-full aspect-video shadow-2xl">
                  <img className="project-img-base" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/download_4_yrdwpi.jpg" alt="Mihailove" />
                  <img className="project-img-hover" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/Orchard_Studio_a_clean_Framer_template_for_creative_studios__prdz9c.jpg" alt="Mihailove Hover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-gray-400">Web Design</span>
                  <span className="text-xl md:text-3xl text-[#b3b9b4]">Mihailove</span>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end pr-2 md:pr-24">
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[500px]">
                <div className="project-card w-full aspect-video shadow-2xl">
                  <img className="project-img-base" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331582/NOD_Marketing_Agency_Bold_Re-Branding_Identity_2026___Navigate_to_Destination_ieykpo.jpg" alt="NOD Identity" />
                  <img className="project-img-hover" src="https://res.cloudinary.com/djpfw1goz/image/upload/v1792331581/AP-Mockups_Apple_Devices_omcrev.jpg" alt="NOD Identity Hover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm text-gray-400">Identity & UI</span>
                  <span className="text-xl md:text-3xl text-[#b3b9b4]">NOD 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOURTH SECTION - PROJECT LIST WITH FLOATING HOVER IMAGE */}
        <section
          ref={fourthSectionRef}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mousePos.current = {
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            };
          }}
          className="bg-[#1c1c1c] w-full max-w-[1700px] min-h-[70vh] md:min-h-screen rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-24 relative overflow-hidden flex flex-col justify-center text-[#b3b9b4] mt-4 md:mt-8"
        >
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800" preserveAspectRatio="none">
              <path d="M 500 -200 C -200 -100, -200 400, 500 500 C 1200 600, 1200 1100, 500 1200" fill="none" stroke="#1d4ed8" strokeWidth="50" />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-[1300px] mx-auto flex flex-col">
            {projectsList.map((proj, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredProject(proj)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative flex justify-between items-center py-5 md:py-12 border-b border-white/5 last:border-0 cursor-pointer"
              >
                <div className="flex-1 flex items-center gap-3 md:gap-4 transition-all duration-300 group-hover:translate-x-2 md:group-hover:translate-x-4">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium text-white/40 group-hover:text-white transition-colors duration-300 tracking-tight">
                    {proj.name}
                  </h3>
                  {hoveredProject?.name === proj.name && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white animate-[spinSlow_4s_linear_infinite] md:w-6 md:h-6">
                      <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>

                <div className="hidden md:flex items-center gap-12 w-64 justify-between shrink-0">
                  <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${hoveredProject?.name === proj.name ? 'text-[#c3123e]' : 'text-gray-500'}`}>
                    {proj.type}
                  </span>
                  <span className={`text-sm md:text-base font-medium transition-colors duration-300 ${hoveredProject?.name === proj.name ? 'text-[#c3123e]' : 'text-gray-500'}`}>
                    {proj.year}
                  </span>
                </div>

                {/* Mobile type/year row */}
                <div className="flex md:hidden flex-col items-end shrink-0 gap-0.5">
                  <span className={`text-[10px] font-medium ${hoveredProject?.name === proj.name ? 'text-[#c3123e]' : 'text-gray-500'}`}>{proj.type}</span>
                  <span className={`text-[10px] font-medium ${hoveredProject?.name === proj.name ? 'text-[#c3123e]' : 'text-gray-500'}`}>{proj.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={hoverImageRef}
            className={`pointer-events-none absolute z-50 w-[300px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-opacity duration-300 hidden md:block ${
              hoveredProject ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: 0,
              top: 0,
              transform: 'translate(0px, 0px) translate(-50%, -50%)',
            }}
          >
             {projectsList.map((proj, idx) => (
                <img
                  key={idx}
                  src={proj.image}
                  alt={proj.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProject?.name === proj.name ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
                  }`}
                />
             ))}
             <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl pointer-events-none z-20 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"></div>
          </div>

        </section>

        {/* FIFTH SECTION - SERVICES */}
        <section
          id="services-section"
          className="bg-[#111] w-full max-w-[1700px] rounded-[1.5rem] md:rounded-[2rem] relative flex flex-col py-12 md:py-24 px-3 md:px-12 text-[#b3b9b4]"
        >
          <h2 className="text-center text-[14vw] md:text-[10vw] leading-[0.85] tracking-tighter font-medium text-[#e4e4e4] z-10 mb-6 md:mb-16">
            SERVICES
          </h2>

          <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-12 relative z-10 flex-wrap px-2">
            <button
              onClick={() => setActiveServiceTab('main')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-base font-medium transition-all duration-300 ${
                activeServiceTab === 'main'
                  ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              Core Services
            </button>
            <button
              onClick={() => setActiveServiceTab('software')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-base font-medium transition-all duration-300 ${
                activeServiceTab === 'software'
                  ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              Software Dev
            </button>
            <button
              onClick={() => setActiveServiceTab('it')}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-base font-medium transition-all duration-300 ${
                activeServiceTab === 'it'
                  ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              IT Services
            </button>
          </div>

          {activeServiceTab === 'main' && (
            <div className="relative w-full max-w-[1000px] mx-auto scale-[0.62] sm:scale-75 md:scale-100 origin-top -mb-[180px] sm:-mb-[110px] md:mb-0" style={{ height: '560px' }}>
              <CardSwap
                width={820}
                height={460}
                cardDistance={60}
                verticalDistance={70}
                depth={90}
                skewAmount={6}
                visibleCards={3}
                cardRadius={24}
                delay={4000}
                speed={1}
                bounce={0.35}
                parallax={0.5}
                hoverSpread={0.12}
                dim={0.5}
                autoplay
                pauseOnHover
                draggable
              >
                {servicesList.map((service, idx) => (
                  <Card
                    key={idx}
                    style={{ background: `linear-gradient(180deg, ${service.bg} 0%, ${service.bg} 100%)` }}
                  >
                    <div className="relative flex h-full w-full flex-col justify-between p-6 md:p-10">
                      <img
                        src={service.image}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.10]"
                      />
                      <div className="pointer-events-none absolute right-6 top-6 opacity-[0.10] md:right-10 md:top-10">
                        <svg width="180" height="130" viewBox="0 0 200 150" fill="none">
                          <rect x="80" y="10" width="40" height="30" stroke="white" strokeWidth="1.5" />
                          <rect x="120" y="60" width="40" height="30" stroke="white" strokeWidth="1.5" />
                          <rect x="60" y="90" width="40" height="30" stroke="white" strokeWidth="1.5" />
                          <rect x="140" y="110" width="40" height="30" stroke="white" strokeWidth="1.5" />
                          <line x1="100" y1="40" x2="100" y2="65" stroke="white" strokeWidth="1.5" />
                          <line x1="100" y1="65" x2="120" y2="65" stroke="white" strokeWidth="1.5" />
                          <line x1="100" y1="65" x2="80" y2="95" stroke="white" strokeWidth="1.5" />
                          <line x1="120" y1="90" x2="120" y2="110" stroke="white" strokeWidth="1.5" />
                          <line x1="120" y1="110" x2="140" y2="110" stroke="white" strokeWidth="1.5" />
                          <circle cx="100" cy="65" r="3" fill="white" />
                          <circle cx="120" cy="90" r="3" fill="white" />
                        </svg>
                      </div>
                      <div className="relative z-10">
                        <span className="mb-3 md:mb-5 block font-mono text-xs md:text-sm tracking-[0.2em] text-[#c3123e]">
                          {service.num}
                        </span>
                        <h3 className="mb-3 md:mb-4 max-w-[85%] md:max-w-[80%] text-xl md:text-4xl font-medium leading-[1.15] md:leading-[1.1] tracking-tight text-white">
                          {service.title}
                        </h3>
                        <p className="max-w-[90%] md:max-w-[85%] text-xs md:text-base font-light leading-relaxed text-white/55">
                          {service.desc}
                        </p>
                      </div>
                      <div className="relative z-10 mt-3">
                        <button className="rounded-full bg-[#2a2a2a] px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium text-white transition-colors hover:bg-[#333]">
                          more information
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          )}

          {activeServiceTab === 'software' && (
            <div className="w-full max-w-[1300px] mx-auto animate-fade-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                {softwareServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="group bg-[#161616] border border-white/5 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-blue-700/40 transition-all duration-300 hover:bg-[#1a1a1a]"
                    style={{ animationDelay: `${idx * 60}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="text-base md:text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-sm md:text-base text-white/50 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeServiceTab === 'it' && (
            <div className="w-full max-w-[1300px] mx-auto animate-fade-up">
              <div className="mb-8 md:mb-12">
                <h3 className="text-lg md:text-2xl font-medium text-white mb-4 md:mb-6">
                  Main Categories of IT Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {mainCategories.map((cat, idx) => (
                    <div
                      key={idx}
                      className="bg-[#161616] border border-white/5 rounded-xl p-4 md:p-5 hover:border-blue-700/30 transition-all duration-300"
                    >
                      <span className="text-2xl mb-2 md:mb-3 block">{cat.icon}</span>
                      <h4 className="text-sm md:text-base font-medium text-white mb-2">{cat.title}</h4>
                      <p className="text-xs md:text-sm text-white/45 leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg md:text-2xl font-medium text-white mb-4 md:mb-6">
                  How IT Services Are Delivered
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {deliveryModels.map((model, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-[#161616] to-[#1a1a1a] border border-white/5 rounded-xl p-4 md:p-6 hover:border-blue-700/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 md:gap-4">
                        <span className="text-2xl md:text-3xl shrink-0">{model.icon}</span>
                        <div>
                          <h4 className="text-base md:text-lg font-medium text-white mb-2">{model.title}</h4>
                          <p className="text-xs md:text-sm text-white/45 leading-relaxed">{model.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SIXTH SECTION - CONTACT FORM */}
        <section
          id="contacts-section"
          className="bg-blue-700 w-full max-w-[1700px] min-h-[70vh] md:min-h-[80vh] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-24 relative overflow-hidden flex flex-col items-center justify-center text-[#E2E8E3] mt-4 md:mt-8"
        >
          <div className="w-full max-w-[1200px] relative min-h-[380px] md:min-h-[300px] flex items-center justify-center">
            <div className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 transition-all duration-500 ${contactStep === 1 ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'}`}>
              <span className="text-2xl md:text-6xl font-medium tracking-tight shrink-0 z-20">I need</span>

              <div className="relative flex items-center justify-center h-[220px] sm:h-[240px] md:h-[260px] w-[280px] sm:w-[320px] md:w-[450px]">
                <button
                  onClick={() => setSelectedService('web design')}
                  className={`absolute top-[10px] px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 text-base md:text-2xl font-medium transition-all duration-300 ${selectedService === 'web design' ? 'bg-[#1c1c1c] text-white border-transparent scale-105 z-10 shadow-2xl' : 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white'}`}
                >
                  web design
                </button>

                <button
                  onClick={() => setSelectedService('development')}
                  className={`absolute top-[68px] md:top-[80px] left-1/2 -translate-x-1/2 px-10 md:px-20 py-4 md:py-6 rounded-full border border-white/20 text-xl md:text-4xl font-medium transition-all duration-300 ${selectedService === 'development' ? 'bg-[#1c1c1c] text-white border-transparent scale-105 z-20 shadow-2xl' : 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white z-10'}`}
                >
                  development
                </button>

                <button
                  onClick={() => setSelectedService('branding')}
                  className={`absolute bottom-[10px] left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-white/20 text-base md:text-2xl font-medium transition-all duration-300 ${selectedService === 'branding' ? 'bg-[#1c1c1c] text-white border-transparent scale-105 z-10 shadow-2xl' : 'bg-transparent text-white/90 hover:bg-white/10 hover:text-white'}`}
                >
                  branding
                </button>
              </div>

              <button
                onClick={() => setContactStep(2)}
                className="flex items-center justify-center gap-2 md:gap-3 bg-[#1c1c1c] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-base md:text-3xl font-medium hover:scale-105 transition-transform shrink-0 z-20 md:ml-8"
              >
                next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${contactStep === 2 ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-8'}`}>
              <div className="flex items-center gap-2 md:gap-3 mb-5 md:mb-8 flex-wrap justify-center">
                <span className="text-xl md:text-4xl font-medium">I need</span>
                <button
                  onClick={() => setContactStep(1)}
                  className="bg-[#1c1c1c] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-xl font-medium hover:opacity-80 transition-opacity"
                >
                  {selectedService}
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full max-w-[900px]">
                <input
                  type="text"
                  placeholder="your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border border-black/20 rounded-full px-5 md:px-6 py-3 md:py-5 text-lg md:text-3xl font-medium text-white placeholder-white/40 focus:outline-none focus:border-[#1c1c1c] transition-colors"
                />
                <input
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border border-black/20 rounded-full px-5 md:px-6 py-3 md:py-5 text-lg md:text-3xl font-medium text-white placeholder-white/40 focus:outline-none focus:border-[#1c1c1c] transition-colors"
                />

                <button
                  onClick={() => {
                    console.log("Submitting:", { service: selectedService, ...formData });
                  }}
                  className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 md:gap-3 bg-[#1c1c1c] text-white px-6 md:px-8 py-3 md:py-5 rounded-full text-lg md:text-3xl font-medium hover:scale-105 transition-transform"
                >
                  submit
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full max-w-[1700px] bg-[#1c1c1c] rounded-t-[1.5rem] md:rounded-t-[2rem] mt-4 md:mt-8 px-5 py-10 md:px-16 md:py-24 text-[#b3b9b4] flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row justify-between w-full gap-8 md:gap-8">
            <div className="w-full md:w-1/3">
              <div className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                StackBergAI
              </div>
            </div>

            <div className="w-full md:w-1/3 flex gap-12 md:gap-32">
              <div className="flex flex-col gap-3 md:gap-4">
                <button onClick={() => scrollToSection('top')} className="text-base md:text-lg text-left hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-base md:text-lg text-left hover:text-white transition-colors">Services</button>
                <button onClick={() => scrollToSection('projects')} className="text-base md:text-lg text-left hover:text-white transition-colors">Projects</button>
                <button onClick={() => scrollToSection('contacts')} className="text-base md:text-lg text-left hover:text-white transition-colors">Contacts</button>
              </div>
              
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-5 md:gap-8 md:items-end text-left md:text-right">
              <div>
                <span className="block text-xs md:text-sm text-gray-500 mb-1">Contact us</span>
                <a href="mailto:support@StackBergAIcom" className="text-base md:text-lg text-white hover:underline break-all">support@StackBergAIcom</a>
              </div>
              <div>
                <span className="block text-xs md:text-sm text-gray-500 mb-1">Based in</span>
                <span className="text-base md:text-lg text-white">Bengaluru</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 md:mt-24 pt-6 md:pt-8 border-t border-white/10 gap-4 md:gap-0">
            <span className="text-xs md:text-sm text-gray-500">© StackBergAI 2026. All rights reserved.</span>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-white transition-colors">COOKIES</a>
              <a href="#" className="hover:text-white transition-colors">TERMS</a>
              <a href="#" className="hover:text-white transition-colors">COOKIE SETTINGS</a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-xs md:text-sm text-white hover:text-blue-400 transition-colors"
            >
              Back to top
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="md:w-4 md:h-4">
                <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </footer>

      </div>
    </>
  );
}

export default App;