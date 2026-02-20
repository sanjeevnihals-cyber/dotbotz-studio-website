export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  capabilities: string[];
  outcome: string;
  status: string;
};

export const products: Product[] = [
  {
    slug: "caremesh",
    name: "CareMesh OS",
    category: "Healthcare Infrastructure",
    summary: "Connected workflows for providers, diagnostics, and care operations.",
    description:
      "CareMesh OS unifies triage, claims-intelligence, and referral orchestration into one resilient operating layer for modern care systems.",
    capabilities: [
      "Patient routing intelligence",
      "Payer rule engines",
      "Clinical operations command center"
    ],
    outcome: "Reduced cycle delays by 42% across distributed care teams.",
    status: "Live in enterprise pilots"
  },
  {
    slug: "freightbrain",
    name: "FreightBrain Grid",
    category: "Logistics Infrastructure",
    summary: "Autonomous planning for load forecasting and dispatch resilience.",
    description:
      "FreightBrain Grid gives operations teams a decision cockpit with predictive allocations, lane performance scoring, and dynamic SLA control.",
    capabilities: [
      "Demand sensing",
      "Capacity optimization",
      "Exception intelligence"
    ],
    outcome: "Improved on-time performance by 27% in congested corridors.",
    status: "Deployment phase"
  },
  {
    slug: "retailsignal",
    name: "RetailSignal Stack",
    category: "Commerce Infrastructure",
    summary: "SKU-level demand orchestration and margin-aware automation.",
    description:
      "RetailSignal Stack fuses customer behavior, supply data, and pricing signals to operate intelligent merchandising loops in real time.",
    capabilities: [
      "Demand pulse monitoring",
      "Inventory balancing",
      "Margin-aware recommendation engine"
    ],
    outcome: "Lifted gross margin by 11.8% in six months.",
    status: "Scale-ready"
  }
];

export const industries = [
  "Healthcare",
  "Logistics",
  "Construction Tech",
  "Fintech Operations",
  "Industrial Automation",
  "Commerce Systems"
];
