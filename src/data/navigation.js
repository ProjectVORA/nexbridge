export const serviceOptions = [
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

export const industryOptions = ["Education", "Healthcare", "Manufacturing", "Retail", "Finance", "Government", "IT", "Logistics", "Other"];
export const budgetOptions = ["Under ₹50,000", "₹50,000 – ₹2 Lakh", "₹2 Lakh – ₹10 Lakh", "₹10 Lakh – ₹50 Lakh", "₹50 Lakh+", "Not sure yet — advise me"];

export const NAV = [
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
