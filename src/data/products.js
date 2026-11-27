import {
  Cpu, Network, ShieldCheck, HardDrive, Code2, Cloud, Zap, Wifi, Plane, Bot,
  Headphones, Package, Users, ShoppingCart, Briefcase, MonitorPlay,
} from "lucide-react";

import networkingImg from "../assets/52be248096e2ed3b-image_20261122_182349.webp";
import cybersecurityImg from "../assets/a55cd635e7d9c13e-image_20261122_211814.webp";
import cloudImg from "../assets/3ef046908ae2d7b4-image_20261122_182343_2.webp";
import softwareImg from "../assets/4c43f535b7a9288a-image_20261122_182343_1.webp";
import storageImg from "../assets/0ab75f805e94eca6-image_20261122_211815.webp";
import serversImg from "../assets/c68ab2400b2cd06f-image_20261122_211751.webp";
import hardwareImg from "../assets/7a51b6ad33a244a4-image_20261122_182342.webp";

export const productCards = [
  { title: "Hardware Solutions", tag: "Reliable computing for modern businesses", desc: "Genuine laptops, desktops, servers and peripherals — supplied, installed and covered by warranty support, ready for your team from day one.", image: hardwareImg, icon: Cpu, items: ["Laptops", "Desktops & Workstations", "Servers", "Monitors & Accessories", "Printers & Scanners"], catalogId: "hardware", service: "Hardware — Laptops" },
  { title: "Networking Solutions", tag: "Secure, high-performance networks", desc: "Fast, stable connectivity across every room, floor and branch — designed, cabled and tested for real user density.", image: networkingImg, icon: Network, items: ["Routers", "Switches", "Wi-Fi Solutions", "Structured Cabling", "Network Accessories"], catalogId: "networking", service: "Networking — Routers" },
  { title: "Cybersecurity Solutions", tag: "Layered protection against modern threats", desc: "Protect devices, email, accounts and access with firewalls, endpoint protection, verified logins and email security.", image: cybersecurityImg, icon: ShieldCheck, items: ["Firewalls", "Antivirus & Endpoint Security", "MFA & Identity Management", "Email Security"], catalogId: "cybersecurity", service: "Cybersecurity — Firewalls" },
  { title: "Storage & Backup Solutions", tag: "Protect your critical business data", desc: "Keep every file safe, recoverable and easy to reach — on-site, in the cloud, or both, with tested recovery.", image: storageImg, icon: HardDrive, items: ["NAS Storage", "SAN Storage", "Backup Solutions", "Disaster Recovery"], catalogId: "storage", service: "Storage & Backup — NAS" },
  { title: "Software Solutions", tag: "Licensed software for productivity", desc: "Genuine, licensed software for everyday work and business operations — set up, migrated and kept up to date.", image: softwareImg, icon: Code2, items: ["Microsoft 365", "Windows Licensing", "ERP Solutions", "CRM Solutions", "Business Applications"], catalogId: "software", service: "Software — Microsoft 365" },
  { title: "Cloud Solutions", tag: "Migrate, backup and scale", desc: "Scale without buying more hardware — platforms, storage, backup and managed cloud care on Azure, AWS and Google Cloud.", image: cloudImg, icon: Cloud, items: ["Microsoft Azure", "AWS Services", "Google Cloud", "Cloud Backup"], catalogId: "cloud", service: "Cloud Solutions — Microsoft Azure" },
  { title: "Power & Infrastructure Solutions", tag: "Power that never stops", desc: "No more lost work from a power cut — protection, distribution and monitoring for every rack, room and data centre.", image: serversImg, icon: Zap, items: ["UPS Systems", "Server Racks", "PDUs", "Data Center Solutions"], catalogId: "power", service: "Power & Infrastructure — UPS Systems" },
];

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

export const hardwareCards = [card1, card2, card3, card4];

export const softwareCards = [
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
