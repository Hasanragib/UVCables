import BatteryCable_EV_HV from "../assets/BatteryCable_EV_HV.webp";
import PVCControlCable from "../assets/PVCControlCable.webp";
import TrailingCable from "../assets/TrailingCable.webp";
import XLPE from "../assets/XLPE3.webp";
import PVCCable from "../assets/PVCCable.webp";
import EPR_PCP from "../assets/EPR_PCP.webp";
import SiliconeCable from "../assets/SiliconeCable.webp";
import ButylCable from "../assets/ButylCable.webp";
import RubberCable from "../assets/RubberCable.webp";
import Solar_Cable from "../assets/Solar_Cable.webp";
import CableTower from "../assets/CableTower.webp";
import SolarImage from "../assets/SolarImage.webp";
import CableStriping from "../assets/CableStriping.webp";
import SiliconeTubesProfiles from "../assets/SiliconeTubesProfiles.webp";
import TeflonCable from "../assets/TeflonCable.webp";
import CopperRope3 from "../assets/CopperRope3.webp";
import CopperWire from "../assets/CopperWire1.webp";
import CopperBraidWire from "../assets/CopperBraidWire2.webp";

// ─── BRAND ───────────────────────────────────────────────────────────────────
export const BRAND = {
  name: "UV Cables",
  short: "UVC",
  tagline: "EST. 1986 | Powering Industry",
  location: "Delhi NCR",
  phone: "+91 9818088873",
  email: "info@uvcables.com",
  address:
    "27/1/2, Street No. 10, Park Side, Sangam Vihar, Delhi-110084, India",
  website: "https://uvcables.com",
  social: {
    linkedin: "https://www.linkedin.com/in/uvcables",
    instagram: "https://www.instagram.com/uvcables",
    blogger: "https://uvcables.blogspot.com/",
  },
};

// ─── USE CASES ────────────────────────────────────────────────────────────────
export const USE_CASES = [
  {
    id: "all",
    label: "All Cables",
    icon: "⬡",
  },
  {
    id: "power",
    label: "Power Distribution",
    icon: "⚡",
  },
  {
    id: "wiring",
    label: "Building & Wiring",
    icon: "🏗️",
  },
  {
    id: "control",
    label: "Control & Automation",
    icon: "🎛️",
  },
  {
    id: "flexible",
    label: "Flexible & Portable",
    icon: "🔄",
  },
  {
    id: "hightemp",
    label: "High Temperature",
    icon: "🌡️",
  },
  {
    id: "specialty",
    label: "Chemical",
    icon: "⚗️",
  },
  {
    id: "newenergy",
    label: "Solar & EV",
    icon: "☀️",
  },
];

// ─── IS / IEC STANDARDS ──────────────────────────────────────────────────────
export const IS_STANDARDS = [
  { id: "all", label: "All Standards", icon: "📋", desc: "" },
  {
    id: "is694",
    label: "IS 694",
    icon: "📄",
    desc: "PVC Insulated Cables (less than 1.1 kV)",
  },
  {
    id: "is1554",
    label: "IS 1554",
    icon: "📄",
    desc: "PVC Sheathed Cables, Pt.1 & Pt.2",
  },
  { id: "is7098", label: "IS 7098", icon: "📄", desc: "XLPE Insulated Cables" },
  {
    id: "is9968",
    label: "IS 9968",
    icon: "📄",
    desc: "Elastomer Insulated Cables",
  },
  { id: "iec62930", label: "IEC 62930", icon: "🌐", desc: "Solar PV Cables" },
  {
    id: "iec62893",
    label: "IEC 62893",
    icon: "🌐",
    desc: "EV Charging Cables",
  },
  {
    id: "nostandard",
    label: "Custom / Other",
    icon: "🔧",
    desc: "Silicone, Butyl — by customer spec",
  },
];

// ─── STANDARDS REFERENCE TABLE ───────────────────────────────────────────────
export const STANDARDS_TABLE = [
  {
    std: "IS 694 : 2010",
    scope: "PVC insulated cables for working voltages up to 1100 V",
    cables: "PVC Cables",
  },
  {
    std: "IS 1554 Pt.1 : 1988",
    scope:
      "PVC insulated (heavy duty) cables for working voltages up to 1100 V",
    cables: "PVC Sheathed Power Cables",
  },
  {
    std: "IS 1554 Pt.2 : 1988",
    scope: "PVC insulated & sheathed cables up to 1100 V (control use)",
    cables: "Control & Instrumentation",
  },
  {
    std: "IS 7098 Pt.1 : 1988",
    scope: "XLPE insulated cables for working voltages up to 1.1 kV",
    cables: "XLPE Power Cables (LT)",
  },
  {
    std: "IS 7098 Pt.2 : 1985",
    scope: "XLPE insulated cables from 3.3 kV up to and including 33 kV",
    cables: "XLPE Power Cables (HT)",
  },
  {
    std: "IS 9968 Pt.1 : 1988",
    scope: "Elastomer insulated cables for voltages up to 1.1 kV",
    cables: "Rubber, Butyl, EPR Cables",
  },
  {
    std: "IS 9968 Pt.2 : 1981",
    scope: "Elastomer insulated cables for voltages from 1.1 kV to 33 kV",
    cables: "EPR/PCP Trailing & Reeling",
  },
  {
    std: "IEC 62930 : 2017",
    scope:
      "Electric cables for photovoltaic systems with voltage rating up to 1.8 kV DC",
    cables: "Solar DC Cables",
  },
  {
    std: "IEC 62893 : 2017",
    scope: "Charging cables for electric vehicles",
    cables: "EV Charging Cables",
  },
  {
    std: "IS 11149 : 1984",
    scope:
      "Specification for silicone rubber compounds for electrical purposes",
    cables: "Silicone Tubes & Profiles",
  },
  {
    std: "Customer Spec",
    scope:
      "PTFE / Teflon cables and silicone profiles supplied to buyer's drawing and custom specifications",
    cables: "PTFE Cables, Silicone Tubes",
  },
];

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: "pvc",
    label: "PVC Cables",
    short: "PVC",
    dot: "#D97706",
    icon: "⚡",
    useCases: ["power", "wiring"],
    isStandards: ["is694", "is1554"],
    isDisplay: " As per IS 694 / IS 1554 Pt.1",
    image: PVCCable,
    imageAlt: "PVC insulated cables coiled",
    metaDesc:
      "PVC insulated cables for industrial wiring and panels. IS 694 & IS 1554 compliant.",
    description:
      "Polyvinyl Chloride insulated & sheathed cables for general wiring, panels, and industrial installations. Cost-effective, flame-retardant, and moisture-resistant.",
    specs: [
      "Voltage: Up to 1.1 kV",
      "Temp Range: -15°C to +70°C",
      "Insulation: PVC (Type A/B/C)",
      "Conductor: Copper / Aluminium",
      "Standards: As per IS 694, IS 1554 Pt.1",
    ],
    applications: [
      "Industrial panels",
      "Building wiring",
      "Control boxes",
      "Machine tools",
    ],
  },
  {
    id: "xlpe",
    label: "XLPE Cables",
    short: "XLPE",
    dot: "#DC2626",
    icon: "🔌",
    useCases: ["power"],
    isStandards: ["is7098"],
    isDisplay: "As per IS 7098 Pt.1 / Pt.2",
    image: XLPE,
    imageAlt: "XLPE high voltage power cable",
    metaDesc:
      "Cross-linked polyethylene cables for medium and high voltage power distribution. IS 7098 compliant.",
    description:
      "Cross-linked polyethylene insulated cables for medium and high voltage power distribution. Superior thermal performance and higher current-carrying capacity over standard PVC.",
    specs: [
      "Voltage: 1.1 kV – 33 kV",
      "Temp Range: Up to +90°C (continuous)",
      "Insulation: XLPE",
      "Armor: SWA / STA optional",
      "Standards: As per IS 7098 Pt.1 & Pt.2",
    ],
    applications: [
      "Power substations",
      "Underground distribution",
      "Industrial feeders",
      "Grid connections",
    ],
  },
  {
    id: "silicone",
    label: "Silicone Cables",
    short: "SILIC",
    dot: "#2563EB",
    icon: "🌡️",
    useCases: ["hightemp", "wiring"],
    isStandards: ["nostandard"],
    isDisplay: "Customer Spec",
    image: SiliconeCable,
    imageAlt: "Silicone high temperature cable",
    metaDesc:
      "High-temperature silicone cables rated -60°C to +180°C for furnaces and steel plants.",
    description:
      "High-temperature flexible silicone cables designed for extreme heat environments. Excellent dielectric properties and flexibility even at low temperatures.",
    specs: [
      "Voltage: Up to 1.1 kV",
      "Temp Range: -60°C to +180°C",
      "Insulation: Silicone rubber",
      "Conductor: Tinned copper",
      "Flame: Self-extinguishing",
    ],
    applications: [
      "Furnaces & ovens",
      "Aerospace ground support",
      "Steel plants",
      "Lighting systems",
    ],
  },
  {
    id: "epr",
    label: "EPR / PCP Cables",
    short: "EPR",
    dot: "#059669",
    icon: "🟢",
    useCases: ["flexible", "power"],
    isStandards: ["is9968"],
    isDisplay: "As per IS 9968 Pt.1 & Pt.2",
    image: EPR_PCP,
    imageAlt: "EPR PCP flexible cable on drum",
    metaDesc:
      "EPR insulated, PCP sheathed cables for mining and crane applications. IS 9968 compliant.",
    description:
      "Ethylene Propylene Rubber insulated with Polychloroprene sheath. Excellent oil, weather, and ozone resistance for heavy-duty flexible use.",
    specs: [
      "Voltage: Up to 3.3 kV",
      "Temp Range: -40°C to +85°C",
      "Insulation: EPR",
      "Sheath: PCP (Neoprene)",
      "Standards: IS 9968 Pt.1 & Pt.2",
    ],
    applications: ["Mining", "Cranes", "Portable equipment", "Reeling drums"],
  },
  {
    id: "butyl",
    label: "Butyl Rubber Cables",
    short: "BUTYL",
    dot: "#7C3AED",
    icon: "🔵",
    useCases: ["specialty", "hightemp"],
    isStandards: ["nostandard"],
    isDisplay: "Customer Spec / As per IS 9968",
    image: ButylCable,
    imageAlt: "Butyl rubber specialty cable chemical plant",
    metaDesc:
      "Butyl rubber cables for nuclear and chemical plants. High radiation and steam resistance.",
    description:
      "Butyl rubber insulation for nuclear plants, chemical industries, and high-radiation environments. Superior steam and heat resistance.",
    specs: [
      "Voltage: Up to 1.1 kV",
      "Temp Range: Up to +110°C",
      "Insulation: Butyl Rubber",
      "Chemical: Excellent resistance",
      "Radiation: High resistance",
    ],
    applications: [
      "Nuclear plants",
      "Chemical plants",
      "Steam lines",
      "Marine use",
    ],
  },
  {
    id: "rubber",
    label: "Rubber Cables",
    short: "RUBBER",
    dot: "#EA580C",
    icon: "🟠",
    useCases: ["flexible", "wiring"],
    isStandards: ["is9968"],
    isDisplay: "As per IS 9968 Pt.1",
    image: RubberCable,
    imageAlt: "Rubber flexible cable for welding",
    metaDesc:
      "General purpose rubber cables for welding sets and portable tools. IS 9968 compliant.",
    description:
      "General-purpose flexible rubber cables for portable tools, welding sets, and equipment requiring frequent movement and mechanical flexibility.",
    specs: [
      "Voltage: Up to 1.1 kV",
      "Temp Range: -25°C to +60°C",
      "Insulation: Natural/Synthetic Rubber",
      "Highly flexible construction",
      "Standards: As per IS 9968 Pt.1",
    ],
    applications: [
      "Welding machines",
      "Portable tools",
      "Construction sites",
      "Agricultural pumps",
    ],
  },
  {
    id: "trailing",
    label: "Trailing Cables",
    short: "TRAIL",
    dot: "#B45309",
    icon: "🔶",
    useCases: ["flexible", "power"],
    isStandards: ["is9968"],
    isDisplay: "As per IS 9968 Pt.1 & Pt.2",
    image: TrailingCable,
    imageAlt: "Trailing cable on reeling drum crane",
    metaDesc:
      "Heavy-duty EPR/PCP trailing and reeling cables for EOT cranes and mining. IS 9968 Pt.2.",
    description:
      "Heavy-duty trailing and reeling cables for continuous movement applications like overhead cranes, stackers, and mining equipment.",
    specs: [
      "Voltage: Up to 6.6 kV",
      "Temp Range: -40°C to +85°C",
      "Insulation: EPR",
      "Sheath: PCP",
      "Tensile reinforced core",
    ],
    applications: [
      "EOT cranes",
      "Stackers / reclaimers",
      "Mining shovels",
      "Ship loaders",
    ],
  },
  {
    id: "control",
    label: "Control Cables",
    short: "CTRL",
    dot: "#0891B2",
    icon: "🎛️",
    useCases: ["control", "wiring"],
    isStandards: ["asperIs"],
    isDisplay: "As per IS",
    image: PVCControlCable,
    imageAlt: "Multi-core control cable PLC automation",
    metaDesc:
      "Multi-core screened control cables for PLC, DCS and automation. IS 1554 Pt.2 compliant.",
    description:
      "Multi-core control cables for instrumentation, signaling, and automation. Available with overall screen for EMI/RFI shielding.",
    specs: [
      "Voltage: Up to 1.1 kV",
      "Cores: 2 – 61 cores",
      "Insulation: Silicone, EPR, PVC, XLPE",
      "Shielding: Overall Al-foil or Cu braid",
      "Standards: As per IS",
    ],
    applications: [
      "PLC/DCS systems",
      "Automation panels",
      "Process control",
      "Signal transmission",
    ],
  },
  {
    id: "ev",
    label: "EV Cables",
    short: "EV",
    dot: "#059669",
    icon: "🔋",
    useCases: ["newenergy", "flexible"],
    isStandards: ["nostandard"],
    isDisplay: "Customer Spec",
    image: BatteryCable_EV_HV,
    imageAlt: "EV high voltage cable for electric vehicles",
    metaDesc: "High-Voltage EV Cables for Advanced Battery & Motor Connections",
    description:
      "Power your electric drivetrain with our high-performance, high-voltage (HV) EV cables. Engineered specifically for the rigorous demands of battery-to-inverter and inverter-to-motor links.",
    specs: [
      "Voltage: Up to 3.3 kV AC / 1.5 kV DC",
      "Current: Up to 200A",
      "Temp Range: -40°C to +150°C",
      "Jacket: Halogen-free TPE",
      "Standards: IEC 62893",
    ],
    applications: [
      "EV charging stations",
      "Type 2 / CCS2 connectors",
      "Fleet charging",
      "Public infrastructure",
    ],
  },
  {
    id: "solar",
    label: "Solar DC Cables",
    short: "SOLAR",
    dot: "#CA8A04",
    icon: "☀️",
    useCases: ["newenergy"],
    isStandards: ["nostandard"],
    isDisplay: "Customer Spec",
    image: Solar_Cable,
    imageAlt: "Solar DC cable installation rooftop photovoltaic",
    metaDesc:
      "Solar DC cables rated 1.8 kV for rooftop and utility solar. UV-resistant LSZH jacket. IEC 62930.",
    description:
      "Specially designed DC cables for solar photovoltaic installations. Double insulated, UV-stabilized, rated for outdoor rooftop and ground-mount systems.",
    specs: [
      "Voltage: Up to 1.8 kV DC",
      "Temp Range: -40°C to +90°C",
      "Insulation: XLPE/EVA",
      "Outer jacket: UV-resistant LSZH",
      "Standards: IEC 62930",
    ],
    applications: [
      "Rooftop solar",
      "Solar farms",
      "String inverters",
      "Module interconnection",
    ],
  },
  {
    id: "ptfe",
    label: "PTFE (Teflon) Cables",
    short: "PTFE",
    dot: "#00897B",
    icon: "🧪",
    useCases: ["specialty", "hightemp"],
    isStandards: ["nostandard"],
    isDisplay: "Customer Spec",
    image: TeflonCable,
    imageAlt: "PTFE Teflon cable insulation",
    metaDesc:
      "PTFE Teflon insulated cables for chemical, pharmaceutical and high temperature applications. Excellent chemical resistance up to +260°C.",
    description:
      "PTFE (Polytetrafluoroethylene / Teflon) insulated cables offering exceptional chemical resistance, low friction, and high temperature performance. Ideal for aggressive chemical and pharmaceutical environments.",
    specs: [
      "Voltage: Up to 1.1 kV",
      "Temp Range: -65°C to +260°C",
      "Insulation: PTFE (Teflon)",
      "Conductor: Nickel-plated / Silver-plated copper",
      "Chemical: Excellent resistance to all chemicals",
    ],
    applications: [
      "Chemical & pharmaceutical plants",
      "Laboratory equipment",
      "Aerospace & defence",
      "High temperature wiring",
    ],
  },
  {
    id: "silicone-tubes",
    label: "Silicone Tubes & Profiles",
    short: "SIL-T",
    dot: "#5C6BC0",
    icon: "⭕",
    useCases: ["hightemp", "specialty"],
    isStandards: ["nostandard"],
    isDisplay: "Customer Spec",
    image: SiliconeTubesProfiles,
    imageAlt: "Silicone tubes and profiles industrial",
    metaDesc:
      "Silicone rubber tubes, sleeves, and custom profiles for insulation, sealing, and protection in high temperature industrial applications.",
    description:
      "Silicone rubber tubes, sleeves, and custom extruded profiles for insulation, sealing, gasketing, and mechanical protection. Available in standard and custom cross-sections for industrial and OEM applications.",
    specs: [
      "Temp Range: -60°C to +200°C",
      "Material: Food-grade / Industrial silicone",
      "Hardness: 30–80 Shore A",
      "Custom profiles: Round, flat, D-section, U-section",
      "Colour: Red, black, translucent, custom",
    ],
    applications: [
      "OEM machine builders",
      "Gaskets & sealing",
      "Cable sleeving & protection",
      "Food & pharma equipment",
    ],
  },
  {
    id: "copper-rope",
    label: "Copper Ropes",
    short: "Cu-ROPE",
    dot: "#B87333",
    icon: "🔩",
    useCases: ["specialty", "wiring"],
    isStandards: ["nostandard"],
    isDisplay: "As Per IS 8130 / Customer Spec",
    image: CopperRope3,
    imageAlt: "Copper rope conductor",
    metaDesc:
      "Bare copper ropes for earthing, grounding, electrical connections and flexible conductor applications. Electrolytic grade copper.",
    description:
      "Bare copper ropes manufactured from electrolytic grade copper strands. Used for earthing, grounding, flexible electrical connections, and conductor applications requiring high conductivity and flexibility.",
    specs: [
      "Material: Electrolytic Grade Copper",
      "Construction: Multi-strand rope lay",
      "Sizes: 10 mm² to 400 mm²",
      "Finish: Bare / Tinned",
      "Standard: As Per IS 8130 / Customer Spec",
    ],
    applications: [
      "Earthing & grounding systems",
      "Flexible bus connections",
      "Transformer connections",
      "Battery cables",
    ],
  },
  {
    id: "copper-wire",
    label: "Copper Wires",
    short: "Cu-WIRE",
    dot: "#C85A17",
    icon: "〰️",
    useCases: ["specialty", "wiring"],
    isStandards: ["nostandard"],
    isDisplay: "As Per IS 8130 / IS 1897",
    image: CopperWire,
    imageAlt: "Tinned copper wire conductor",
    metaDesc:
      "Tinned copper wires for cable manufacturing, electrical connections and general conductor applications. Electrolytic grade copper.",
    description:
      "Tinned electrolytic copper wires for use in cable manufacturing, electrical connections, winding applications, and general conductor use. Available in round and sector-shaped profiles.",
    specs: [
      "Material: Electrolytic Grade Copper",
      "Sizes: 0.5 mm to 50 mm diameter",
      "Finish: Bare / Tinned / Silver-plated",
      "Temper: Soft / Hard / Half-hard",
      "Standard: As Per IS 8130 / IS 1897",
    ],
    applications: [
      "Cable conductor manufacturing",
      "Motor winding",
      "Electrical connections",
      "Earthing systems",
    ],
  },
  {
    id: "braided-copper",
    label: "Braided Copper Wires",
    short: "Cu-BRAID",
    dot: "#D97706",
    icon: "🔗",
    useCases: ["specialty", "flexible"],
    isStandards: ["nostandard"],
    isDisplay: "As per IS 8130 / Customer Spec",
    image: CopperBraidWire,
    imageAlt: "Braided tinned copper wire flexible connector",
    metaDesc:
      "Flexible braided tinned copper wire connectors and earthing straps for EMI shielding, earthing bonds, and flexible electrical connections.",
    description:
      "Flexible braided tinned copper wire assemblies for EMI/RFI shielding, earthing bonds, flexible bus bars, and vibration-resistant electrical connections. Available in flat braid, round braid, and custom configurations.",
    specs: [
      "Material: Electrolytic Grade Copper strands",
      "Finish: Bare / Tinned",
      "Construction: Flat braid / Round braid / Rope braid",
      "Sizes: 10 mm² to 120 mm²",
      "End fittings: Lugs / Bolted / Custom terminals",
    ],
    applications: [
      "EMI / RFI shielding",
      "Earthing bonds & straps",
      "Flexible bus bar connections",
      "Vibration-resistant connections",
    ],
  },
];

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: "⚡", name: "Power & Utilities", cables: "XLPE, PVC, Control" },
  { icon: "🏗️", name: "Construction", cables: "PVC, Rubber, Control" },
  { icon: "⛏️", name: "Mining", cables: "EPR/PCP, Trailing, Butyl" },
  { icon: "🤖", name: "Automation & OEM", cables: "Control, PVC, Silicone" },
  { icon: "🌞", name: "Solar Energy", cables: "Solar DC, XLPE" },
  { icon: "🚗", name: "EV Infrastructure", cables: "EV High Voltage, XLPE" },
  { icon: "🔥", name: "Steel & Foundry", cables: "Silicone, Butyl Rubber" },
  { icon: "⚗️", name: "Chemical Plants", cables: "EPR, Butyl, PVC" },
  { icon: "🏭", name: "General Industry", cables: "All Types" },
  { icon: "🛒", name: "Retail Distribution", cables: "PVC, XLPE, Solar" },
];

// ─── HERO SLIDES ─────────────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    headline: "Welcome to UV Cables",
    sub: "Precision-wound. Industry-proven.",
    desc: "PVC, XLPE, EPR/PCP, Silicone, PTFE(Teflon) and more.",
    image: CableTower,
    imageAlt: "Industrial power cable close-up",
    cta: "Explore Products",
    ctaLink: "/products",
  },
  {
    id: 2,
    headline: "Solar & EV Ready",
    sub: "New energy. Proven quality.",
    desc: "Solar DC cables and EV charging cables — built for India's renewable future.",
    image: SolarImage,
    imageAlt: "Solar panels with DC cable wiring",
    cta: "Explore Products",
    ctaLink: "/products",
  },
  {
    id: 3,
    headline: "Custom to Your Specs",
    sub: "Any length. Any Cross-Section.",
    desc: "Supplying cables customized to your exact requirements — including conductor size, core count, armoring, and overall length.",
    image: CableStriping,
    imageAlt: "Stripped Cable",
    cta: "Explore Products",
    ctaLink: "/products",
  },
];
