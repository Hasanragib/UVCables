// ─── FAQ Data — UV Cables (Improved based on industry research) ───────────────

export var FAQ_CATEGORIES = [
  {
    id: "ordering",
    label: "Ordering & Logistics",
    icon: "📦",
    faqs: [
      {
        q: "What is your minimum order quantity (MOQ)?",
        a: "Our MOQ varies by cable type. For standard PVC and XLPE cables, we typically supply from 100 metres. For specialty cables like PTFE, Silicone, and EPR/PCP, the MOQ may be higher depending on construction and cross-section. Please contact us with your exact requirement and we will confirm the MOQ.",
      },
      {
        q: "Can I order custom lengths?",
        a: "Yes — all our cables are available in custom lengths cut to your specification. We do not restrict you to standard drum lengths. Simply mention the exact length required in your enquiry and we will supply accordingly.",
      },
      {
        q: "What are your delivery timelines?",
        a: "For standard cables in stock, delivery within Delhi NCR is typically 1-3 business days. For custom-manufactured cables or large quantities, lead time is 7-15 business days depending on the cable type and cross-section. We confirm the exact timeline when you place your order.",
      },
      {
        q: "Do you supply pan-India or only Delhi NCR?",
        a: "We supply pan-India. While our manufacturing base is in Delhi NCR, we ship cables across India through reliable logistics partners. Freight charges are applicable for outstation deliveries and will be communicated at the time of order confirmation.",
      },
      {
        q: "How is conductor purity maintained in your cables?",
        a: "We use electrolytic tough pitch (ETP) copper with a minimum purity of 99.9%. Aluminium conductors are EC (Electrical Conductivity) grade. Conductor purity directly affects electrical conductivity and current-carrying capacity — we do not compromise on conductor material quality.",
      },
      {
        q: "What conductor classes are available?",
        a: "We supply cables with conductor constructions as per IS 8130: Class 1 (solid), Class 2 (stranded), Class 5 (flexible), and Class 6 (highly flexible). The conductor class is selected based on your application — fixed wiring, flexible use, or continuous movement applications like crane cables.",
      },
      {
        q: "How are cables packaged and can I specify drum length?",
        a: "Cables are supplied on wooden drums, plastic reels, or in coils. Standard drum lengths are available, but we also supply cut-to-length on customer request. Each drum carries a label with cable type, cross-section, length, IS standard, and batch details for full traceability.",
      },
      {
        q: "What happens if the delivered cable does not match the specification?",
        a: "We stand behind the quality of every cable we supply. If a delivered cable does not match the agreed specification, contact us immediately with the drum label details and batch number. We will investigate and arrange replacement or credit as appropriate. Keeping the drum label intact helps us trace the issue quickly.",
      },
      {
        q: "Can I request a sample before placing a bulk order?",
        a: "Yes, sample requests are considered on a case-by-case basis. For new customers, we can typically provide a short sample of 1-3 metres at a nominal cost. Please get in touch to discuss your sample requirement and delivery address.",
      },
      {
        q: "What payment terms do you offer?",
        a: "For new customers, we typically work on advance payment. For established customers with a track record, we can discuss credit terms. Payment can be made via NEFT/RTGS, UPI, or cheque. Please discuss payment terms when placing your order.",
      },
      {
        q: "Do you provide GST invoices?",
        a: "Yes, we are GST registered and provide proper GST invoices for all orders. Our trade name UV Cables operates under the GST registration of United Values Cables.",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical & Quality",
    icon: "🔧",
    faqs: [
      {
        q: "Are your cables ISI marked or IS certified?",
        a: "We do not hold formal ISI mark certification. However, our cables are manufactured in accordance with the specifications of applicable Indian Standards — IS 694, IS 1554, IS 7098, IS 9968 — and international standards IEC 62930 and IEC 62893. We are transparent about this. If you require ISI marked cables for a specific project, please let us know upfront.",
      },
      {
        q: "Do you offer flame retardant (FR), FRLS, or LSZH cables?",
        a: "Yes. Our standard PVC cables are flame retardant (FR) grade. For applications requiring low smoke properties — enclosed spaces, metro infrastructure, tunnels, hospitals — we can supply FR-LSH and LSZH (Low Smoke Zero Halogen) cables on request. Please specify the required flame grade in your enquiry.",
      },
      {
        q: "Are anti-termite or anti-rodent cables available?",
        a: "Yes — anti-termite PVC sheathed cables are available for direct burial and underground applications where termite infestation is a concern. Anti-rodent cables with reinforced outer sheath are available for installations in areas prone to rodent damage. Please specify this requirement when ordering.",
      },
      {
        q: "What is the difference between conductor Class 2 and Class 5?",
        a: "Class 2 conductors are stranded and compacted — used in fixed wiring where flexibility is not critical. Class 5 conductors are finely stranded — used in flexible cables and portable equipment where the cable needs to flex. For continuous movement like crane cables, Class 6 (highly flexible) is recommended.",
      },
      {
        q: "Can you manufacture LSZH (Low Smoke Zero Halogen) cables?",
        a: "Yes — LSZH cables are available on request for metro rail, hospitals, data centres, enclosed public spaces, and naval applications. LSZH cables produce minimal smoke and no halogen gases when exposed to fire, making them safer in enclosed environments.",
      },
      {
        q: "What temperature ratings are available?",
        a: "Our cables cover a wide temperature range: PVC (-15 to +70 degrees C), XLPE (up to +90 degrees C), EPR/PCP (-40 to +85 degrees C), Butyl Rubber (up to +110 degrees C), Silicone (-60 to +180 degrees C), and PTFE/Teflon (-65 to +260 degrees C). Please specify your operating temperature when enquiring.",
      },
      {
        q: "Can you manufacture armoured cables (SWA/STA)?",
        a: "Yes, we manufacture Steel Wire Armoured (SWA) and Steel Tape Armoured (STA) cables in XLPE and PVC constructions. Armoured cables are recommended for underground installation, direct burial, and applications requiring mechanical protection. Please specify armoring requirement in your enquiry.",
      },
      {
        q: "What is the difference between PVC and XLPE cables?",
        a: "PVC cables are suitable for up to 1.1 kV and 70 degrees C. XLPE cables offer higher temperature ratings up to 90 degrees C, better current-carrying capacity, and are suitable for voltages up to 33 kV. XLPE is preferred for power distribution feeders and higher voltage applications, while PVC is more economical for general wiring.",
      },
      {
        q: "How do I identify a genuine quality cable vs a substandard one?",
        a: "Key checks: (1) Conductor should be bright copper, not dull or dark. (2) Insulation should be uniform in thickness when cut across. (3) Conductor resistance should match IS specifications for the given cross-section. (4) Cable jacket should not crack or peel easily. (5) Check the drum label for cable type, IS standard, cross-section, and batch details. If in doubt, request a test certificate.",
      },
      {
        q: "Do you provide test certificates with your cables?",
        a: "We provide basic test certificates confirming conductor resistance and insulation resistance for standard cable types. Third-party NABL lab certificates can be arranged on request for larger orders. Batch-wise routine test certificates are also available for large project orders. Please mention your certification requirement at the time of enquiry.",
      },
      {
        q: "Do you supply cables with shielding or screening?",
        a: "Yes. Our Control Cables (IS 1554 Pt.2) are available with overall aluminium foil screen with drain wire and copper braid shielding for EMI/RFI protection in PLC, DCS, and instrumentation applications. Please specify the shielding requirement when ordering.",
      },
      {
        q: "What is the difference between EPR and standard rubber cables?",
        a: "EPR (Ethylene Propylene Rubber) offers superior heat, ozone, and weather resistance compared to natural rubber cables. EPR/PCP cables suit outdoor, mining, and heavy-duty flexible applications up to 3.3 kV. Standard rubber cables are more economical for general portable and welding applications at lower voltages.",
      },
    ],
  },
  {
    id: "business",
    label: "Business & Support",
    icon: "🤝",
    faqs: [
      {
        q: "Who do you typically supply to?",
        a: "We are a B2B manufacturer supplying to other manufacturers, electrical contractors, panel builders, project consultants, EPC companies, and retail cable distributors across India.",
      },
      {
        q: "Can I visit your manufacturing facility?",
        a: "Yes — we welcome factory visits from serious buyers. Please contact us in advance to schedule a visit during business hours Monday to Saturday. Seeing our manufacturing process firsthand helps build confidence in our quality and capabilities.",
      },
      {
        q: "Can you supply for government, PSU, or metro rail projects?",
        a: "We can supply cables for government, PSU, and metro rail projects. However, many such projects require specific certifications such as RDSO or DMRC approval, or ISI marking. Please share your specification and we will confirm whether we can meet the project requirements before you proceed.",
      },
      {
        q: "Can you provide batch-wise test certificates for large orders?",
        a: "Yes — for large orders, we provide batch-wise routine test certificates covering conductor resistance, insulation resistance, and voltage withstand tests. Third-party NABL lab certificates can also be arranged for orders requiring independent verification. Please mention this at the time of ordering.",
      },
      {
        q: "Do you offer OEM or custom branding on cables?",
        a: "Custom drum labelling and branding can be arranged for larger orders. Cable jacket printing with your company name or project details is possible on certain cable types. Please discuss your custom branding requirement with us.",
      },
      {
        q: "How quickly do you respond to RFQs?",
        a: "We aim to respond to all RFQs within 4-8 business hours for standard cable types. For complex or specialty cables requiring production planning, we respond within 1 business day with pricing and lead time.",
      },
      {
        q: "What information should I include in my enquiry?",
        a: "To get an accurate quote quickly please include: cable type (e.g. XLPE, PVC, EPR), voltage rating, conductor material (copper or aluminium), conductor class (Class 2, 5, or 6), conductor cross-section in sq.mm, number of cores, total length or quantity required, any specific IS or IEC standard, armoring requirement, flame grade (FR, FRLS, LSZH), and delivery location.",
      },
      {
        q: "Are you registered as an MSME?",
        a: "Yes, United Values Cables (trading as UV Cables) is MSME registered. We can provide our MSME certificate, GST registration certificate, and other business documents as required for your vendor registration or procurement process.",
      },
      {
        q: "Can you supply for solar or EV charging infrastructure projects?",
        a: "Yes — we specifically manufacture Solar DC Cables as per IEC 62930 for PV installations and EV Charging Cables as per IEC 62893 for charging infrastructure. Both are growth areas we are actively supplying to across India.",
      },
    ],
  },
];

export var CONTACT_FAQS = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "We respond to all enquiries within 4-8 business hours. For urgent requirements, reach us directly on WhatsApp for a faster response.",
  },
  {
    q: "Can I request a cable sample before bulk ordering?",
    a: "Yes — sample requests are considered for new customers. Please mention your cable type, cross-section required, and delivery address and we will confirm sample availability.",
  },
  {
    q: "Do you supply outside Delhi NCR?",
    a: "Yes, we supply pan-India. Freight charges apply for outstation deliveries and will be confirmed at the time of order.",
  },
];
