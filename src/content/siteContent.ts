import { DEVELOPER_DOCS_URL } from "../config/site";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type ContentCard = {
  title: string;
  body: string;
};

export type Person = {
  name: string;
  role: string;
  bio?: string;
};

export const navLinks: NavLink[] = [
  { label: "Product", href: "/#product" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Compliance & Security", href: "/compliance" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/news" },
  { label: "Developers", href: DEVELOPER_DOCS_URL, external: true }
];

export const offices = [
  { city: "Mulhouse", address: "KMØ, 30 rue François Spoerry, 68100 Mulhouse, France" },
  { city: "Paris", address: "62 rue Jean-Jacques Rousseau, 75001 Paris, France" },
  { city: "Geneva", address: "c/o EUREX GE SA, Rue de Genève 18, 1225 Chêne-Bourg, Switzerland" },
  { city: "Zurich" }
];

export const homepageProofs = [
  "Financial intermediary affiliated with SO-FIT, an SRO recognised by FINMA",
  "ISO 27001 certified",
  "SOC 2 assurance",
  "60+ settlement currencies"
];

export const builtForBanks: ContentCard[] = [
  {
    title: "Serving institutions, not competing with them.",
    body: "SolideFinance equips banks and financial institutions to operate digital-asset-based payments for their own clients. The institution keeps the client relationship, FX volumes and revenue."
  },
  {
    title: "Optimized FX and cross-border flows.",
    body: "Bank-to-bank settlement without nostro/vostro accounts, pre-funded liquidity or intermediary chains. Atomic conversion and delivery are designed to minimise settlement risk."
  },
  {
    title: "Inside the regulated perimeter.",
    body: "Swiss AML supervision, pre-transaction screening, traceability and segregated funds: infrastructure designed to the standards financial institutions apply to themselves."
  }
];

export const designPrinciples: ContentCard[] = [
  {
    title: "Account-to-account, within the existing payment chain.",
    body: "Funds move from the issuing bank to the beneficiary bank through familiar account-based payment journeys, while SolideFinance coordinates the underlying conversion and settlement."
  },
  {
    title: "A technology layer invisible to the end client.",
    body: "The financial institution remains the client-facing provider. Its corporate clients do not need a wallet, exchange account or a new operational workflow."
  },
  {
    title: "Compliance by design.",
    body: "Screening, traceability and controls are embedded before execution so institutions can operate within their own governance and regulated perimeter."
  }
];

export const useCases: ContentCard[] = [
  {
    title: "Optimized FX and cross-border flows",
    body: "Open and operate payment corridors without correspondent accounts or immobilised liquidity. T+0 settlement across 60+ currencies, 24/7."
  },
  {
    title: "Stablecoin FX for transaction banking",
    body: "Offer corporate clients stablecoin-based cross-border payments under the bank’s own brand and within its own perimeter, without requiring the client to use a wallet or exchange account."
  },
  {
    title: "On-chain FX marketplace for institutions",
    body: "Execute fiat and digital-asset FX with atomic conversion and delivery, including ledger-to-ledger interbank flows through one institutional access layer."
  },
  {
    title: "Group treasury & intra-group netting",
    body: "Consolidate multi-currency positions and net inter-entity obligations in real time, with instant settlement."
  },
  {
    title: "Tokenised deposits",
    body: "Use an FX and settlement layer for regulated tokenised money, supporting tokenised deposits alongside stablecoins."
  },
  {
    title: "Asset managers and trading desks",
    body: "Support instant FX settlement and Payment versus Delivery, continuously adjustable share-class hedging, and an FX layer for tokenisation platforms."
  }
];

export const infrastructureComponents: ContentCard[] = [
  {
    title: "Orchestrator",
    body: "Coordinates the complete payment path, selecting the appropriate execution and settlement route for each corridor."
  },
  {
    title: "Execution engine",
    body: "Connects institutional liquidity and synchronises conversion with delivery to reduce settlement exposure."
  },
  {
    title: "Custody and screening",
    body: "Integrates secure transaction controls, asset safeguarding workflows and pre-transaction compliance checks."
  },
  {
    title: "Access layer",
    body: "Exposes the infrastructure through APIs designed for integration into existing payment and treasury systems."
  }
];

export const leadership: Person[] = [
  { name: "Myriame Honnay", role: "CEO & co-founder" },
  { name: "Olivier Scherrer", role: "CTO & co-founder" },
  { name: "Vincent Litt", role: "Head of Strategic Partnerships & Institutional Sales" }
];

export const compliancePeople: Person[] = [{ name: "Fiona Lang", role: "Compliance & AML Officer" }];

export const boardMembers: Person[] = [
  { name: "Vincent Pignon", role: "Director" },
  { name: "Michael Berclaz", role: "Director" }
];

export const teamStrip = [...leadership, ...compliancePeople];

export const complianceSections: ContentCard[] = [
  {
    title: "Regulatory status",
    body: "SolideFinance SA operates as a Swiss financial intermediary affiliated with SO-FIT, a self-regulatory organisation recognised by FINMA. This affiliation places its activities within the Swiss anti-money-laundering supervisory framework; it is not presented as direct FINMA prudential supervision."
  },
  {
    title: "Fund segregation",
    body: "Operational processes are designed to segregate client funds from SolideFinance’s own operating funds and to preserve traceability throughout a payment flow."
  },
  {
    title: "External controls",
    body: "Independent controls and assurance work form part of the oversight framework. Publicly shareable evidence is made available through the SolideFinance Trust Center."
  },
  {
    title: "Certifications",
    body: "SolideFinance maintains ISO 27001 certification and SOC 2 assurance. Current certificates and available reports can be reviewed through the Trust Center."
  },
  {
    title: "AML/CFT framework",
    body: "Customer due diligence, pre-transaction screening, transaction traceability and escalation controls support the prevention of money laundering and terrorist financing."
  },
  {
    title: "Resilience & outsourcing",
    body: "Business continuity, incident response, access control and third-party oversight are integrated into the operating model used to support financial-institution partners."
  }
];

export const newsEntries = [
  {
    source: "L’Agefi",
    date: "2025",
    title: "Solide Finance met les stablecoins au service des paiements transfrontaliers",
    summary:
      "Coverage of SolideFinance’s use of stablecoin infrastructure to improve cross-border payment and foreign-exchange flows for financial institutions."
  },
  {
    source: "BNP Paribas roundtable",
    date: "30 June 2026",
    title: "Payment rails disruption and the new blockchain rails",
    summary:
      "Myriame Honnay joined Swift and Visa at DeFi & Blockchain 2026, hosted by BNP Paribas at BivwAk!, to discuss the evolution of payment rails."
  }
];

export const partnerGroups = [
  {
    label: "Certifications & regulation",
    items: ["ISO 27001", "SOC 2", "SO-FIT / recognised by FINMA"]
  },
  {
    label: "Ecosystem",
    items: ["Finance Innovation", "ADAN", "Swiss Blockchain Federation", "Crypto Valley Association"]
  }
];
