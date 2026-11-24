import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, ArrowLeft, BadgeCheck, Building2, CheckCircle2, Cctv, Cloud, Code2, Cpu,
  Factory, GraduationCap, HeartPulse, Laptop, Mail, MapPin, Menu, MonitorSmartphone, Network,
  Phone, Rocket, ShieldCheck, ShoppingBag, Sparkles, Star, Store, Users, Wifi, X, Zap, Plus, Minus,
  Send, ChevronRight, ChevronDown, Server, Headset, HardDrive,Quote, Search, Briefcase, Award, Handshake,
  BookOpen, FileText, Download, Landmark, Truck, Stethoscope, CreditCard, MessageCircle, Clock,
  Map as MapIcon, ArrowUp, FileDown, CalendarDays, User, Wrench, HandCoins, Globe,Settings,TrendingDown,Plane ,Bot ,Headphones ,Package ,CircleDollarSign ,ShoppingCart ,MonitorPlay ,ChevronLeft ,
} from "lucide-react";
import CardSwap from "./component/card"


// ─────────────────────────────────────────────────────────────
// ASSETS
// ─────────────────────────────────────────────────────────────
import laptopsImg from "./assets/42542f60e025fc6c-image_20261122_211759.webp";
import networkingImg from "./assets/52be248096e2ed3b-image_20261122_182349.webp";
import cybersecurityImg from "./assets/a55cd635e7d9c13e-image_20261122_211814.webp";
import cloudImg from "./assets/3ef046908ae2d7b4-image_20261122_182343_2.webp";
import softwareImg from "./assets/4c43f535b7a9288a-image_20261122_182343_1.webp";
import storageImg from "./assets/0ab75f805e94eca6-image_20261122_211815.webp";
import cctvImg from "./assets/d8de3c69ea631b92-image_20261122_211757.webp";
import serversImg from "./assets/c68ab2400b2cd06f-image_20261122_211751.webp";
import educationImg from "./assets/6dbe469c8de13766-image_20261122_191428.webp";
import healthcareImg from "./assets/91e5fa4a9d0d943a-image_20261122_191427.webp";
import hardwareImg from "./assets/7a51b6ad33a244a4-image_20261122_182342.webp";
import officeImg from "./assets/7c671352d968e337-image_20261122_211750.webp";
import networkingInstallingImg from "./assets/2a9a55683b928f49-image_20261122_214249.webp";
import cctvInstallingImg from "./assets/cef54e5fbc9d0df0-image_20261122_214248.webp";
import serverWorkingImg from "./assets/d2662263bf188a08-image_20261122_214248_1.webp";
import warehouseWorkingImg from "./assets/a1c4c2e3ca43007b-image_20261122_214248_2.webp";
import educationWorkingImg from "./assets/99386f5be98cc137-image_20261122_214249_1.webp";
import retailWorkingImg from "./assets/4b70eb70823b7862-image_20261122_214249_2.webp";

// ─────────────────────────────────────────────────────────────
// CONSTANTS & DATA
// ─────────────────────────────────────────────────────────────
const PRODUCT_HREF = "https://colorhunt.co/palette/e3f2fd90caf92196f30d47a1";
const PRODUCT_NAME = "Color Palette: #E3F2FD #90CAF9 #2196F3 #0D47A1 - Color Hunt";

async function callApi(action, args) {
  const res = await fetch("actions", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ action, args }) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json?.error) throw new Error(json?.error || `Request failed (${res.status})`);
  return json?.data;
}

const serviceOptions = [
  "Request a Quote — IT Infrastructure", "IT Consulting", "Infrastructure Deployment", "Network Design & Installation",
  "Server Installation", "Cloud Migration", "Security Assessment", "AMC Support", "Managed IT Services", "Helpdesk Support",
  "Hardware — Laptops", "Hardware — Desktops & Workstations", "Hardware — Servers", "Hardware — Monitors & Accessories", "Hardware — Printers & Scanners",
  "Networking — Routers", "Networking — Switches", "Networking — Wi-Fi Solutions", "Networking — Structured Cabling", "Networking — Network Accessories",
  "Cybersecurity — Firewalls", "Cybersecurity — Antivirus & Endpoint Security", "Cybersecurity — MFA & Identity Management", "Cybersecurity — Email Security",
  "Storage & Backup — NAS", "Storage & Backup — SAN", "Storage & Backup — Backup Solutions", "Storage & Backup — Disaster Recovery",
  "Software — Microsoft 365", "Software — Windows Licensing", "Software — ERP Solutions", "Software — CRM Solutions", "Software — Business Applications",
  "Cloud Solutions — Microsoft Azure", "Cloud Solutions — AWS Services", "Cloud Solutions — Google Cloud", "Cloud Solutions — Cloud Backup",
  "Power & Infrastructure — UPS Systems", "Power & Infrastructure — Server Racks", "Power & Infrastructure — PDUs", "Power & Infrastructure — Data Center Solutions",
  "Solutions — Small Business Solutions", "Solutions — Enterprise Infrastructure", "Solutions — Network Modernization", "Solutions — Modern Workplace",
  "Solutions — Hybrid Cloud", "Solutions — Cybersecurity Solutions", "Solutions — Backup & Disaster Recovery", "Solutions — CCTV & Surveillance", "Solutions — Access Control Systems",
  "Partner With Us", "Something else",
];

const industryOptions = ["Education", "Healthcare", "Manufacturing", "Retail", "Finance", "Government", "IT", "Logistics", "Other"];
const budgetOptions = ["Under ₹50,000", "₹50,000 – ₹2 Lakh", "₹2 Lakh – ₹10 Lakh", "₹10 Lakh – ₹50 Lakh", "₹50 Lakh+", "Not sure yet — advise me"];

const NAV = [
  { id: "home", label: "Home", target: "home" },
  { id: "products", label: "Products", target: "products", groups: [
    { heading: "Hardware", items: [
      { label: "Laptops", target: "products", service: "Hardware — Laptops" }, { label: "Desktops & Workstations", target: "products", service: "Hardware — Desktops & Workstations" },
      { label: "Servers", target: "products", service: "Hardware — Servers" }, { label: "Monitors & Accessories", target: "products", service: "Hardware — Monitors & Accessories" },
      { label: "Printers & Scanners", target: "products", service: "Hardware — Printers & Scanners" }]},
    { heading: "Networking", items: [
      { label: "Routers", target: "products", service: "Networking — Routers" }, { label: "Switches", target: "products", service: "Networking — Switches" },
      { label: "Wi-Fi Solutions", target: "products", service: "Networking — Wi-Fi Solutions" }, { label: "Structured Cabling", target: "products", service: "Networking — Structured Cabling" },
      { label: "Network Accessories", target: "products", service: "Networking — Network Accessories" }]},
    { heading: "Cybersecurity", items: [
      { label: "Firewalls", target: "products", service: "Cybersecurity — Firewalls" }, { label: "Antivirus & Endpoint Security", target: "products", service: "Cybersecurity — Antivirus & Endpoint Security" },
      { label: "MFA & Identity Management", target: "products", service: "Cybersecurity — MFA & Identity Management" }, { label: "Email Security", target: "products", service: "Cybersecurity — Email Security" }]},
    { heading: "Storage & Backup", items: [
      { label: "NAS Storage", target: "products", service: "Storage & Backup — NAS" }, { label: "SAN Storage", target: "products", service: "Storage & Backup — SAN" },
      { label: "Backup Solutions", target: "products", service: "Storage & Backup — Backup Solutions" }, { label: "Disaster Recovery", target: "products", service: "Storage & Backup — Disaster Recovery" }]},
    { heading: "Software", items: [
      { label: "Microsoft 365", target: "products", service: "Software — Microsoft 365" }, { label: "Windows Licensing", target: "products", service: "Software — Windows Licensing" },
      { label: "ERP Solutions", target: "products", service: "Software — ERP Solutions" }, { label: "CRM Solutions", target: "products", service: "Software — CRM Solutions" },
      { label: "Business Applications", target: "products", service: "Software — Business Applications" }]},
    { heading: "Cloud Solutions", items: [
      { label: "Microsoft Azure", target: "products", service: "Cloud Solutions — Microsoft Azure" }, { label: "AWS Services", target: "products", service: "Cloud Solutions — AWS Services" },
      { label: "Google Cloud", target: "products", service: "Cloud Solutions — Google Cloud" }, { label: "Cloud Backup", target: "products", service: "Cloud Solutions — Cloud Backup" }]},
    { heading: "Power & Infrastructure", items: [
      { label: "UPS Systems", target: "products", service: "Power & Infrastructure — UPS Systems" }, { label: "Server Racks", target: "products", service: "Power & Infrastructure — Server Racks" },
      { label: "PDUs", target: "products", service: "Power & Infrastructure — PDUs" }, { label: "Data Center Solutions", target: "products", service: "Power & Infrastructure — Data Center Solutions" }]},
  ]},
  { id: "solutions", label: "Solutions", target: "solutions", items: [
    { label: "IT Consulting", target: "solutions", service: "IT Consulting", solutionId: "it-consulting" },
    { label: "Infrastructure Deployment", target: "solutions", service: "Infrastructure Deployment", solutionId: "infrastructure-deployment" },
    { label: "Network Design & Installation", target: "solutions", service: "Network Design & Installation", solutionId: "network-design" },
    { label: "Server Installation", target: "solutions", service: "Server Installation", solutionId: "server-installation" },
    { label: "Cloud Migration", target: "solutions", service: "Cloud Migration", solutionId: "cloud-migration" },
    { label: "Security Assessment", target: "solutions", service: "Security Assessment", solutionId: "security-assessment" },
    { label: "AMC Support", target: "solutions", service: "AMC Support", solutionId: "amc-support" },
    { label: "Managed IT Services", target: "solutions", service: "Managed IT Services", solutionId: "managed-it" },
    { label: "Helpdesk Support", target: "solutions", service: "Helpdesk Support", solutionId: "helpdesk-support" },
  ]},
  { id: "industries", label: "Industries", target: "industries", items: [
    { label: "Education", target: "industries" }, { label: "Healthcare", target: "industries" }, { label: "Manufacturing", target: "industries" },
    { label: "Retail", target: "industries" }, { label: "Financial Services", target: "industries" }, { label: "Government", target: "industries" },
    { label: "IT", target: "industries" }, { label: "Logistics", target: "industries" },
  ]},
  { id: "brands", label: "Brands", target: "brands", items: [
    { label: "Microsoft", target: "brands" }, { label: "Dell", target: "brands" }, { label: "HP", target: "brands" },
    { label: "Lenovo", target: "brands" }, { label: "Cisco", target: "brands" }, { label: "Fortinet", target: "brands" },
    { label: "Sophos", target: "brands" }, { label: "HPE", target: "brands" }, { label: "VMware", target: "brands" },
    { label: "Veeam", target: "brands" }, { label: "Zoho", target: "brands" }, { label: "Canon", target: "brands" }, { label: "Epson", target: "brands" },
  ]},
  { id: "contact", label: "Contact Us", target: "contact", items: [
    { label: "Request a Quote", target: "contact", enquiry: "Request a Quote", contactTab: "quote" }, { label: "Support Request", target: "contact", enquiry: "Support Request", contactTab: "support" },
    { label: "Partner With Us", target: "contact", enquiry: "Partner With Us", contactTab: "partner" }, { label: "Contact Information", target: "contact" },
  ]},
];

const productCards = [
  { title: "Hardware Solutions", tag: "Reliable computing for modern businesses", desc: "Genuine laptops, desktops, servers and peripherals — supplied, installed and covered by warranty support, ready for your team from day one.", image: hardwareImg, icon: Cpu, items: ["Laptops", "Desktops & Workstations", "Servers", "Monitors & Accessories", "Printers & Scanners"], catalogId: "hardware", service: "Hardware — Laptops" },
  { title: "Networking Solutions", tag: "Secure, high-performance networks", desc: "Fast, stable connectivity across every room, floor and branch — designed, cabled and tested for real user density.", image: networkingImg, icon: Network, items: ["Routers", "Switches", "Wi-Fi Solutions", "Structured Cabling", "Network Accessories"], catalogId: "networking", service: "Networking — Routers" },
  { title: "Cybersecurity Solutions", tag: "Layered protection against modern threats", desc: "Protect devices, email, accounts and access with firewalls, endpoint protection, verified logins and email security.", image: cybersecurityImg, icon: ShieldCheck, items: ["Firewalls", "Antivirus & Endpoint Security", "MFA & Identity Management", "Email Security"], catalogId: "cybersecurity", service: "Cybersecurity — Firewalls" },
  { title: "Storage & Backup Solutions", tag: "Protect your critical business data", desc: "Keep every file safe, recoverable and easy to reach — on-site, in the cloud, or both, with tested recovery.", image: storageImg, icon: HardDrive, items: ["NAS Storage", "SAN Storage", "Backup Solutions", "Disaster Recovery"], catalogId: "storage", service: "Storage & Backup — NAS" },
  { title: "Software Solutions", tag: "Licensed software for productivity", desc: "Genuine, licensed software for everyday work and business operations — set up, migrated and kept up to date.", image: softwareImg, icon: Code2, items: ["Microsoft 365", "Windows Licensing", "ERP Solutions", "CRM Solutions", "Business Applications"], catalogId: "software", service: "Software — Microsoft 365" },
  { title: "Cloud Solutions", tag: "Migrate, backup and scale", desc: "Scale without buying more hardware — platforms, storage, backup and managed cloud care on Azure, AWS and Google Cloud.", image: cloudImg, icon: Cloud, items: ["Microsoft Azure", "AWS Services", "Google Cloud", "Cloud Backup"], catalogId: "cloud", service: "Cloud Solutions — Microsoft Azure" },
  { title: "Power & Infrastructure Solutions", tag: "Power that never stops", desc: "No more lost work from a power cut — protection, distribution and monitoring for every rack, room and data centre.", image: serversImg, icon: Zap, items: ["UPS Systems", "Server Racks", "PDUs", "Data Center Solutions"], catalogId: "power", service: "Power & Infrastructure — UPS Systems" },
];

// ─────────────────────────────────────────────────────────────
// HARDWARE CARDS — Each card has 4 products, each with its own image
// ─────────────────────────────────────────────────────────────

const card1 = {
  id: "networking-devices",
  title: "Networking Devices",
  tag: "Enterprise Connectivity",
  icon: Wifi,
  service: "Networking — Routers",
  span: "md:col-span-2 md:row-span-2",
  items: [
    {
      name: "Pro Series Network Cameras",
      desc: "Enterprise-grade Network Cameras for high-throughput",
      image: "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/home/campaign-recommendation/hikvision-pro-series-network-camera.jpg",
    },
    {
      name: "Switches",
      desc: "Layer 2/3 managed switches with PoE+ and stacking support.",
      image: "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/products/transmission-and-display-products/network-switches/Hikvision-network-switches-banner-pc.png",
    },
    {
      name: "Access Points",
      desc: "Wi-Fi 6 APs built for dense offices and high user counts.",
      image: "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/solution/smb-solution/quick-pass/People-and-Vehicle-Access-Control-banner-mo.jpg",
    },
    {
      name: "Structured Cabling",
      desc: "Cat6A and fiber cabling — labelled, tested and documented.",
      image: "https://www.hikvision.com/content/dam/hikvision/en/marketing/image/home/campaign-recommendation/hikvision-SolarVujpg.jpg",
    },
  ],
};

const card2 = {
  id: "drones",
  title: "Drones",
  tag: "Aerial Surveying",
  icon: Plane,
  service: "Hardware — Drones",
  span: "md:col-span-1 md:row-span-1",
  items: [
    {
      name: "Survey Drone",
      desc: "3D mapping and volumetric measurement from the air.",
      image: "https://i.pinimg.com/1200x/1b/a8/75/1ba875f0ed61c6db85beb1f984a4c201.jpg",
    },
    {
      name: "Security Drone",
      desc: "Scheduled perimeter patrol with live video feed.",
      image: "https://i.pinimg.com/1200x/86/dd/b7/86ddb7bfde664a8451af59ec636f0a19.jpg",
    },
    {
      name: "Delivery Drone",
      desc: "Precision payload drop with auto-return failsafe.",
      image: "https://i.pinimg.com/1200x/61/1d/f8/611df811097d6c4d6a499c51812e78aa.jpg",
    },
    {
      name: "FPV Drone",
      desc: "4K gimbal live stream for inspection and events.",
      image: "https://i.pinimg.com/1200x/db/77/e4/db77e4a9bacf676d8dbe76536371158d.jpg",
    },
  ],
};

const card3 = {
  id: "robotics-rovers",
  title: "Robotics & Rovers",
  tag: "Automation",
  icon: Bot,
  service: "Hardware — Robotics",
  span: "md:col-span-1 md:row-span-1",
  items: [
    {
      name: "Warehouse AMR",
      desc: "Autonomous mobile robots for material movement.",
      image: "https://i.pinimg.com/736x/8b/35/2e/8b352ecb3d81d27127a854b1d92e084f.jpg",
    },
    {
      name: "Pick & Place Arm",
      desc: "Robotic arm with vision-guided pick and place.",
      image: "https://i.pinimg.com/1200x/56/db/1a/56db1af74db7e90e4a351b263c906b6b.jpg",
    },
    {
      name: "Patrol Rover",
      desc: "Scheduled patrol routes with obstacle detection.",
      image: "https://i.pinimg.com/1200x/a0/28/5d/a0285d0acf88035495c0b0b6e2a135f5.jpg",
    },
    {
      name: "Fleet Controller",
      desc: "Central fleet control with real-time status.",
      image: "https://i.pinimg.com/1200x/af/a2/fb/afa2fb1311e5738042c7d0f0e277dd55.jpg",
    },
  ],
};

const card4 = {
  id: "iot-embedded",
  title: "IoT & Embedded Systems",
  tag: "Intelligent Connected Devices",
  icon: Cpu,
  service: "IoT & Embedded Systems",
  span: "md:col-span-2 md:row-span-1",
  items: [
    {
      name: "IoT Sensors",
      desc: "Temperature, motion, humidity and energy sensors.",
      image: "https://i.pinimg.com/236x/59/9e/f5/599ef5a03d1650a2372b62731dbb21b3.jpg",
    },
    {
      name: "Edge Controllers",
      desc: "Edge controllers with local logic and cloud sync.",
      image: "https://i.pinimg.com/736x/7c/a3/4d/7ca34d1c00f7a98b254c1da930a333ec.jpg",
    },
    {
      name: "Monitoring Gateway",
      desc: "Live dashboards with alerts and thresholds.",
      image: "https://i.pinimg.com/1200x/4f/40/8e/4f408eb5e6c1d1a5ccacce1e11b57dfb.jpg",
    },
    {
      name: "OTA Module",
      desc: "Over-the-air firmware updates at scale.",
      image: "https://i.pinimg.com/736x/a7/73/4d/a7734de60e9bcec8e6f878e5fa3644d5.jpg",
    },
  ],
};

const hardwareCards = [card1, card2, card3, card4];

const softwareCards = [
  { 
    title: "Ticketing System", 
    tag: "IT Support", 
    desc: "Streamline helpdesk operations with intelligent ticket routing and SLA tracking.", 
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop", 
    icon: Headphones, 
    service: "Software — Ticketing",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Inventory Management", 
    tag: "Logistics", 
    desc: "Real-time stock tracking, barcode scanning, and predictive restocking algorithms.", 
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop", 
    icon: Package, 
    service: "Software — Inventory",
    span: "md:col-span-1 md:row-span-1"
  },
 
  { 
    title: "Sales & CRM", 
    tag: "Growth", 
    desc: "Track leads, manage pipelines, and close deals faster with automated follow-ups.", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop", 
    icon: Users, 
    service: "Software — CRM",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "POS Billing", 
    tag: "Retail", 
    desc: "Lightning-fast point of sale system with offline mode and multi-store sync.", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop", 
    icon: ShoppingCart, 
    service: "Software — POS",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "HRMS", 
    tag: "Human Resources", 
    desc: "Manage payroll, attendance, and employee onboarding seamlessly.", 
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop", 
    icon: Briefcase, 
    service: "Software — HRMS",
    span: "md:col-span-1 md:row-span-1"
  },
  { 
    title: "Project Management", 
    tag: "Productivity", 
    desc: "Kanban boards, Gantt charts, and team collaboration tools to ship faster.", 
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop", 
    icon: MonitorPlay, 
    service: "Software — Projects",
    span: "md:col-span-2 md:row-span-1" // Wide featured card
  }
];


const solutionDetails = [
  { id: "it-consulting", title: "IT Consulting", tag: "Advice before you spend", icon: Briefcase, image: officeImg, service: "IT Consulting", whatWeDo: ["Assessment of your current setup, team and goals", "A clear roadmap with priorities and realistic timelines", "Budget planning so you spend on what matters first", "Vendor-neutral advice across brands and platforms"], example: "Example: A growing office got a phased IT plan — what to fix now, what to buy next, and what to skip.", products: ["Assessment", "Roadmap", "Budget Planning", "Vendor Advice"], desc: "Honest, vendor-neutral advice — a clear plan, budget and next steps before you spend." },
  { id: "infrastructure-deployment", title: "Infrastructure Deployment", tag: "Survey to tested handover", icon: Server, image: serversImg, service: "Infrastructure Deployment", whatWeDo: ["Site survey of rooms, cabling paths, power and user counts", "Procurement of genuine hardware with GST billing", "Installation, cabling, power and configuration", "Testing of every point, device and backup before handover"], example: "Example: A new office handed over fully tested — hardware, cabling, power and setup in one coordinated project.", products: ["Site Survey", "Procurement", "Installation", "Testing"], desc: "From site survey to tested handover — hardware, cabling, power and setup in one project." },
  { id: "network-design", title: "Network Design & Installation", tag: "Wired + wireless", icon: Network, image: networkingImg, service: "Network Design & Installation", whatWeDo: ["LAN / WAN design for your rooms, floors and branches", "Structured cabling, neatly labelled and documented", "Wi-Fi planned for real user density", "Firewall setup and secure network configuration"], example: "Example: A campus network rebuilt with structured cabling, planned Wi-Fi and a configured firewall.", products: ["LAN/WAN Design", "Cabling", "Wi-Fi", "Firewall Setup"], desc: "Fast, secure networks designed for your rooms, floors and branches — wired and wireless." },
  { id: "server-installation", title: "Server Installation", tag: "Ready for your apps", icon: Server, image: serversImg, service: "Server Installation", whatWeDo: ["Rack setup with clean cabling and power", "Server setup, configured for your apps and users", "Virtualization to get more from your hardware", "Backup configuration so data stays recoverable"], example: "Example: A company server installed, virtualized and backed up — ready for its apps and data from day one.", products: ["Rack", "Server Setup", "Virtualization", "Backup Config"], desc: "Servers installed, virtualized and backed up — ready for your apps and data." },
  { id: "cloud-migration", title: "Cloud Migration", tag: "Move without losing a day", icon: Cloud, image: cloudImg, service: "Cloud Migration", whatWeDo: ["Assessment of what should move — and what should stay", "Migration to Azure / AWS / M365, staged to avoid downtime", "M365 setup — email, files, Teams and sharing", "Training so your team works confidently in the cloud"], example: "Example: A team moved email, files and apps to the cloud with no lost working day.", products: ["Assessment", "Migration to Azure/AWS", "M365", "Training"], desc: "Move email, files and apps to Azure / AWS / M365 without losing a day of work." },
  { id: "security-assessment", title: "Security Assessment", tag: "Find gaps first", icon: ShieldCheck, image: cybersecurityImg, service: "Security Assessment", whatWeDo: ["Vulnerability scan across devices, network and accounts", "Audit of firewalls, logins and access", "Firewall audit with hardening recommendations", "A clear report with priorities and fixes"], example: "Example: A business found its gaps before attackers did — with a clear report, priorities and fixes.", products: ["Vulnerability Scan", "Audit", "Firewall Audit", "Report"], desc: "Find the gaps before attackers do — a clear report, priorities and fixes." },
  { id: "amc-support", title: "AMC Support", tag: "Annual care", icon: Wrench, image: officeImg, service: "AMC Support", whatWeDo: ["Annual contract covering your hardware and network", "Preventive visits that catch small issues early", "Priority support when something breaks", "Spares coordination so repairs are not delayed"], example: "Example: An office under AMC stays healthy — routine visits, priority help and spares when needed.", products: ["Annual Contract", "Preventive Visits", "Priority Support", "Spares"], desc: "Annual care that keeps IT healthy — visits, priority help and spares when you need them." },
  { id: "managed-it", title: "Managed IT Services", tag: "We watch your IT", icon: Headset, image: networkingImg, service: "Managed IT Services", whatWeDo: ["24/7 monitoring of your systems, network and backups", "Helpdesk for your team — one place to ask for help", "Asset management so you know what you own", "Monthly report on health, issues and next steps"], example: "Example: A business with managed IT sees downtime stay rare and planned — with a monthly report to prove it.", products: ["24/7 Monitoring", "Helpdesk", "Asset Management", "Monthly Report"], desc: "We watch, maintain and report on your IT — so downtime stays rare and planned." },
  { id: "helpdesk-support", title: "Helpdesk Support", tag: "Real help, fast", icon: MessageCircle, image: softwareImg, service: "Helpdesk Support", whatWeDo: ["Remote help in 30 minutes for most issues", "On-call visit when a problem needs hands on site", "Phone / WhatsApp support your team can actually reach", "Ticket system so every issue is tracked to closure"], example: "Example: A team issue fixed remotely in minutes — and tracked in a ticket until it was fully resolved.", products: ["Remote in 30 mins", "On-call Visit", "Phone/WhatsApp", "Ticket System"], desc: "Real help, fast — remote first, on-site when needed, with every ticket tracked." },
];

const heroSlides = [
  { title: "Business Laptops", subtitle: "Dell, HP, Lenovo", text: "Genuine laptops with GST + Warranty", image: laptopsImg, cta: "Get Best Price", service: "Hardware — Laptops" },
  { title: "Networking", subtitle: "Routers, Switches, Wi-Fi", text: "Fast, Secure Networks for Office & Campus", image: networkingImg, cta: "Build My Network", service: "Networking — Wi-Fi Solutions" },
  { title: "Cybersecurity", subtitle: "Firewall, EDR, MFA", text: "Bank-Grade Protection", image: cybersecurityImg, cta: "Secure My Business", service: "Cybersecurity — Firewalls" },
  { title: "Cloud", subtitle: "Azure, AWS, Google Cloud", text: "Migrate, Backup, Scale", image: cloudImg, cta: "Migrate to Cloud", service: "Cloud Solutions — Microsoft Azure" },
  { title: "Software", subtitle: "Microsoft 365, ERP, CRM", text: "Licensed Software, Better Productivity", image: softwareImg, cta: "Get Software", service: "Software — Microsoft 365" },
  { title: "Storage & Backup", subtitle: "NAS, SAN, Cloud Backup", text: "Never Lose Your Data", image: storageImg, cta: "Protect My Data", service: "Storage & Backup — NAS" },
  { title: "CCTV & Surveillance", subtitle: "IP Cameras, NVR", text: "Watch Your Office From Anywhere", image: cctvImg, cta: "Install CCTV", service: "Solutions — CCTV & Surveillance" },
  { title: "Servers & Data Center", subtitle: "Servers, Racks, UPS, Data Center", text: "Power That Never Stops", image: serversImg, cta: "Build Data Center", service: "Solutions — Enterprise Infrastructure" },
  { title: "Education", subtitle: "Smart Class, Labs, Campus Wi-Fi", text: "Connected classrooms, labs and campuses — planned, installed and supported.", image: educationImg, cta: "Solution for School", service: "Solutions — Small Business Solutions" },
  { title: "Healthcare", subtitle: "HMS, Backup, Security", text: "Secure, always-on care for hospitals and clinics.", image: healthcareImg, cta: "Solution for Hospital", service: "Solutions — Small Business Solutions" },
  { title: "Hardware", subtitle: "Desktops, Printers, Accessories", text: "Genuine hardware, installed and covered by warranty support.", image: hardwareImg, cta: "Get Hardware", service: "Hardware — Desktops & Workstations" },
  { title: "Office Setup", subtitle: "Complete Office Setup in 7 Days", text: "One Partner, Everything Done", image: officeImg, cta: "Setup My Office", service: "Request a Quote — IT Infrastructure" },
];

const testimonials = [
  { quote: "One call sorted everything — our WiFi, cabling and computers. The team explained each step and finished on schedule.", role: "Administrator", org: "School • Education", stars: 5, initials: "AD" },
  { quote: "Our billing and stock system finally works the way our shop works. Support is quick, polite and genuinely helpful.", role: "Owner", org: "Retail business", stars: 5, initials: "OW" },
  { quote: "They planned our office IT, supplied the hardware and still look after it under AMC. It has taken a real load off our team.", role: "Operations Lead", org: "Office • Services", stars: 5, initials: "OL" },
];

// ─────────────────────────────────────────────────────────────
// BRAND LOGOS — Inline SVG Marks (No external images needed)
// ─────────────────────────────────────────────────────────────
const partnerLogos = [
  {
    name: "Microsoft",
    color: "#00A4EF",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <rect x="1" y="1" width="10" height="10" fill="#F25022" />
        <rect x="13" y="1" width="10" height="10" fill="#7FBA00" />
        <rect x="1" y="13" width="10" height="10" fill="#00A4EF" />
        <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "Dell",
    color: "#007DB8",
    svg: (
      <svg viewBox="0 0 40 40" className="h-7 w-7">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#007DB8" strokeWidth="2.5" />
        <text x="20" y="26" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#007DB8" fontFamily="Arial">DELL</text>
      </svg>
    ),
  },
  {
    name: "HP",
    color: "#0096D6",
    svg: (
      <svg viewBox="0 0 40 40" className="h-7 w-7">
        <circle cx="20" cy="20" r="18" fill="#0096D6" />
        <text x="20" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#fff" fontFamily="Arial">hp</text>
      </svg>
    ),
  },
  {
    name: "Lenovo",
    color: "#E2231A",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <rect width="80" height="24" rx="3" fill="#E2231A" />
        <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="Arial" letterSpacing="1">Lenovo</text>
      </svg>
    ),
  },
  {
    name: "Cisco",
    color: "#1BA0D7",
    svg: (
      <svg viewBox="0 0 40 40" className="h-7 w-7">
        <path d="M20 4 L24 12 H16 Z" fill="#1BA0D7" />
        <path d="M20 36 L16 28 H24 Z" fill="#1BA0D7" />
        <path d="M4 20 L12 16 V24 Z" fill="#1BA0D7" />
        <path d="M36 20 L28 24 V16 Z" fill="#1BA0D7" />
        <circle cx="20" cy="20" r="5" fill="#1BA0D7" />
      </svg>
    ),
  },
  {
    name: "Fortinet",
    color: "#EE3124",
    svg: (
      <svg viewBox="0 0 40 40" className="h-7 w-7">
        <path d="M20 2 L38 20 L20 38 L2 20 Z" fill="#EE3124" />
        <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="#fff" />
        <path d="M20 14 L26 20 L20 26 L14 20 Z" fill="#EE3124" />
      </svg>
    ),
  },
  {
    name: "Sophos",
    color: "#00539F",
    svg: (
      <svg viewBox="0 0 40 40" className="h-7 w-7">
        <circle cx="20" cy="20" r="18" fill="#00539F" />
        <path d="M20 8 L26 18 L20 32 L14 18 Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "HPE",
    color: "#01A982",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <rect width="80" height="24" rx="3" fill="#01A982" />
        <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="Arial" letterSpacing="1">HPE</text>
      </svg>
    ),
  },
  {
    name: "VMware",
    color: "#607078",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <text x="40" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#607078" fontFamily="Arial" letterSpacing="0.5">VMware</text>
      </svg>
    ),
  },
  {
    name: "Veeam",
    color: "#005F32",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#005F32" fontFamily="Arial" letterSpacing="1">Veeam</text>
      </svg>
    ),
  },
  {
    name: "Zoho",
    color: "#E42527",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#E42527" fontFamily="Arial" letterSpacing="1">Zoho</text>
      </svg>
    ),
  },
  {
    name: "Canon",
    color: "#CC0000",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#CC0000" fontFamily="Arial" letterSpacing="1">Canon</text>
      </svg>
    ),
  },
  {
    name: "Epson",
    color: "#003399",
    svg: (
      <svg viewBox="0 0 80 24" className="h-7 w-auto">
        <text x="40" y="17" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#003399" fontFamily="Arial" letterSpacing="1">Epson</text>
      </svg>
    ),
  },
];
const brands = partnerLogos.map((p) => p.name);

const whyItems = [
  { icon: BadgeCheck, title: "Certified IT Professionals", desc: "Experienced engineers across infrastructure, networking, security and cloud." },
  { icon: Building2, title: "End-to-End Technology Solutions", desc: "Consultation, procurement, deployment and ongoing support from one partner." },
  { icon: Handshake, title: "Vendor-Neutral Recommendations", desc: "Advice based on your needs and budget — not on a single brand." },
  { icon: Zap, title: "Fast Deployment & Support", desc: "Clear timelines, quick starts and responsive help when it matters." },
  { icon: ShoppingBag, title: "Cost-Effective Infrastructure Planning", desc: "Right-sized designs that avoid overspend and make future growth cheaper." },
  { icon: ShieldCheck, title: "Preventive Maintenance & Monitoring", desc: "Checks and monitoring that stop small issues becoming downtime." },
  { icon: Rocket, title: "Scalable Solutions for Growing Businesses", desc: "Start lean, expand cleanly — without replacing everything you already have." },
];

const industryFilters = ["All", "Education", "Healthcare", "Manufacturing", "Retail", "Finance", "Government", "IT", "Logistics"];

const detailedIndustries = [
  { id: "education", filter: "Education", name: "Education", tagline: "Smart Classrooms, Connected Campuses", image: educationWorkingImg, status: "Working", icon: GraduationCap, features: ["Computer Labs + Smart Boards", "Campus Wi-Fi for 1000+ Students", "School ERP + Fees + Attendance Software", "CCTV + Biometric Attendance", "Library & Exam Management", "Smart Class Setup & Training", "Lab Cabling & Power Planning"], example: "120-computer lab + campus Wi-Fi + CCTV for a school in Bengaluru - deployed in 14 days with high uptime", timeline: "Timeline: 14 days • Site survey to handover", products: ["Smart Boards", "Laptops", "Wi-Fi", "CCTV", "School ERP"], services: ["Campus Wi-Fi Design", "Computer Lab Setup", "Smart Class Installation", "CCTV & Attendance", "School ERP Setup"], detail: "Built for schools and colleges that need classrooms, labs and offices on one dependable network — with attendance, fees and exams running from the same setup." },
  { id: "healthcare", filter: "Healthcare", name: "Healthcare", tagline: "Secure, Always-On Care", image: serverWorkingImg, status: "Working", icon: HeartPulse, features: ["Hospital Management Software (HMS)", "Patient Data Backup + Disaster Recovery", "Secure Wi-Fi + Intercom", "CCTV + Access Control for Wards", "UPS for 24x7 Operation", "Server Room Setup", "Data Security & Access Control"], example: "80-bed hospital - HMS + NAS backup + biometric + CCTV + UPS backup, zero data loss in 2 years", timeline: "Timeline: 21 days • Staged rollout without stopping care", products: ["HMS", "NAS", "UPS", "CCTV", "Biometric"], services: ["HMS Deployment", "NAS Backup Setup", "Ward CCTV", "Biometric Access", "UPS & Power"], detail: "Patient care cannot pause for IT. We keep records, wards and power protected — with backups that restore fast and access that stays controlled." },
  { id: "manufacturing", filter: "Manufacturing", name: "Manufacturing", tagline: "Industry 4.0 Ready Factories", image: warehouseWorkingImg, status: "In Progress", icon: Factory, features: ["Factory Wi-Fi + Fiber Backbone", "ERP + Inventory + Production Software", "CCTV for Plant + Warehouse", "Biometric + Gate Access", "Server + NAS for Design Data", "Industrial Cabling & Racks", "Plant Monitoring & Alerts"], example: "Auto-parts factory - Fiber + ERP + 48 CCTV + Attendance - production downtime down", timeline: "Timeline: 30 days • Phased install across plant and warehouse", products: ["Fiber", "ERP", "CCTV", "Servers", "Attendance"], services: ["Fiber Backbone", "ERP Deployment", "Plant CCTV", "Gate Access", "Server & NAS"], detail: "From the shop floor to the warehouse, one backbone carries production data, cameras and attendance — so managers see what is happening in real time." },
  { id: "retail", filter: "Retail", name: "Retail", tagline: "Sell Faster, Manage Smarter", image: retailWorkingImg, status: "Working", icon: Store, features: ["Billing POS + Barcode Printers", "Inventory + GST Software", "CCTV + Loss Prevention", "Multi-Store Wi-Fi + VPN", "E-commerce Website", "Central Dashboard Setup", "Barcode Scanning & Labelling"], example: "5-store supermarket chain - POS + Inventory + CCTV + Central Dashboard - billing faster", timeline: "Timeline: 18 days • One store at a time, no lost trading days", products: ["POS", "Barcode Printers", "CCTV", "E-commerce"], services: ["POS & Billing Setup", "Inventory Software", "Store CCTV", "Multi-Store VPN", "E-commerce Setup"], detail: "One dashboard for every store: stock, billing, cameras and GST — so a small team can run many counters without losing track of a single item." },
  { id: "finance", filter: "Finance", name: "Banking & Finance", tagline: "Bank-Grade Security & Compliance", image: cctvInstallingImg, status: "Installed", icon: Landmark, features: ["Next-Gen Firewall + EDR", "MFA + SSO + Email Security", "Secure Backup + DR", "Endpoint Protection for Branches", "Audit-Ready IT Setup", "Branch Network & VPN", "Security Audit & Hardening"], example: "NBFC with 12 branches - Firewall + MFA + Cloud Backup - passed security audit", timeline: "Timeline: 28 days • Branch-by-branch rollout with central monitoring", products: ["Firewall", "EDR", "MFA", "Cloud Backup"], services: ["Firewall Deployment", "EDR & Endpoint Security", "MFA & SSO", "Branch VPN", "Cloud Backup"], detail: "Every branch gets the same hardened setup: protected endpoints, verified logins and backups that auditors can actually trace." },
  { id: "government", filter: "Government", name: "Government & Public Sector", tagline: "Reliable, Transparent & Secure", image: cctvInstallingImg, status: "Installing", icon: Building2, features: ["Data Center + Server Racks", "Citizen Service Kiosks", "Secure Network + Firewall", "CCTV for Offices + Public Areas", "AMC for All Departments", "Document & Record Digitisation", "Public Wi-Fi & Kiosk Setup"], example: "Municipal office - Server room + 60 CCTV + Kiosk + AMC - serving 500+ citizens daily", timeline: "Timeline: 35 days • Server room first, then offices and public areas", products: ["Servers", "Racks", "Kiosks", "CCTV", "AMC"], services: ["Server Room Build", "CCTV Installation", "Kiosk Setup", "Secure Network", "AMC Cover"], detail: "Public offices need systems citizens can trust: documented setups, secure networks and AMC cover that keeps every department running." },
  { id: "it", filter: "IT", name: "Information Technology / Startups", tagline: "Scale Fast Without IT Headaches", image: networkingInstallingImg, status: "Installing", icon: MonitorSmartphone, features: ["Complete Office Setup in 7 Days", "Laptops + Monitors + Docking", "Microsoft 365 + Azure Cloud", "High-Speed Wi-Fi + VPN for Hybrid Work", "Managed IT + Helpdesk", "Meeting Rooms & Teams Setup", "Onboarding Kit for New Joiners"], example: "40-person startup - Full office IT + M365 + Azure + Helpdesk - setup done in 6 days", timeline: "Timeline: 6 days • Survey to fully working office", products: ["Laptops", "M365", "Azure", "Wi-Fi", "Helpdesk"], services: ["Office Setup", "M365 & Azure", "Wi-Fi & VPN", "Meeting Rooms", "Managed Helpdesk"], detail: "Startups move fast — your IT should too. We set up the whole office, cloud and helpdesk in days, then stay on call while you grow." },
  { id: "logistics", filter: "Logistics", name: "Logistics & Warehouse", tagline: "Track Everything, Miss Nothing", image: warehouseWorkingImg, status: "In Progress", icon: Truck, features: ["Warehouse Wi-Fi + Barcode Scanning", "Inventory + Fleet Software", "CCTV for Yard + Dock", "GPS + Vehicle Tracking Setup", "UPS + Power Backup", "Dock & Yard Cabling", "Dispatch Dashboard Setup"], example: "Logistics warehouse 50,000 sq ft - Wi-Fi + Barcode + 32 CCTV + Inventory - dispatch errors down", timeline: "Timeline: 24 days • Warehouse zones completed in sequence", products: ["Barcode Scanners", "Wi-Fi", "CCTV", "Inventory Software"], services: ["Warehouse Wi-Fi", "Barcode Scanning", "Yard CCTV", "Inventory Software", "UPS & Power"], detail: "Every pallet, vehicle and dock gets tracked — with Wi-Fi and power that keep scanning and dispatch moving through every shift." },
];

const certifications = ["Microsoft Partner", "Dell Authorized", "HP Partner", "Lenovo Partner", "Cisco Partner", "Fortinet Partner", "Sophos", "VMware", "Zoho Authorized"];

const caseStudies = [
  { image: educationImg, tag: "Education • School", title: "School — 120 PCs + Campus Wi-Fi + CCTV", meta: "14 days delivery • Bengaluru", challenge: ["Slow, patchy Wi-Fi across classrooms and labs", "120 PCs to set up, secure and keep updated", "No central view of campus safety"], solution: ["120-computer lab with structured cabling & switches", "Campus-wide Wi-Fi planned for 1000+ students", "CCTV + biometric attendance across campus"], result: ["High uptime", "14 days delivery", "One team for lab, Wi-Fi & CCTV"] },
  { image: healthcareImg, tag: "Healthcare • 80-Bed Hospital", title: "80-Bed Hospital — HMS + Backup + Security", meta: "24x7 operation • Zero data loss", challenge: ["Patient records spread across systems", "Risk of data loss during power or system failure", "Wards needed controlled, secure access"], solution: ["Hospital Management Software (HMS)", "NAS backup + disaster recovery plan", "CCTV, biometric access & UPS for 24x7 operation"], result: ["Zero data loss", "24x7 uptime", "Faster, safer patient record access"] },
  { image: officeImg, tag: "Retail • 5-Store Chain", title: "5-Store Retail Chain — POS + Inventory + CCTV", meta: "Central dashboard • Multi-store", challenge: ["Slow billing at peak hours", "Stock counts that never matched across stores", "Shrinkage with no clear evidence trail"], solution: ["Billing POS + barcode printers in every store", "Inventory + GST software with central dashboard", "CCTV + loss-prevention layout per store"], result: ["Billing faster", "Less shrinkage", "One dashboard for all 5 stores"] },
  { image: serverWorkingImg, tag: "Finance • NBFC • 12 Branches", title: "NBFC 12 Branches — Firewall + MFA", meta: "Branch rollout • Central monitoring", challenge: ["12 branches with different security setups", "No MFA — accounts at risk from stolen passwords", "No central view of threats or backups"], solution: ["Next-gen firewall in every branch, centrally managed", "MFA + SSO for every account, plus email security", "EDR on endpoints and cloud backup with DR"], result: ["Passed security audit", "One security view for all branches", "Faster, safer logins for staff"] },
  { image: warehouseWorkingImg, tag: "Logistics • 50,000 sq ft Warehouse", title: "Logistics Warehouse — Wi-Fi + Barcode + CCTV", meta: "50,000 sq ft • Yard + Dock", challenge: ["Dead Wi-Fi zones stopped scanning at the dock", "Dispatch errors from manual stock counts", "No camera cover for yard and loading areas"], solution: ["Warehouse-wide Wi-Fi planned for scanners and docks", "Barcode scanning + inventory software with live stock", "32 CCTV cameras for yard, dock and warehouse"], result: ["Dispatch errors down", "Live stock across the warehouse", "Full yard and dock coverage"] },
  { image: networkingInstallingImg, tag: "IT / Startup • 40-Person Office", title: "40-Person Startup Office — Full Setup in 6 Days", meta: "6 days • Survey to handover", challenge: ["New office, no IT at all — deadline in one week", "Team needed laptops, Wi-Fi, meeting rooms and cloud on day one", "No IT person to look after it after go-live"], solution: ["Complete office setup: laptops, monitors, docking and printers", "Microsoft 365 + Azure, Wi-Fi + VPN and Teams meeting rooms", "Managed helpdesk and AMC cover from day one"], result: ["Working office in 6 days", "One partner for IT + support", "New joiners onboard in hours"] },
];

function Counter({ value, suffix, decimals }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now(), dur = 1600;
        const tick = (now) => { const p = Math.min(1, (now - start) / dur); const eased = 1 - Math.pow(1 - p, 3); setDisplay(value * eased); if (p < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    obs.observe(el); return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{display.toFixed(decimals)}{suffix}</span>;
}



function HardwareCard({ product, setSelectedProduct, chooseService }) {
  const Icon = product.icon;
  const items = product.items || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalMs = 3500;

  // Autoplay per card
  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((p) => (p + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const activeItem = items[activeIndex] || { name: "", desc: "" };

  const go = (dir) =>
    setActiveIndex((p) => (p + dir + items.length) % items.length);

  return (
    <article
      onClick={() => setSelectedProduct(`${product.title} — ${activeItem.name}`)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group relative flex h-full min-h-[250px] w-full cursor-pointer flex-col overflow-hidden rounded-[2rem] bg-[#111]"
    >
      {/* ── Background image slides with each product ── */}
      {items.map((it, i) => (
        <img
          key={it.name}
          src={it.image}
          alt={it.name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay - Darker at the bottom to ensure text readability */}
     

     

      {/* Top-right dots (one per product) */}
      <div className="absolute right-5 top-5 z-10 flex gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Show ${items[i].name}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-6 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Bottom content wrapper ── */}
      <div className="relative z-10 mt-auto flex w-full flex-col p-5 sm:p-6">
        
        {/* Text Content Group */}
        <div className="mb-4">
          {/* Category tag */}
          

          {/* Sliding product name + desc */}
          <div className="relative mt-2 h-[56px] overflow-hidden">
            {items.map((it, i) => (
              <div
                key={it.name}
                className={`absolute inset-0 flex flex-col justify-start transition-all duration-500 ${
                  i === activeIndex
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="shrink-0 text-cyan-400" />
                  <span className="text-3xl font-medium text-white">{it.name}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/70">
                  {it.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

       

        {/* CTA Buttons - aligned to the bottom */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              chooseService(product.service);
            }}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Get a Quote <ArrowUpRight size={15} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedProduct(`${product.title} — ${activeItem.name}`);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Details <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Arrows (hover) */}
      {items.length > 1 && (
        <>
          <button
            aria-label="Previous product"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-black"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            aria-label="Next product"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 hover:bg-white hover:text-black"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}
    </article>
  );
}












function SoftwareEcosystem({
  softwareCards,
  setSelectedProduct,
  chooseService,
}) {
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
              chooseService={chooseService}
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
              chooseService={chooseService}
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


/* SOFTWARE NODE COMPONENT */



function SoftwareEcosystemNode({
  product,
  side,
  x,
  y,
  setSelectedProduct,
  chooseService,
}) {
  const isLeft = side === "left";

  return (
    <div
      className="absolute z-20 w-[250px] -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${(x / 1000) * 100}%`,
        top: `${(y / 500) * 100}%`,
      }}
    >
      {/* Glass Card */}
      <div
        onClick={() => setSelectedProduct(product.title)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-white/[0.055] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.09] hover:shadow-[0_12px_40px_rgba(56,189,248,0.12)]"
      >
        {/* Glass reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.10] via-transparent to-transparent opacity-70" />

        {/* Ambient glow */}
        <div className={`pointer-events-none absolute -top-10 ${
          isLeft ? "-left-10" : "-right-10"
        } h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/25`} />

        {/* Top section */}
        <div className={`relative flex items-center gap-3 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}>

          {/* Glass Icon */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-white/15 to-white/[0.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-110">

            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 opacity-70" />

            <div className="relative z-10 text-cyan-200 drop-shadow-[0_0_10px_rgba(103,232,249,0.7)]">
              {product.icon && <product.icon size={27} strokeWidth={1.7} />}
            </div>
          </div>

          {/* Product Information */}
          <div className={`min-w-0 flex-1 ${
            isLeft ? "text-left" : "text-right"
          }`}>
            <span className="text-[9px] font-seminormal uppercase tracking-[0.18em] text-cyan-300/70">
              {product.tag || "BUSINESS SOLUTION"}
            </span>

            <h3 className="mt-1 text-sm font-normal leading-tight text-white">
              {product.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className={`relative mt-4 line-clamp-2 text-[10px] leading-relaxed text-slate-300/65 ${
          isLeft ? "text-left" : "text-right"
        }`}>
          {product.desc}
        </p>

        {/* Bottom separator */}
        <div className="relative mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

     

        {/* Corner reflection */}
        <div className="pointer-events-none absolute right-0 top-0 h-5 w-5 rounded-tr-2xl border-r border-t border-white/20" />
      </div>
    </div>
  );
}









const inputCls = "w-full rounded-xl border border-[#2F2FE4] bg-[#080616] px-3.5 py-3 text-sm text-white outline-none focus:border-white focus:ring-2 focus:ring-[#2F2FE4] placeholder:text-white/50";
const labelCls = "mb-1.5 block text-sm font-normal text-white";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSection, setMobileSection] = useState("Products");
  const [activeSection, setActiveSection] = useState("home");

  const [productIndex, setProductIndex] = useState(0);
  const productCarouselRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [backendStatus, setBackendStatus] = useState("checking");
  const [newsEmail, setNewsEmail] = useState("");
  const [newsStatus, setNewsStatus] = useState({ status: "idle", message: "" });
  const [industryFilter, setIndustryFilter] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [contactTab, setContactTab] = useState("quote");
  const [quoteForm, setQuoteForm] = useState({ name: "", phone: "", email: "", company: "", industry: "IT", service: "Request a Quote — IT Infrastructure", budget: "Not sure yet — advise me", message: "" });
  const [supportForm, setSupportForm] = useState({ name: "", phone: "", issue: "Hardware", priority: "Medium", message: "" });
  const [partnerForm, setPartnerForm] = useState({ company: "", contact: "", email: "", type: "Reseller", message: "" });
  const [quoteStatus, setQuoteStatus] = useState({ status: "idle", message: "" });
  const [supportStatus, setSupportStatus] = useState({ status: "idle", message: "" });
  const [partnerStatus, setPartnerStatus] = useState({ status: "idle", message: "" });
  const [downloadMsg, setDownloadMsg] = useState("");
  const [showBackTop, setShowBackTop] = useState(false);
  const [whatsAppNote, setWhatsAppNote] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [heroSearch, setHeroSearch] = useState("");
  const testimonialSliderRef = useRef(null);
  const [showHowWeWork, setShowHowWeWork] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const touchX = useRef(null);
  const [industryIndex, setIndustryIndex] = useState(0);

  const scrollTestimonials = (dir) => {
    const el = testimonialSliderRef.current; 
    if (!el) return;
    // Scroll by the width of one card plus the gap
    const card = el.querySelector(".snap-start");
    const step = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

const industrySliderRef = useRef(null);
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


  const [activeSlide, setActiveSlide] = useState(0);
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
const caseStudySliderRef = useRef(null);

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

const cardsPerSlide = 4;
const totalSlides = Math.ceil(hardwareCards.length / cardsPerSlide);

const nextSlide = () => {
  setActiveSlide((prev) => (prev + 1) % totalSlides);
};

const prevSlide = () => {
  setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
};

// Automatic sliding every 5 seconds
useEffect(() => {
  if (totalSlides <= 1) return;

  const interval = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, 5000);

  return () => clearInterval(interval);
}, [totalSlides]);


  useEffect(() => {
    document.title = "IT Infrastructure, Networking & Cybersecurity Solutions Company | Your Company Name";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.name = "description"; document.head.appendChild(meta); }
    meta.content = "Your trusted partner for IT infrastructure, networking, cybersecurity, cloud solutions, hardware procurement, software licensing, surveillance systems, and managed IT services. Serving businesses across India with end-to-end technology solutions.";
  }, []);
  useEffect(() => {
    let alive = true;
    callApi("records.list", { collection: "quote_requests", limit: 1 }).then(() => alive && setBackendStatus("ready")).catch(() => alive && setBackendStatus("unavailable"));
    return () => { alive = false; };
  }, []);
  useEffect(() => {
    const timer = setInterval(() => setCarouselIndex((i) => (i + 1) % heroSlides.length), 4000);
    return () => clearInterval(timer);
  }, [carouselIndex]);
  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > 600);
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
  const openSolution = (id) => { setSelectedSolution(id); };
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
  const handleNewsletter = async (e) => {
    e.preventDefault(); if (newsStatus.status === "busy") return;
    if (!newsEmail.trim() || !newsEmail.includes("@")) { setNewsStatus({ status: "error", message: "Please enter a valid email address." }); return; }
    setNewsStatus({ status: "busy", message: "Saving your subscription…" });
    try {
      await callApi("records.create", { collection: "newsletter_signups", value: { email: newsEmail.trim(), created_at: new Date().toISOString() }, idempotency_key: `news-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` });
      setNewsStatus({ status: "saved", message: "You’re subscribed — welcome to Your Company Name updates." }); setNewsEmail("");
    } catch (err) { setNewsStatus({ status: "error", message: err instanceof Error ? err.message : "We could not save your subscription. Please try again." }); }
  };
  const handleDownload = async (item) => {
    setDownloadMsg(`Preparing ${item} — your request has been saved. We will share the file by email within 2 hours.`);
    try { await callApi("records.create", { collection: "download_requests", value: { item, created_at: new Date().toISOString() }, idempotency_key: `dl-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }); } catch { /* message already shown */ }
  };


  

  const t = testimonials[quoteIndex];
  const slide = heroSlides[carouselIndex];
  const industryDetail = selectedIndustry ? detailedIndustries.find((x) => x.id === selectedIndustry) : undefined;
  const productDetail = selectedProduct ? productCards.find((x) => x.title === selectedProduct) : undefined;

  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh", background: "#080616" }} className="overflow-x-clip text-white">
     {/* 1. TOP PROMO BAR - Fixed at the very top */}
<div className="fixed left-0 top-0 z-[60] w-full bg-[#2F2FE4] px-3 py-2 text-center text-[11px] font-normal text-white sm:text-[12px] shadow-sm">
  <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
    <span>End-to-End Technology Solutions</span>
    <span className="hidden sm:inline">|</span>
    <span>Serving Across India</span>
    <span className="hidden sm:inline">|</span>
    <span>24/7 Support - Call: <a href="tel:+919000000000" target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-gray-200">+91 90000 00000</a></span>
  </span>
</div>

{/* 2. MAIN NAVIGATION - Fixed just below the promo bar */}
<header className="fixed left-0 top-[36px] sm:top-[34px] z-50 w-full border-b border-white/5 bg-[#080616]/95 shadow-lg shadow-black/30 backdrop-blur-md">
  <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-3 py-2.5 sm:px-5">
    
    {/* Logo */}
    <button onClick={() => goTo("home")} className="flex min-w-0 items-center gap-2.5 text-left" aria-label="TechVista — home">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#2F2FE4] to-[#162E93] text-[22px] font-medium text-white shadow-lg">T</span>
      <span className="leading-none">
        <span className="block text-[19px] font-medium tracking-tight text-white sm:text-[21px]">
          Tech<span className="gradient-text">Vista</span>
        </span>
        <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-white/80">Solutions</span>
      </span>
    </button>

    {/* Desktop Nav */}
   <nav
  className="hidden md:flex shrink-0 items-center justify-center gap-0.5"
  aria-label="Main navigation"
>
      {NAV.map((item) => (
        <div 
          key={item.id} 
          className="group relative" 
          onMouseEnter={() => item.groups || item.items ? setOpenDropdown(item.id) : setOpenDropdown(null)} 
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button 
            onClick={() => { if (item.groups || item.items) setOpenDropdown(openDropdown === item.id ? null : item.id); else goTo(item.target); }} 
            aria-expanded={openDropdown === item.id} 
            aria-haspopup={item.groups || item.items ? "true" : undefined} 
            className={`relative flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-normal transition ${activeSection === item.id || openDropdown === item.id ? "bg-[#2F2FE4] text-white shadow-md" : "text-white hover:bg-[#2F2FE4]"}`}
          >
            {item.label}
            {(item.groups || item.items) && <ChevronDown size={13} className={`transition ${openDropdown === item.id ? "rotate-180" : ""}`} />}
          </button>
          
          {/* Mega Menu Dropdown - Changed Positioning to Right-Aligned to prevent overflow */}
          {openDropdown === item.id && item.groups && (
            <div className="absolute left-0 top-full z-50 w-[860px] pt-2">
              <div className="rounded-3xl border border-[#2F2FE4] bg-[#080616] p-5 shadow-2xl">
                <div className="grid grid-cols-4 gap-5">
                  {item.groups.map((g) => (
                    <div key={g.heading}>
                      <p className="border-b border-[#2F2FE4]/40 pb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white">{g.heading}</p>
                      <ul className="mt-3 space-y-1">
                        {g.items.map((c) => (
                          <li key={c.label}>
                            <button onClick={() => chooseNavChild(c)} className="w-full rounded-lg px-2 py-2 text-left text-[13px] font-normal text-white/80 hover:bg-[#2F2FE4] hover:text-white transition-colors">{c.label}</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#2F2FE4] px-5 py-4 text-sm">
                  <span className="font-normal text-white">Not sure which product fits? <span className="text-white/80">Tell us your use case.</span></span>
                  <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#080616] transition hover:scale-105">Get a Quote <ArrowRight size={14} /></button>
                </div>
              </div>
            </div>
          )}

          {/* Normal Dropdown */}
          {openDropdown === item.id && item.items && !item.groups && (
            <div className="absolute left-0 top-full z-50 w-64 pt-2">
              <div className="rounded-2xl border border-[#2F2FE4] bg-[#080616] p-2 shadow-2xl">
                {item.items.map((c) => (
                  <button key={c.label} onClick={() => chooseNavChild(c)} className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-normal text-white hover:bg-[#2F2FE4] hover:text-white transition-colors">{c.label}<ChevronRight size={14} className="text-white/50" /></button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>

    {/* Right Actions */}
    <div className="flex items-center gap-2">
      {searchOpen ? (
        <form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); goTo("products"); }} className="flex items-center gap-1 rounded-full border border-[#2F2FE4] bg-[#1A1953] p-1 pl-3">
          <label className="sr-only" htmlFor="nav-search">Search products</label>
          <input id="nav-search" autoFocus value={heroSearch} onChange={(e) => setHeroSearch(e.target.value)} placeholder="Search products…" className="w-28 bg-transparent text-sm text-white outline-none placeholder:text-white/50 sm:w-40" />
          <button type="submit" className="rounded-full bg-[#2F2FE4] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#162E93]">Go</button>
          <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search" className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/10 text-white"><X size={15} /></button>
        </form>
      ) : (
        <button onClick={() => setSearchOpen(true)} aria-label="Search products" className="grid h-10 w-10 place-items-center rounded-full border border-[#2F2FE4] bg-white/10 text-white transition hover:bg-white/20"><Search size={18} /></button>
      )}
      <a href="tel:+919000000000" target="_blank" rel="noopener" className="hidden h-10 items-center gap-2 rounded-full border border-[#2F2FE4]/50 bg-[#2F2FE4] px-3.5 text-[13px] font-medium text-white transition hover:bg-[#162E93] md:inline-flex">
        <Phone size={15} className="text-white" />
        <span className="hidden lg:inline">+91 90000 00000</span><span className="lg:hidden">Call</span>
      </a>
      <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="hidden items-center gap-2 rounded-full bg-[#2F2FE4] px-4 py-2.5 text-[13px] font-medium text-white shadow-md hover:bg-white hover:text-[#080616] sm:inline-flex transition-colors">Get a Quote <ArrowRight size={15} /></button>
      <button onClick={() => setMenuOpen((v) => !v)} className="flex h-11 items-center gap-2 rounded-full border border-white/30 bg-[#2F2FE4] px-3 text-sm font-medium text-white lg:hidden xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={19} />}<span className="hidden sm:inline">MENU</span></button>
    </div>
  </div>

  {/* Mobile Menu Overlay - High Z-Index to cover everything */}
  {menuOpen && (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-[#080616] pt-4 text-white lg:hidden">
      <div className="min-h-full px-4 pb-8 pt-2">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#2F2FE4] to-[#162E93] text-lg font-medium text-white">T</span>
            <span className="font-medium text-white">Tech<span className="gradient-text">Vista</span> <span className="block text-[9px] tracking-[0.28em] text-white/80">SOLUTIONS</span></span>
          </span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-[#2F2FE4] text-white"><X size={20} /></button>
        </div>
        <p className="mx-auto mt-6 max-w-3xl px-1 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">End-to-End Technology Solutions</p>
        <div className="grid gap-1">
          {NAV.map((item) => {
            const hasChildren = !!(item.groups || item.items);
            const expanded = mobileSection === item.id;
            const flat = item.groups ? item.groups.flatMap((g) => g.items.map((c) => ({ ...c, label: `${g.heading} — ${c.label}` }))) : (item.items || []);
            return (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-white/20 bg-[#2F2FE4]">
                <div className="flex items-center">
                  <button onClick={() => goTo(item.target)} className="flex-1 px-4 py-4 text-left text-[21px] font-medium leading-tight text-white">{item.label}</button>
                  {hasChildren && <button onClick={() => setMobileSection(expanded ? null : item.id)} aria-expanded={expanded} aria-label={`Toggle ${item.label}`} className="grid h-11 w-11 place-items-center text-white"><ChevronDown size={18} className={`transition ${expanded ? "rotate-180" : ""}`} /></button>}
                </div>
                {hasChildren && expanded && <div className="border-t border-white/20 bg-[#080616] px-2 pb-2 pt-1">{flat.map((c) => <button key={c.label} onClick={() => chooseNavChild(c)} className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-seminormal text-white hover:bg-[#2F2FE4]">{c.label}</button>)}</div>}
              </div>
            );
          })}
        </div>
        <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-4 py-3.5 text-sm font-medium text-white">Get a Quote <ArrowRight size={16} /></button>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-normal text-white">
          <a href="tel:+919000000000" target="_blank" rel="noopener" className="flex items-center gap-2"><Phone size={15} className="text-white" /> +91 90000 00000</a>
          <a href="mailto:info@yourcompany.com" target="_blank" rel="noopener" className="flex items-center gap-2 [overflow-wrap:anywhere]"><Mail size={15} className="text-white" /> info@yourcompany.com</a>
        </div>
      </div>
    </div>
  )}
</header>



      <main className="w-full min-w-0 pt-[100px]">
        

        




<section id="home" aria-label="Hero slider" className="relative w-full overflow-hidden bg-[#080616]"
  onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
  onTouchEnd={(e) => { 
    if (touchX.current === null) return; 
    const dx = e.changedTouches[0].clientX - touchX.current; 
    if (dx < -40) setCarouselIndex((i) => (i + 1) % heroSlides.length); 
    if (dx > 40) setCarouselIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length); 
    touchX.current = null; 
  }}>
  
  {/* Preload next image for smoother transitions */}
  {heroSlides[(carouselIndex + 1) % heroSlides.length] && (
    <img 
      src={heroSlides[(carouselIndex + 1) % heroSlides.length].image} 
      alt="" 
      className="hidden" 
      loading="eager"
    />
  )}

  <div className="relative h-[580px] w-full sm:h-[600px] lg:h-[690px]">
    
    {/* Image with smooth fade transition */}
    <div className="absolute inset-0">
      {heroSlides.map((slide, idx) => (
        <img 
          key={`slide-${idx}`}
          src={slide.image} 
          alt={slide.title} 
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            idx === carouselIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
    </div>

    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#080616]/95 via-[#080616]/70 to-[#080616]/10" aria-hidden="true" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080616]/70 to-transparent" aria-hidden="true" />

    {/* Content with staggered animation */}
    <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6">
      <div className="max-w-2xl">
        
        {/* Badge with entrance animation */}
        <span 
          key={`badge-${carouselIndex}`}
          className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#080616] animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <span className="h-2 w-2 rounded-full bg-[#2F2FE4] pulse-dot" /> 
          End-to-End Technology Solutions
        </span>

        {/* Title with slide animation */}
        <h1 
          key={`title-${carouselIndex}`}
          className="mt-4 text-[clamp(2.2rem,6vw,4.2rem)] font-medium leading-[1.02] tracking-tight text-white animate-slide-in-left"
          style={{ animationDelay: '200ms' }}
        >
          {heroSlides[carouselIndex].title}
        </h1>

        {/* Subtitle with fade */}
        <p 
          key={`subtitle-${carouselIndex}`}
          className="mt-2 text-[clamp(1.05rem,2.5vw,1.5rem)] font- text-white animate-fade-in"
          style={{ animationDelay: '300ms' }}
        >
          {heroSlides[carouselIndex].subtitle}
        </p>

        {/* Description with fade */}
        <p 
          key={`text-${carouselIndex}`}
          className="mt-3 max-w-xl text-[16px] leading-relaxed text-white/90 animate-fade-in"
          style={{ animationDelay: '400ms' }}
        >
          {heroSlides[carouselIndex].text}
        </p>

        {/* Buttons with staggered entrance */}
        <div 
          key={`buttons-${carouselIndex}`}
          className="mt-6 flex flex-wrap gap-3 animate-fade-in-up"
          style={{ animationDelay: '500ms' }}
        >
          <button 
            onClick={() => chooseService(heroSlides[carouselIndex].service)} 
            className="group inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-[#080616] hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            {heroSlides[carouselIndex].cta} 
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button 
            onClick={() => goTo("products")} 
            className="group inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#080616] hover:border-white hover:scale-105 active:scale-95"
          >
            Browse Products
          </button>
          
         
        </div>

        

      </div>
    </div>

    {/* Navigation buttons with hover effects */}
    <button 
      onClick={() => setCarouselIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)} 
      aria-label="Previous slide" 
      className="group absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur-sm text-[#080616] shadow-xl transition-all duration-300 hover:bg-[#2F2FE4] hover:text-white hover:scale-110 hover:shadow-2xl active:scale-95 sm:left-5"
    >
      <ArrowLeft size={19} className="transition-transform group-hover:-translate-x-0.5" />
    </button>
    
    <button 
      onClick={() => setCarouselIndex((i) => (i + 1) % heroSlides.length)} 
      aria-label="Next slide" 
      className="group absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur-sm text-[#080616] shadow-xl transition-all duration-300 hover:bg-[#2F2FE4] hover:text-white hover:scale-110 hover:shadow-2xl active:scale-95 sm:right-5"
    >
      <ArrowRight size={19} className="transition-transform group-hover:translate-x-0.5" />
    </button>

    {/* Progress indicators */}
    <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        
        {/* Dot indicators with smooth transitions */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Hero slides">
          {heroSlides.map((s, i) => (
            <button 
              key={s.title} 
              role="tab" 
              aria-selected={carouselIndex === i} 
              aria-label={`Go to slide: ${s.title}`} 
              onClick={() => setCarouselIndex(i)} 
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === carouselIndex 
                  ? "w-7 bg-white shadow-lg scale-110" 
                  : "w-2.5 bg-white/50 hover:bg-white/80 hover:scale-125"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Add these CSS animations to your global styles or Tailwind config */}
<style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes progressFill {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-progress-fill {
    animation: progressFill 5s linear forwards;
  }

  .pulse-dot {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`}</style>



      <section className="bg-[#080616]" aria-label="Intro headline">
  {/* Top Header Area */}
  <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-6 sm:py-12">
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white ring-1 ring-[#2F2FE4] animate-fade-in">
      <Sparkles size={14} className="text-white" /> 
      End-to-End Technology Solutions
    </span>

    <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(1.7rem,4.5vw,2.8rem)] font-medium leading-tight text-white animate-slide-up">
      Building Intelligent, Secure &amp; Future-Ready Businesses
    </h2>

    <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-white/80 animate-fade-in-delay">
      Delivering world-class hardware, software, networking, cybersecurity, cloud, and managed services that enable organizations to innovate, scale, and succeed in a digital-first world.
    </p>
  </div>

  {/* Bento Grid Layout - Using YOUR Content */}
  <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
      
      {/* CARD 1: Left Vertical (Large) - 500+ Clients */}
      <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 row-span-2 rounded-3xl bg-[#2f2d95] p-6 flex flex-col justify-between overflow-hidden border border-white/5 hover:border-[#2F2FE4]/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#0606ec] blur-3xl group-hover:bg-[#2F2FE4] transition-colors" />
        
        <div className="relative z-10">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 text-white shadow-lg">
            <Users size={24} />
          </div>
          <h3 className="text-4xl font-medium text-white mb-2">500+</h3>
          <p className="text-lg font-normal text-white/90 leading-tight">Happy Clients</p>
        </div>
        
        <div className="relative z-10 mt-6">
          <p className="text-sm text-white/60 leading-relaxed">
            Empowering businesses across industries with reliable technology solutions and dedicated support.
          </p>
          <button className="mt-4 flex items-center gap-2 text-sm font-normal text-[#c9c9ee] group-hover:text-white transition-colors">
            View Case Studies <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* CARD 2: Top Middle - 99.9% Uptime */}
      <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-gradient-to-br from-[#7a7ae9] to-[#0400fa] p-6 flex flex-col justify-center items-start overflow-hidden border border-transparent hover:shadow-lg hover:shadow-[#2F2FE4]/20 transition-all animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl -mr-10 -mt-10" />
        <h3 className="text-5xl font-medium text-white tracking-tighter mb-1">99.9%</h3>
        <p className="text-sm font-medium text-blue-100">System Uptime</p>
        <p className="text-xs text-blue-200/80 mt-1">Guaranteed reliability for your critical operations.</p>
      </div>

      {/* CARD 3: Top Right - Safe and Secure */}
      <div className="group relative col-span-1 md:col-span-1 lg:col-span-2 rounded-3xl bg-[#0f0e3e] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/5 hover:border-[#2F2FE4]/50 transition-all animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <div className="shrink-0 h-14 w-14 rounded-2xl bg-[#2F2FE4]/10 flex items-center justify-center text-[#2F2FE4] group-hover:bg-[#2F2FE4] group-hover:text-white transition-colors">
          <ShieldCheck size={28} />
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-1">Safe and Secure</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Enterprise-grade cybersecurity protecting your data, networks, and infrastructure 24/7.
          </p>
          <button className="mt-2 flex items-center gap-1 text-xs font-normal text-white/80 hover:text-white transition-colors">
            Read more <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* CARD 4: Bottom Center Wide - Maintain Business Health */}
      <div className="group relative col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-gradient-to-r from-[#3a38b6] to-[#1a194c] p-6 flex flex-col justify-center overflow-hidden border border-white/5 hover:border-[#2F2FE4]/50 transition-all animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <div className="absolute right-0 bottom-0 h-40 w-80 rounded-full bg-[#2F2FE4]/10 blur-3xl" />
        <h3 className="text-xl font-medium text-white mb-2 relative z-10">Maintain Business Health</h3>
        <p className="text-sm text-white/70 mb-4 max-w-md relative z-10">
          Proactive monitoring and maintenance to keep your IT infrastructure running smoothly without downtime.
        </p>
        <div className="flex flex-wrap gap-3 relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-normal text-white backdrop-blur-sm">
            <FileText size={14} /> Reports
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-normal text-white backdrop-blur-sm">
            <Settings size={14} /> Management
          </span>
        </div>
      </div>

      {/* CARD 5: Bottom Right - 10+ Years */}
      <div className="group relative col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-[#191782] p-6 flex flex-col justify-center items-end text-right overflow-hidden border border-white/5 hover:border-[#2F2FE4]/50 transition-all animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <div className="absolute left-0 bottom-0 h-32 w-32 rounded-full bg-green-500 blur-2xl -ml-10 -mb-10" />
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-green-500/20 text-green-400 mb-3 ml-auto">
            <CalendarDays size={20} />
          </div>
          <h3 className="text-5xl font-medium text-white tracking-tighter mb-1">10+<span className="text-2xl align-top ml-1">Yrs</span></h3>
          <p className="text-sm font-medium text-white/80">Industry Experience</p>
          <p className="text-xs text-white/50 mt-1">Delivering excellence since day one.</p>
        </div>
      </div>

    </div>
  </div>

  {/* Services Strip - Orange Cut-Style Buttons */}

<div
  className="relative overflow-hidden border-y border-[#2F2FE4]/30 bg-[#080616] py-5"
  aria-label="Services"
>
  {/* Edge fades */}
  <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-[#080616] to-transparent" />
  <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[#080616] to-transparent" />

  {/*
    Keep two identical groups for a seamless marquee.
    Use the same service list in both groups.
  */}

  <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

    {[1, 2].map((set) => (
      <div
        key={set}
        className="flex shrink-0 items-center gap-3 px-2"
      >
        {[
          
          { name: "Hardware", icon: Cpu },
          { name: "Software", icon: Code2 },
          { name: "Networking", icon: Network },
          { name: "Cybersecurity", icon: ShieldCheck },
          { name: "Cloud", icon: Cloud },
          { name: "Managed IT", icon: Wrench },
          { name: "CCTV", icon: Cctv },
          { name: "Data Center", icon: Server },
           { name: "Hardware", icon: Cpu },
          { name: "Software", icon: Code2 },
          { name: "Networking", icon: Network },
          { name: "Cybersecurity", icon: ShieldCheck },
          { name: "Cloud", icon: Cloud },
          { name: "Managed IT", icon: Wrench },
          { name: "CCTV", icon: Cctv },
          { name: "Data Center", icon: Server },
        ].map((service, idx) => (
          <span
  className="
    service-cut-button
    group relative inline-flex shrink-0 items-center
    gap-2
    rounded-[10px]
    bg-[#FF805C]
    py-2 pl-2 pr-5
    text-[#171717]
    transition-all duration-300
    hover:bg-[#FF956F]
  "
>
  {/* Icon */}
  <span className="flex h-9 w-9 shrink-0 items-center justify-center">
    <service.icon
      size={29}
      strokeWidth={2.8}
      className="text-[#171717]"
    />
  </span>

  {/* Text */}
  <span className="whitespace-nowrap text-[21px] font-medium tracking-tight">
    {service.name}
  </span>
</span>
        ))}
      </div>
    ))}

  </div>
</div>

  {/* Add this to your existing <style jsx> block */}
  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    
    /* Keep your existing animations here... */
    @keyframes fadeUp { ... }
    @keyframes fadeIn { ... }
    .animate-fade-in { ... }
    .animate-slide-up { ... }
  `}</style>
</section>

{/* CSS Animations */}
<style jsx>{`
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
  .animate-fade-in-delay { animation: fadeIn 0.6s ease-out 0.2s forwards; opacity: 0; }
  .animate-slide-up { animation: fadeUp 0.6s ease-out forwards; }
  .animate-fade-in-up { animation: fadeUp 0.5s ease-out forwards; opacity: 0; }
`}</style>

       

                  {/* --- NEW COMPACT HORIZONTAL SLIDER PRODUCTS SECTION --- */}
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
        chooseService={chooseService}
      />
      </div>

  </div>
</section>



        


      </div>

      {/* --- MODAL --- */}
      {selectedProduct && (() => {
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
      })()}
    </section>

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
          {productDetail && (
            <div className="fixed inset-0 z-[90] overflow-y-auto bg-[#080616]/80 pt-[max(1rem,var(--safe-area-inset-top))] pb-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${productDetail.title} details`} onClick={() => setSelectedProduct(null)}>
              <div className="min-h-full flex items-center justify-center px-4"><div className="w-full max-w-2xl overflow-hidden rounded-[28px] bg-[#080616] text-white shadow-2xl ring-1 ring-[#2F2FE4]" onClick={(e) => e.stopPropagation()}>
                <div className="relative h-52"><img src={productDetail.image} alt={productDetail.title} className="h-full w-full object-cover" /><button onClick={() => setSelectedProduct(null)} aria-label="Close product details" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#080616] shadow hover:bg-[#2F2FE4] hover:text-white"><X size={19} /></button><span className="absolute bottom-4 left-4 rounded-full bg-[#080616]/90 px-3 py-1.5 text-xs font-medium text-white">{productDetail.tag}</span></div>
                <div className="p-5 sm:p-6"><h3 className="text-2xl font-medium leading-tight text-white sm:text-3xl">{productDetail.title}</h3><p className="mt-2 text-sm leading-relaxed text-white/80">{productDetail.desc}</p><p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-white">Included in this category</p><ul className="mt-3 space-y-2">{productDetail.items.map((x) => <li key={x} className="flex gap-2 text-sm leading-relaxed text-white"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-white" /><span className="[overflow-wrap:anywhere]">{x}</span></li>)}</ul>
                <div className="mt-5 flex flex-wrap gap-3"><button onClick={() => { const svc = productDetail.service; setSelectedProduct(null); chooseService(svc); }} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Get Best Price <ArrowRight size={16} /></button><button onClick={() => setSelectedProduct(null)} className="rounded-full border border-[#2F2FE4] bg-white/10 px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">Close</button></div>
                </div>
              </div></div>
            </div>
          )}
        </div></section>

        <section id="why" className="border-y border-[#2F2FE4]/30 bg-[#080616]">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
    {/* 2-Column Layout: Left Content, Right CardSwap */}
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
      
      {/* LEFT SIDE: Text Content */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="eyebrow">Why Choose Us?</p>
        <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight text-white">
          Technology That Drives <span className="gradient-text">Business Growth</span>
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-white/80">
          Plain-language advice. No jargon. Clear choices and costs. Installed, tested and handed over — ready to use.
        </p>
        
        {/* Optional: Add a list of features below the text to fill the left side */}
        <ul className="mt-8 space-y-4">
          {whyItems.slice(0, 4).map((w) => (
            <li key={w.title} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#2F2FE4]">
                <w.icon size={16} />
              </span>
              <div>
                <h3 className="text-sm font-medium text-white">{w.title}</h3>
                <p className="text-xs text-white/60">{w.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={() => chooseService("Request a Quote — IT Infrastructure")}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-white hover:text-[#080616] hover:scale-105"
        >
          Start with a free consultation <ArrowRight size={16} />
        </button>
      </div>

      {/* RIGHT SIDE: CardSwap */}
      <div className="relative h-[500px] w-full sm:h-[600px] flex items-center justify-center lg:justify-end">
        {/* 
          CardSwap Props Explanation:
          - width/height: The size of individual cards
          - cardDistance/verticalDistance: How far apart the cards stack
          - delay: How fast they auto-swap (in ms)
        */}
        <CardSwap
          width={340}
          height={400}
          cardDistance={40}
          verticalDistance={40}
          delay={4000}
          pauseOnHover={true}
          theme="dark"
        >
          {/* Generate the cards directly inside CardSwap using your whyItems data */}
          {whyItems.map((item, index) => (
            <div
              key={item.title}
              className="flex h-full w-full flex-col justify-between overflow-hidden rounded-[18px] p-6"
              style={{
                background: 'linear-gradient(180deg, #3a3644 0%, #27242f 100%)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
              }}
            >
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white mb-6">
                  <item.icon size={24} />
                </span>
                <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {item.desc}
                </p>
              </div>
              
              {/* Bottom decoration */}
              <div className="mt-6 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-white/40">
                <span>0{index + 1}</span>
                <span>TechVista</span>
              </div>
            </div>
          ))}
        </CardSwap>
      </div>
      
    </div>
  </div>
</section>

        <section id="industries" className="bg-[#1A1953]">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
    
    <div className="max-w-3xl">
      <p className="eyebrow">Industries We Serve</p>
      <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
        Industries We Serve — <span className="text-white">Tailored IT For Every Business</span>
      </h2>
      <p className="mt-3 text-[17px] leading-relaxed text-white/80">
        One partner, different needs. See what we build for YOUR industry — real work, installed and working on site.
      </p>
    </div>

    {/* Filters */}
    <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Filter industries">
      {industryFilters.map((f) => (
        <button 
          key={f} 
          role="tab" 
          aria-selected={industryFilter === f} 
          onClick={() => {
            setIndustryFilter(f);
            // Reset slider to start when filter changes
            if (industrySliderRef.current) industrySliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            setIndustryIndex(0);
          }} 
          className={`rounded-full px-4 py-2.5 text-sm font-normal transition ${
            industryFilter === f 
              ? "bg-[#2F2FE4] text-white shadow-lg" 
              : "bg-white/10 text-white ring-1 ring-[#2F2FE4] hover:bg-white/20"
          }`}
        >
          {f}
        </button>
      ))}
    </div>

    <p className="mt-3 text-sm text-white/80" role="status">
      Showing <strong className="text-white">{detailedIndustries.filter((c) => industryFilter === "All" || c.filter === industryFilter).length}</strong> {industryFilter === "All" ? "industries" : `${industryFilter} solution`}. Tap View Full Details to open the full screen for that industry.
    </p>

    {/* ────────── INDUSTRIES SLIDER ────────── */}
    <div className="relative mt-8">
      
      {/* Desktop Arrows */}
      <button 
        onClick={() => scrollIndustries(-1)} 
        aria-label="Previous industry" 
        className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-left-6"
      >
        <ArrowLeft size={20} />
      </button>
      
      <button 
        onClick={() => scrollIndustries(1)} 
        aria-label="Next industry" 
        className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-right-6"
      >
        <ArrowRight size={20} />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={industrySliderRef} 
        onScroll={onIndustryScroll} 
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-4"
      >
        {detailedIndustries
          .filter((c) => industryFilter === "All" || c.filter === industryFilter)
          .map((card) => (
            <article 
              key={card.id} 
              data-industry-card
              className="flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] glass transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[400px] md:w-[460px]"
            >
              <div className="relative h-52 w-full overflow-hidden sm:h-60">
                <img src={card.image} alt={`${card.name} — ${card.status}`} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-[#080616] shadow-lg">{card.status}</span>
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#080616]/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                  <card.icon size={14} />{card.filter}
                </span>
              </div>
              
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-[22px] font-medium leading-tight text-white [overflow-wrap:anywhere]">{card.name}</h3>
                <p className="mt-1 text-sm font-normal text-white/70">{card.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80 [overflow-wrap:anywhere]">{card.detail}</p>
                
                <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white">What We Do For This Industry</p>
                <ul className="mt-3 space-y-2">
                  {card.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-seminormal leading-snug text-white">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-white" />
                      <span className="[overflow-wrap:anywhere]">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 rounded-2xl border border-[#2F2FE4] bg-white/10 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Example Project</p>
                  <p className="mt-1.5 text-sm font-seminormal leading-relaxed text-white [overflow-wrap:anywhere]">{card.example}</p>
                  <p className="mt-1 text-xs font-normal text-white">{card.timeline}</p>
                </div>
                
                <div className="mt-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">Popular Products</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {card.products.map((p) => (
                      <button key={p} onClick={() => chooseCatalogCategory(card.name, p)} className="rounded-full border border-[#2F2FE4] bg-[#080616] px-3 py-1.5 text-xs font-normal text-white transition hover:bg-[#2F2FE4] [overflow-wrap:anywhere]">
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button onClick={() => openIndustry(card.id)} className="mt-auto pt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white shadow-md hover:bg-white hover:text-[#080616]">
                  View Full Details <ArrowRight size={16} />
                </button>
              </div>
            </article>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Industry slides">
        {detailedIndustries
          .filter((c) => industryFilter === "All" || c.filter === industryFilter)
          .map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={industryIndex === i}
              aria-label={`Go to ${c.name}`}
              onClick={() => goToIndustry(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                industryIndex === i 
                  ? "w-7 bg-[#2F2FE4] shadow-lg" 
                  : "w-2.5 bg-white/40 hover:bg-white/80"
              }`}
            />
        ))}
      </div>

    </div>
    {/* ────────── END SLIDER ────────── */}

    <div className="mt-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#2F2FE4] to-[#080616] p-[1.5px]">
      <div className="flex flex-col gap-4 rounded-[27px] bg-[#080616] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="text-xl font-medium text-white sm:text-2xl">Not Sure Which Industry Fits You?</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80 [overflow-wrap:anywhere]">
            We also serve: <strong className="text-white">Professional Services, Hospitality, Real Estate, NGOs, Coaching Institutes</strong> — Talk to an Expert
          </p>
        </div>
        <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2F2FE4] px-5 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-[#080616]">
          Talk to an Expert <ArrowRight size={16} />
        </button>
      </div>
    </div>
    
  </div>
</section>

        
<section id="certifications" className="relative overflow-hidden bg-[#162E93] py-16 sm:py-20">

  <div className="mx-auto max-w-7xl px-4 sm:px-6">

    {/* Heading */}
    <div className="max-w-3xl">
      <p className="eyebrow">Certifications & Partnerships</p>

      <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
        Certified. Authorized.
        <span className="text-blue-200"> Genuine — always.</span>
      </h2>

      <p className="mt-3 leading-relaxed text-white/80">
        We work with leading technology brands so your products are genuine,
        supported and covered.
      </p>
    </div>

    {/* Infinite Logo Marquee */}
    <div className="relative mt-12 overflow-hidden">

      {/* Left / Right Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#162E93] to-transparent sm:w-28" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#162E93] to-transparent sm:w-28" />

      {/* Moving Track */}
      <div className="certification-marquee flex w-max">

        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center gap-5 px-2 sm:gap-8 sm:px-4"
            aria-hidden={group === 1}
          >
            {certifications.map((c, i) => (
              <div
                key={`${group}-${i}`}
                className="group flex h-28 min-w-[180px] items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.15] sm:min-w-[220px]"
              >
                <BadgeCheck
                  size={25}
                  className="shrink-0 text-cyan-300 transition-transform group-hover:scale-110"
                />

                <span className="whitespace-nowrap text-base font-medium text-white">
                  {c}
                </span>
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>

    {/* Genuine Products */}
    <div className="mt-12 rounded-[24px] border border-white/20 bg-[#080616]/80 p-5 backdrop-blur-xl sm:p-7">

      <p className="flex flex-wrap items-center gap-2 text-lg font-medium text-white">
        <ShieldCheck className="text-cyan-300" />
        Genuine Products Only
      </p>

      <p className="mt-2 text-sm leading-relaxed text-white/70">
        GST Invoice + Manufacturer Warranty on Every Product.
        No grey imports, no refurbished-as-new, no licence shortcuts —
        your invoice is your warranty proof.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {[
          "GST Invoice",
          "Manufacturer Warranty",
          "Licensed Software",
          "Sealed & Genuine",
        ].map((x) => (
          <span
            key={x}
            className="rounded-full border border-white/10 bg-[#2F2FE4] px-4 py-2 text-xs font-normal text-white"
          >
            {x}
          </span>
        ))}
      </div>

    </div>

  </div>
</section>


        <section id="case-studies" className="bg-[#080616]">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
    
    <div className="max-w-3xl">
      <p className="eyebrow">Case Studies</p>
      <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
        Real work. Real <span className="gradient-text">results.</span>
      </h2>
      <p className="mt-3 leading-relaxed text-white/80">
        The challenge, the solution and the result — for projects like yours. Six recent projects, with real on-site photos.
      </p>
    </div>

    {/* ────────── CASE STUDIES SLIDER ────────── */}
    <div className="relative mt-8">
      
      {/* Desktop Arrows */}
      <button 
        onClick={() => scrollCaseStudies(-1)} 
        aria-label="Previous case study" 
        className="absolute -left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-left-6"
      >
        <ArrowLeft size={20} />
      </button>
      
      <button 
        onClick={() => scrollCaseStudies(1)} 
        aria-label="Next case study" 
        className="absolute -right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#2F2FE4] text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-white hover:text-[#080616] md:grid lg:-right-6"
      >
        <ArrowRight size={20} />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={caseStudySliderRef} 
        onScroll={onCaseStudyScroll} 
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-4"
      >
        {caseStudies.map((cs) => (
          <article 
            key={cs.title} 
            data-case-card
            className="flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] glass transition hover:-translate-y-1 sm:w-[380px] lg:w-[400px]"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img src={cs.image} alt={cs.title} className="h-full w-full object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#080616] shadow">
                {cs.tag}
              </span>
            </div>
            
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl font-medium leading-tight text-white [overflow-wrap:anywhere]">{cs.title}</h3>
              <p className="mt-1 text-xs font-normal text-white/60">{cs.meta}</p>
              
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Challenge</p>
                  <ul className="mt-2 space-y-1.5">
                    {cs.challenge.map((x) => (
                      <li key={x} className="flex gap-2 text-sm text-white/80">
                        <span className="text-white">•</span>
                        <span className="[overflow-wrap:anywhere]">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Solution</p>
                  <ul className="mt-2 space-y-1.5">
                    {cs.solution.map((x) => (
                      <li key={x} className="flex gap-2 text-sm text-white/80">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-white" />
                        <span className="[overflow-wrap:anywhere]">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-[#2F2FE4]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white">Result</p>
                  <ul className="mt-2 space-y-1.5">
                    {cs.result.map((x) => (
                      <li key={x} className="flex gap-2 text-sm font-normal text-white">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-white" />
                        <span className="[overflow-wrap:anywhere]">{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button onClick={() => chooseService("Request a Quote — IT Infrastructure")} className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80">
                Get a similar result <ArrowRight size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5" role="tablist" aria-label="Case study slides">
        {caseStudies.map((cs, i) => (
          <button
            key={cs.title}
            role="tab"
            aria-selected={caseStudyIndex === i}
            aria-label={`Go to ${cs.title}`}
            onClick={() => goToCaseStudy(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              caseStudyIndex === i 
                ? "w-7 bg-[#2F2FE4] shadow-lg" 
                : "w-2.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
    {/* ────────── END SLIDER ────────── */}

    {downloadMsg && (
      <p role="status" className="mt-8 rounded-2xl bg-[#1A1953] px-4 py-3 text-sm font-normal text-white ring-1 ring-[#2F2FE4]">
        {downloadMsg}
      </p>
    )}
    
   
    
  </div>
</section>

        {/* ═══════════════════════════════════════════════════════════════
    BRANDS SECTION — With Real Logos
    ═══════════════════════════════════════════════════════════════ */}
<section id="brands" className="border-y border-[#2F2FE4]/30 bg-[#080616]">
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
    <div className="text-center">
      <p className="eyebrow">Our Brand Partners</p>
      <h2 className="mt-2 text-[clamp(1.8rem,4vw,2.9rem)] font-medium leading-tight text-white">
        Trusted by the <span className="gradient-text">world's best</span>
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-white/80">
        We are authorized partners for leading technology brands — genuine products, full warranty and certified support.
      </p>
    </div>

    {/* Logo Grid */}
    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {partnerLogos.map((brand) => (
        <div
          key={brand.name}
          className="group relative flex h-28 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F2FE4] hover:bg-white/[0.07] hover:shadow-xl hover:shadow-[#2F2FE4]/10"
        >
          {/* Logo mark */}
          <div className="flex h-10 items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {brand.svg}
          </div>
          {/* Brand name */}
          <span className="text-xs font-medium text-white/60 transition-colors group-hover:text-white">
            {brand.name}
          </span>
          {/* Hover glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${brand.color}15, transparent 70%)`,
            }}
          />
        </div>
      ))}
    </div>

    {/* Trust badges */}
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
        <BadgeCheck size={16} className="text-[#90CAF9]" />
        <span className="text-xs font-medium text-white/70">100% Genuine Products</span>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
        <ShieldCheck size={16} className="text-[#90CAF9]" />
        <span className="text-xs font-medium text-white/70">Manufacturer Warranty</span>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
        <Handshake size={16} className="text-[#90CAF9]" />
        <span className="text-xs font-medium text-white/70">Authorized Partner</span>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
        <Zap size={16} className="text-[#90CAF9]" />
        <span className="text-xs font-medium text-white/70">Fast Delivery</span>
      </div>
    </div>
  </div>
</section>

        <section className="bg-[#162E93] overflow-hidden">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      
      {/* ────────── LEFT SIDE: HEADING & CONTROLS ────────── */}
      <div className="lg:col-span-4 flex flex-col items-start pr-4">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
          <Quote size={32} className="text-white/80" fill="currentColor" />
        </div>
        
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-medium leading-tight text-white">
          What our<br />customers are<br />saying
        </h2>
        
        {/* Arrows to scroll the slider */}
        <div className="mt-8 flex items-center gap-3">
          <button 
            onClick={() => scrollTestimonials(-1)} 
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white hover:text-[#162E93]"
            aria-label="Previous review"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={() => scrollTestimonials(1)} 
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-transparent text-white transition hover:bg-white hover:text-[#162E93]"
            aria-label="Next review"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        
      </div>

      {/* ────────── RIGHT SIDE: HORIZONTAL SLIDER ────────── */}
      <div className="lg:col-span-8 relative w-full">
        {/* 
          The slider container. 
          We use negative margin and padding so the cards can bleed off the right edge naturally.
        */}
        <div 
          ref={testimonialSliderRef}
          onScroll={testimonialSliderRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {testimonials.map((item, i) => (
            <div 
              key={i}
              className="flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-2xl bg-white p-6 shadow-xl sm:w-[340px]"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-[#00B67A]">
                  {Array.from({ length: item.stars }).map((_, starIdx) => (
                    <Star key={starIdx} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="mt-5 text-sm leading-relaxed text-gray-700 line-clamp-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#2F2FE4] to-[#080616] text-xs font-bold text-white">
                  {item.initials}
                </span>
                <div className="text-left">
                  <span className="block text-sm font-semibold text-gray-900">{item.role}</span>
                  <span className="block text-xs text-gray-500">{item.org}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Invisible spacer to allow the last card to scroll fully to the left */}
          <div className="w-4 shrink-0 sm:w-12" />
        </div>
      </div>

    </div>
  </div>
</section>

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

        {/* ═══════════════════════════════════════════════════════════════
    FOOTER
    ═══════════════════════════════════════════════════════════════ */}
<footer className="relative border-t border-[#2F2FE4]/30 bg-[#050412] text-white">

  {/* Top CTA Band */}
  <div className="border-b border-[#2F2FE4]/20 bg-gradient-to-r from-[#0a0820] via-[#120f3d] to-[#0a0820]">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
      <div className="max-w-xl text-center md:text-left">
        <h3 className="text-[clamp(1.3rem,3vw,1.9rem)] font-medium leading-tight">
          Ready to transform your <span className="gradient-text">IT infrastructure</span>?
        </h3>
        <p className="mt-2 text-sm text-white/70">
          Get a free consultation and a clear, vendor-neutral roadmap — no obligations.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => chooseService("Request a Quote — IT Infrastructure")}
          className="inline-flex items-center gap-2 rounded-full bg-[#2F2FE4] px-6 py-3.5 text-sm font-medium text-white shadow-xl transition-all hover:bg-white hover:text-[#080616] hover:scale-105 active:scale-95"
        >
          Get a Free Quote <ArrowRight size={16} />
        </button>
        <a
          href="tel:+919000000000"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white"
        >
          <Phone size={16} /> Call Now
        </a>
      </div>
    </div>
  </div>

  {/* Main Footer Grid */}
  <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">

      {/* Column 1: Brand + Contact (span 4) */}
      <div className="lg:col-span-4">
        <button onClick={() => goTo("home")} className="flex items-center gap-2.5 text-left" aria-label="TechVista — home">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#2F2FE4] to-[#162E93] text-[24px] font-medium text-white shadow-lg">
            T
          </span>
          <span className="leading-none">
            <span className="block text-[21px] font-medium tracking-tight text-white">
              Tech<span className="gradient-text">Vista</span>
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.28em] text-white/80">
              Solutions
            </span>
          </span>
        </button>

        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
          End-to-end technology solutions — hardware, software, networking, cybersecurity, cloud and managed IT for businesses across India.
        </p>

        <div className="mt-6 space-y-3">
          <a href="tel:+919000000000" target="_blank" rel="noopener" className="flex items-start gap-3 text-sm text-white/80 transition hover:text-white">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
              <Phone size={15} />
            </span>
            <span>
              <span className="block text-[11px] uppercase tracking-wider text-white/50">Call us</span>
              +91 90000 00000
            </span>
          </a>
          <a href="mailto:info@yourcompany.com" target="_blank" rel="noopener" className="flex items-start gap-3 text-sm text-white/80 transition hover:text-white">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
              <Mail size={15} />
            </span>
            <span className="[overflow-wrap:anywhere]">
              <span className="block text-[11px] uppercase tracking-wider text-white/50">Email us</span>
              info@yourcompany.com
            </span>
          </a>
          <div className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
              <MapPin size={15} />
            </span>
            <span>
              <span className="block text-[11px] uppercase tracking-wider text-white/50">Visit us</span>
              123 Tech Park, Bengaluru, Karnataka 560001
            </span>
          </div>
          <div className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#2F2FE4]/20 text-[#90CAF9]">
              <Clock size={15} />
            </span>
            <span>
              <span className="block text-[11px] uppercase tracking-wider text-white/50">Working hours</span>
              Mon–Sat: 9:00 AM – 7:00 PM
            </span>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          {[
            { label: "LinkedIn", icon: "in", href: "https://linkedin.com" },
            { label: "Twitter / X", icon: "X", href: "https://x.com" },
            { label: "Facebook", icon: "f", href: "https://facebook.com" },
            { label: "Instagram", icon: "ig", href: "https://instagram.com" },
            { label: "YouTube", icon: "▶", href: "https://youtube.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/70 transition hover:border-[#2F2FE4] hover:bg-[#2F2FE4] hover:text-white"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Column 2: Products (span 2) */}
      <div className="lg:col-span-2">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Products</h4>
        <ul className="mt-4 space-y-2.5">
          {[
            { label: "Hardware", target: "products" },
            { label: "Networking", target: "products" },
            { label: "Cybersecurity", target: "products" },
            { label: "Storage & Backup", target: "products" },
            { label: "Software", target: "products" },
            { label: "Cloud Solutions", target: "products" },
            { label: "Power & Infrastructure", target: "products" },
          ].map((l) => (
            <li key={l.label}>
              <button
                onClick={() => goTo(l.target)}
                className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
              >
                <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Solutions (span 2) */}
      <div className="lg:col-span-2">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Solutions</h4>
        <ul className="mt-4 space-y-2.5">
          {[
            { label: "IT Consulting", id: "it-consulting" },
            { label: "Infrastructure Deployment", id: "infrastructure-deployment" },
            { label: "Network Design", id: "network-design" },
            { label: "Cloud Migration", id: "cloud-migration" },
            { label: "Security Assessment", id: "security-assessment" },
            { label: "AMC Support", id: "amc-support" },
            { label: "Managed IT", id: "managed-it" },
            { label: "Helpdesk Support", id: "helpdesk-support" },
          ].map((l) => (
            <li key={l.label}>
              <button
                onClick={() => { setSelectedSolution(l.id); goTo("solutions"); }}
                className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
              >
                <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Industries (span 2) */}
      <div className="lg:col-span-2">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Industries</h4>
        <ul className="mt-4 space-y-2.5">
          {[
            "Education", "Healthcare", "Manufacturing", "Retail",
            "Financial Services", "Government", "IT / Startups", "Logistics",
          ].map((label) => (
            <li key={label}>
              <button
                onClick={() => footerIndustry(label)}
                className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
              >
                <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                <span>{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 5: Newsletter + Quick Links (span 2) */}
      <div className="lg:col-span-2">
        <h4 className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Stay Updated</h4>
        <p className="mt-4 text-sm leading-relaxed text-white/60">
          Get IT tips, product updates and exclusive offers — straight to your inbox.
        </p>
        
       

        <h4 className="mt-6 text-[11px] font-medium uppercase tracking-[0.16em] text-[#90CAF9]">Quick Links</h4>
        <ul className="mt-3 space-y-2">
          {[
            { label: "About Us", target: "why" },
            { label: "Case Studies", target: "case-studies" },
            { label: "Certifications", target: "certifications" },
            { label: "Partner With Us", target: "contact" },
            { label: "Support", target: "contact" },
          ].map((l) => (
            <li key={l.label}>
              <button
                onClick={() => {
                  if (l.label === "Partner With Us") { setContactTab("partner"); }
                  if (l.label === "Support") { setContactTab("support"); }
                  goTo(l.target);
                }}
                className="group flex items-start gap-1.5 text-left text-sm text-white/70 transition hover:text-white"
              >
                <ChevronRight size={12} className="mt-1 shrink-0 text-[#2F2FE4] transition group-hover:translate-x-0.5" />
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Certifications Strip */}
  <div className="border-t border-white/5">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
        Certified & Authorized Partner
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {certifications.map((c) => (
          <span key={c} className="text-xs font-normal text-white/50">
            {c}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/5 bg-[#030209]">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
      <p className="text-center text-xs text-white/40 sm:text-left">
        © {new Date().getFullYear()} TechVista Solutions. All rights reserved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
        {["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"].map((l) => (
          <button key={l} className="text-xs text-white/40 transition hover:text-white">
            {l}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-xs text-white/40">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Made in India
      </div>
    </div>
  </div>
</footer>
      </main>

      {industryDetail && (
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

        
      )}
    </div>



  );
}



