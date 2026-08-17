import { DEVELOPER_DOCS_URL } from "../config/site";
import agefiLogo from "../assets/news/agefi.png";
import allnewsLogo from "../assets/news/allnews.png";
import ggbaLogo from "../assets/news/ggba.png";
import investirLogo from "../assets/news/investir.jpg";
import jaimeLesStartupsLogo from "../assets/news/jaime-les-startups.png";
import lesEchosLogo from "../assets/news/les-echos.jpg";
import planetFintechLogo from "../assets/news/planet-fintech.png";

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
  linkedin?: string;
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
  { city: "Zurich", address: "Opening Q4 2026" }
];

export const homepageProofs = [
  "Financial Intermediary Affiliated Under Swiss SRO",
  "ISO 27001 certified",
  "SOC 2 assurance",
  "60+ settlement currencies"
];

export const builtForBanks: ContentCard[] = [
  {
    title: "Serving institutions",
    body: "SolideFinance equips banks and financial institutions to operate digital-asset-based payments for their own clients. The institution keeps the client relationship, FX volumes and revenue."
  },
  {
    title: "Optimized FX and cross-border flows",
    body: "Bank-to-bank settlement without nostro/vostro accounts, pre-funded liquidity or intermediary chains. Atomic conversion and delivery are designed to minimise settlement risk."
  },
  {
    title: "Inside the regulated perimeter",
    body: "Swiss AML supervision, pre-transaction screening, traceability and segregated funds: infrastructure designed to the standards financial institutions apply to themselves."
  }
];

export const designPrinciples: ContentCard[] = [
  {
    title: "Account-to-account, within the existing payment chain",
    body: "Funds move from the issuing bank to the beneficiary bank through familiar account-based payment journeys, while SolideFinance coordinates the underlying conversion and settlement."
  },
  {
    title: "A technology layer invisible to the end client",
    body: "The financial institution remains the client-facing provider. Its corporate clients do not need a wallet, exchange account or a new operational workflow."
  },
  {
    title: "Compliance by design",
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
    body: "Offer corporate clients stablecoin-based cross-border payments under the bank’s own brand and within its own perimeter — with no wallet, no exchange account and no change of habits for the client."
  },
  {
    title: "On-chain FX marketplace for institutions",
    body: "Execute FX directly on-chain, across fiat currencies and digital assets, at the mid-market price with no spread. Atomic execution removes settlement risk between counterparties, and the same FX layer applies to ledger-to-ledger interbank transactions."
  },
  {
    title: "Tokenised deposits",
    body: "An FX and settlement layer for regulated tokenised money. The infrastructure is designed to handle tokenised deposits alongside stablecoins, giving banks a single execution layer as institutional money moves on-chain."
  },
  {
    title: "Asset managers and trading desks",
    body: "Instant FX settlement and Payment versus Delivery, continuously adjustable share-class hedging, and an FX layer for tokenisation platforms."
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
  {
    name: "Myriame Honnay",
    role: "CEO & co-founder",
    linkedin: "https://www.linkedin.com/in/myriame-honnay-5505ba60/"
  },
  {
    name: "Olivier Scherrer",
    role: "CTO & co-founder",
    linkedin: "https://www.linkedin.com/in/olivier-scherrer-039b8441/"
  },
  {
    name: "Vincent Litt",
    role: "Head of Strategic Partnerships & Institutional Sales",
    linkedin: "https://www.linkedin.com/in/vincentlitt/"
  }
];

export const compliancePeople: Person[] = [
  {
    name: "Fiona Lang",
    role: "Compliance & AML Officer",
    linkedin: "https://www.linkedin.com/in/fiona-lang-01996/"
  }
];

export const boardMembers: Person[] = [
  {
    name: "Vincent Pignon",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/vincent-pignon/"
  },
  {
    name: "Michael Berclaz",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/michaelberclaz/"
  }
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
    logo: allnewsLogo,
    source: "Allnews",
    date: "26 February 2026",
    title: "SolideFinance joins the Wecan network",
    summary:
      "Coverage of SolideFinance joining the Wecan network to digitize client onboarding, structure and secure compliance data collection, improve regulatory traceability, and facilitate connections with Swiss banks and independent asset managers.",
    link: "https://www.allnews.ch/content/corporate/solidefinance-rejoint-le-r%C3%A9seau-wecan"
  },
  {
    logo: agefiLogo,
    source: "L’Agefi",
    date: "26 February 2026",
    title: "SolideFinance joins the Wecan network",
    summary:
      "Coverage of SolideFinance integrating Wecan’s compliance and onboarding infrastructure to strengthen, secure and trace its client onboarding and regulatory monitoring processes.",
    link: "https://agefi.com/actualites/entreprises/solidefinance-integre-le-reseau-wecan"
  },
  {
    logo: investirLogo,
    source: "Investir",
    date: "24 January 2026",
    title: "Stablecoins: a genuine substitute for traditional systems",
    summary:
      "An examination of stablecoins as an alternative to traditional international-transfer systems, featuring Myriame Honnay on how blockchain infrastructure can give banks greater speed, transparency and compliance in cross-border payments.",
    link: "https://investir.lesechos.fr/marches-indices/bitcoin-cryptomonnaies/les-stablecoins-veritable-substitut-aux-systemes-traditionnels-2212596"
  },
  {
    logo: agefiLogo,
    source: "L’Agefi",
    date: "21 November 2025",
    title: "L’Agefi Corporate Finance - November 2025",
    summary:
      "A special corporate-finance issue for treasurers and finance professionals examining financing, cash management, risk and technological transformation, including the growing role of stablecoins and instant payments.",
    link: "https://www.agefi.fr/cash-risk/hors-serie/lagefi-finance-dentreprise-novembre-2025"
  },
  {
    logo: ggbaLogo,
    source: "GGBA",
    date: "5 November 2025",
    title: "Solide Finance expands to Geneva to revolutionize cross-border payments",
    summary:
      "Coverage of SolideFinance establishing operations in Geneva as a strategic base for its cross-border payment infrastructure, highlighting its use of blockchain and stablecoins, collaboration with local banks, and support from GGBA and Geneva’s economic development authorities.",
    link: "https://ggba.swiss/fr/solide-finance-simplante-a-geneve-pour-revolutionner-les-paiements-transfrontaliers/"
  },
  {
    logo: agefiLogo,
    source: "L’Agefi",
    date: "26 October 2025",
    title: "Solide Finance puts stablecoins to work for cross-border payments",
    summary:
      "A profile of SolideFinance’s blockchain-based infrastructure for financial institutions, explaining how stablecoins are used to make international payments faster and less expensive while optimizing FX and payment routes.",
    link: "https://www.agefi.fr/news/tech-finance/solide-finance-met-les-stablecoins-au-service-des-paiements-transfrontaliers"
  },
  {
    logo: planetFintechLogo,
    source: "Planet Fintech",
    date: "17 October 2025",
    title:
      "Franco-Swiss fintech Solide Finance obtains accreditation and ISO 27001 certification to modernize cross-border payments",
    summary:
      "Coverage of SolideFinance’s ISO 27001 certification and Swiss accreditation milestone following its €1 million pre-seed round, alongside the deployment of its blockchain- and stablecoin-based infrastructure for instant institutional cross-border payments.",
    link: "https://www.planet-fintech.com/La-fintech-franco-suisse-Solide-Finance-obtient-son-accreditation-et-sa-certification-ISO-27001_a6622.html"
  },
  {
    logo: jaimeLesStartupsLogo,
    source: "J’aime les startups",
    date: "16 October 2025",
    title: "Solide Finance obtains ISO 27001 certification",
    summary:
      "Coverage of SolideFinance obtaining ISO 27001 certification and advancing its regulatory accreditation process as it deploys an institution-first infrastructure for blockchain- and stablecoin-based cross-border payments.",
    link: "https://www.jaimelesstartups.fr/news/solide-finance-obtient-la-certification-iso-27001/"
  },
  {
    logo: lesEchosLogo,
    source: "Les Echos",
    date: "13 February 2024",
    title: "Solide Finance aims to streamline foreign-exchange transactions for SMEs",
    summary:
      "An early profile of SolideFinance’s plan to simplify access to foreign currencies for internationally active SMEs and startups using automated market-making and blockchain technology to make FX transactions faster, cheaper and more secure.",
    link: "https://www.lesechos.fr/pme-regions/innovateurs/solide-finance-veut-fluidifier-les-echanges-de-devises-pour-les-pme-2075893"
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
