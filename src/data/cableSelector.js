// ─── Cable Selector Tool Data ─────────────────────────────────────────────────
// 3 steps → recommendation logic

// ── Step 1: Application / Use Case ───────────────────────────────────────────
export const STEP1 = {
  id: "application",
  question: "What is your primary application?",
  hint: "Choose the closest match to your use case.",
  options: [
    {
      id: "power",
      label: "Power Distribution",
      icon: "⚡",
      desc: "Substations, feeders, underground cables",
    },
    {
      id: "wiring",
      label: "Building & Panel Wiring",
      icon: "🏗️",
      desc: "Industrial wiring, control boxes, panels",
    },
    {
      id: "flexible",
      label: "Portable / Flexible Use",
      icon: "🔄",
      desc: "Welding, cranes, portable equipment",
    },
    {
      id: "control",
      label: "Control & Automation",
      icon: "🎛️",
      desc: "PLC, DCS, instrumentation, signalling",
    },
    {
      id: "hightemp",
      label: "High Temperature",
      icon: "🌡️",
      desc: "Furnaces, ovens, steel plants",
    },
    {
      id: "chemical",
      label: "Chemical / Nuclear",
      icon: "⚗️",
      desc: "Refineries, chemical plants, radiation",
    },
    {
      id: "solar",
      label: "Solar Energy",
      icon: "☀️",
      desc: "Rooftop PV, solar farms, string wiring",
    },
    {
      id: "ev",
      label: "EV Charging",
      icon: "🔋",
      desc: "Charging stations, Type 2, CCS2",
    },
  ],
};

// ── Step 2: Voltage Range ─────────────────────────────────────────────────────
export const STEP2 = {
  id: "voltage",
  question: "What voltage range do you need?",
  hint: "Select the operating voltage of your system.",
  options: [
    {
      id: "lv",
      label: "Low Voltage",
      icon: "🔅",
      desc: "Up to 1.1 kV — most common industrial use",
    },
    {
      id: "mv",
      label: "Medium Voltage",
      icon: "🔆",
      desc: "1.1 kV to 33 kV — power distribution",
    },
    {
      id: "dc",
      label: "DC Systems",
      icon: "⚡",
      desc: "Solar DC, EV charging DC",
    },
    {
      id: "notSure",
      label: "Not Sure",
      icon: "❓",
      desc: "Help me choose based on my application",
    },
  ],
};

// ── Step 3: Environment ───────────────────────────────────────────────────────
export const STEP3 = {
  id: "environment",
  question: "What is the installation environment?",
  hint: "This helps us recommend the right insulation and sheath.",
  options: [
    {
      id: "indoor",
      label: "Indoor / Panels",
      icon: "🏭",
      desc: "Inside buildings, control panels, dry areas",
    },
    {
      id: "outdoor",
      label: "Outdoor / Underground",
      icon: "🌿",
      desc: "Direct burial, outdoor exposed installation",
    },
    {
      id: "mobile",
      label: "Mobile / Moving",
      icon: "🔄",
      desc: "Continuously flexed, trailing, on drums",
    },
    {
      id: "extreme",
      label: "Extreme Conditions",
      icon: "🔥",
      desc: "Very high/low temp, chemical exposure",
    },
  ],
};

export const STEPS = [STEP1, STEP2, STEP3];

// ── Recommendation Engine ─────────────────────────────────────────────────────
// Maps answer combinations to product IDs with reasoning

export function getRecommendation(answers) {
  var application = answers.application;
  var voltage = answers.voltage;
  var environment = answers.environment;

  // ── Solar ────────────────────────────────────────────────────────────────────
  if (application === "solar") {
    return {
      primary: "solar",
      reason:
        "Solar DC Cables (IEC 62930) are UV-stabilised and double-insulated — specifically designed for photovoltaic systems up to 1.8 kV DC.",
      alternatives: ["xlpe"],
      tip: "Use IEC 62930 rated cable for all string and combiner wiring. XLPE is suitable for AC output side.",
    };
  }

  // ── EV ───────────────────────────────────────────────────────────────────────
  if (application === "ev") {
    return {
      primary: "ev",
      reason:
        "EV Charging Cables (IEC 62893) are built for high-current DC charging — flexible, UV resistant, rated up to 200A.",
      alternatives: ["xlpe"],
      tip: "For the charging cable itself use IEC 62893. For supply feeder cables use XLPE.",
    };
  }

  // ── High Temperature ─────────────────────────────────────────────────────────
  if (application === "hightemp") {
    return {
      primary: "silicone",
      reason:
        "Silicone Cables are rated from -60°C to +180°C — ideal for furnaces, ovens, and high-heat industrial environments.",
      alternatives: ["butyl"],
      tip: "For temperatures above 110°C use Silicone. For moderate heat with chemical exposure, Butyl Rubber is an option.",
    };
  }

  // ── Chemical / Nuclear ───────────────────────────────────────────────────────
  if (application === "chemical") {
    return {
      primary: environment === "extreme" ? "butyl" : "epr",
      reason:
        environment === "extreme"
          ? "Butyl Rubber Cables offer excellent resistance to chemicals, radiation, and steam — suited for nuclear and chemical plant environments."
          : "EPR/PCP Cables offer excellent oil, chemical, and ozone resistance for heavy-duty industrial environments.",
      alternatives: ["ptfe"],
      tip: "For PTFE (Teflon) cables in pharmaceutical or extreme chemical duty, please enquire separately.",
    };
  }

  // ── Control & Automation ─────────────────────────────────────────────────────
  if (application === "control") {
    return {
      primary: "control",
      reason:
        "Control Cables (As per IS 1554 Pt.2) with aluminium foil or copper braid shielding are designed for PLC, DCS, and automation signal wiring.",
      alternatives: ["pvc"],
      tip: "Always specify screened/shielded construction for PLC and DCS applications to prevent EMI interference.",
    };
  }

  // ── Flexible / Portable ───────────────────────────────────────────────────────
  if (application === "flexible") {
    if (environment === "mobile") {
      return {
        primary: voltage === "mv" ? "trailing" : "epr",
        reason:
          voltage === "mv"
            ? "Trailing/Reeling Cables (As per IS 9968 Pt.2) are tensile-reinforced EPR/PCP cables designed for EOT cranes, stackers, and continuous movement applications."
            : "EPR/PCP Cables (As per IS 9968) combine excellent flexibility with oil, weather, and ozone resistance — ideal for portable and reeling applications.",
        alternatives: ["rubber"],
        tip: "For welding machines and hand tools, standard Rubber Cables are more economical.",
      };
    }
    return {
      primary: "rubber",
      reason:
        "Rubber Cables ( As per IS 9968 Pt.1) are general-purpose flexible cables for welding sets, portable tools, and equipment requiring frequent movement.",
      alternatives: ["epr"],
      tip: "For heavier duty or outdoor portable use, upgrade to EPR/PCP for better weather resistance.",
    };
  }

  // ── Power Distribution ────────────────────────────────────────────────────────
  if (application === "power") {
    if (voltage === "mv") {
      return {
        primary: "xlpe",
        reason:
          "XLPE Cables (As per IS 7098 Pt.2) are the standard for medium voltage power distribution from 1.1 kV to 33 kV — superior thermal performance and current capacity.",
        alternatives: [],
        tip: "Specify armoured construction (SWA/STA) for underground or mechanical protection requirements.",
      };
    }
    return {
      primary: "xlpe",
      reason:
        "XLPE Cables (As per IS 7098 Pt.1) for low voltage power distribution offer better thermal performance over PVC and are suitable for industrial feeders.",
      alternatives: ["pvc"],
      tip: "PVC is a cost-effective alternative for non-critical LV power wiring up to 1.1 kV.",
    };
  }

  // ── Building & Panel Wiring ───────────────────────────────────────────────────
  if (application === "wiring") {
    return {
      primary: "pvc",
      reason:
        "PVC Cables (As per IS 694 / IS 1554 Pt.1) are the standard for general industrial wiring, control panels, and building installations — cost-effective and flame retardant.",
      alternatives: ["xlpe", "control"],
      tip: "Use Control Cables (As per IS 1554 Pt.2) for multi-core signal and control wiring within panels.",
    };
  }

  // ── Default fallback ──────────────────────────────────────────────────────────
  return {
    primary: "pvc",
    reason:
      "PVC Cables (IS 694) are the most versatile general-purpose industrial cable — suitable for most standard wiring applications up to 1.1 kV.",
    alternatives: ["xlpe", "control"],
    tip: "If you have specific requirements, our team can help recommend the exact cable for your application.",
  };
}
