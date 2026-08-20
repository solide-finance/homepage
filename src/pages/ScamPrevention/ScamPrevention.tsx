import Seo from "../../components/Seo/Seo";
import { CONTACT_EMAIL, FRAUD_EMAIL, SITE_URL, TRUST_URL, mailto } from "../../config/site";

import "./ScamPrevention.scss";

const siteDomain = SITE_URL.replace(/^https?:\/\//, "");
const trustDomain = TRUST_URL.replace(/^https?:\/\//, "");

const neverAsk = [
  "Disclose your password or one-time passcodes.",
  "Disclose full authentication credentials.",
  "Provide confidential information over social media platforms.",
  "Move funds to a “safe account”.",
  "Transfer funds or assets for “verification purposes”."
];

const scamTactics = [
  {
    label: "Creating urgency",
    body: "Pressuring you to act quickly, such as claiming an offer is limited or payment is needed immediately."
  },
  {
    label: "Promising high returns",
    body: "Offering unusually high or guaranteed profits, often linked to cryptocurrencies, stablecoins, AI, “algorithmic trading”, or other complex or trending products."
  },
  {
    label: "Pretending to be trusted people",
    body: "Impersonating banks, regulators, colleagues, friends, or real company employees."
  },
  {
    label: "Building trust over time",
    body: "Using social media, messaging apps, or group chats to form relationships before introducing investment opportunities or asking for money."
  },
  {
    label: "Using emotional manipulation",
    body: "Exploiting personal relationships (common in romance scams) by fabricating emergencies, hardships, or trust-based investment opportunities to encourage payments."
  },
  {
    label: "Exclusivity",
    body: "Claiming opportunities are “invite-only” or available only to a select few."
  },
  {
    label: "Looking professional",
    body: "Using polished websites, contracts, apps, or documents to appear legitimate."
  },
  {
    label: "Payment redirection",
    body: "Asking you to send funds to new or different accounts (often at short notice), sometimes claiming it is for security, efficiency, or compliance reasons."
  },
  {
    label: "Using complex language",
    body: "Overloading you with technical jargon or complex explanations (e.g. around trading strategies or crypto infrastructure) to sound credible and discourage questions."
  },
  {
    label: "Asking for more money over time",
    body: "Encouraging increasingly large payments over time, often by showing fake “profits” or returns at first."
  }
];

const protectYourself = [
  {
    label: "Be cautious",
    body: "Be wary of offers promising guaranteed profits or “get rich quick” opportunities."
  },
  {
    label: "Don’t rush",
    body: "If you feel pressured to act urgently, stop and verify the request independently before proceeding."
  },
  {
    label: "Check identities",
    body: "Research companies or individuals before sending any money. Look for public sources and reviews, and check email addresses, phone numbers, and website domains carefully for inconsistencies, misspellings, or anything suspicious."
  },
  {
    label: "Check licensing",
    body: "Confirm whether a firm is authorised by checking the local financial services register."
  },
  {
    label: "Protect personal information",
    body: "Don’t share personal details or identity documents with people you only know online."
  },
  {
    label: "Keep control of your accounts",
    body: "Never let someone else open or manage payment accounts or crypto wallets for you without proper verification."
  },
  {
    label: "Avoid remote access",
    body: "Do not install remote access software that gives strangers access and control over your device or financial accounts."
  },
  {
    label: "Known counterparties",
    body: "Be cautious when sending money or cryptocurrencies to individuals you have only met online, including through social media, messaging apps, or group chats."
  },
  {
    label: "Payment requests",
    body: "Be cautious of unexpected or urgent requests for money or changes to payment details, especially if they involve changes to usual payment details or methods."
  },
  {
    label: "Look out for recovery scams",
    body: "If you are scammed, scammers may pretend they can recover lost funds or digital assets if you pay them upfront."
  },
  {
    label: "Be aware of emotional pressure",
    body: "Romance, emergencies, or personal hardship may be used as a way to influence your decisions."
  },
  {
    label: "Use secure communication",
    body: "Don’t click on links or download attachments in unexpected messages, particularly those asking for payments, personal information, or login details."
  },
  {
    label: "Ask for advice",
    body: "If in doubt, speak to someone you trust or contact the organisation directly using verified contact details."
  },
  {
    label: "Review transactions carefully",
    body: "Double check payment details carefully before sending funds, especially for first-time or high-value transactions."
  }
];

export default function ScamPreventionPage() {
  return (
    <div className="standalone-page legal-page scam-page">
      <Seo
        title="Scam prevention — SolideFinance"
        description="How SolideFinance SA works to prevent fraud and scams, how to recognise a scam, and how to report suspected fraud that mentions SolideFinance."
        path="/scam-prevention"
      />
      <p className="eyebrow">Security</p>
      <h1>Scam prevention</h1>
      <p className="standalone-page__intro">
        SolideFinance SA is working hard to fight cybercrime and fraud, to keep you as safe as possible. We use
        transaction monitoring and screening tools, customer due diligence, pre-transaction screening and transaction
        traceability to identify and prevent fraud and money laundering.
      </p>
      <p>Below are answers to a few common questions about fraud and how you can prevent it:</p>

      <h2>What is a scam?</h2>
      <p>
        A scam is where you’re tricked into sending money or digital assets (i.e. cryptocurrencies) to a scammer, who
        then steals the money or digital assets. Scammers might impersonate people and organisations you trust, using
        documents, emails, phone calls, and texts that seem genuine. They may ask you to download apps or sign up for
        specialised investment websites. Many victims are contacted by scammers through investment, trading or chat
        groups on WhatsApp, Telegram or Signal. Many scams promise overly high investment returns or claim to facilitate
        access to investment opportunities not available to the general public.
      </p>

      <h2>I’ve been scammed and the transaction details mention SolideFinance SA. What should I do?</h2>
      <p>
        If you believe you have been affected by fraud or a scam, we strongly recommend that you{" "}
        <strong>notify your bank or financial institution immediately</strong>. They may be able to recall the payment.
        You should also <strong>report</strong> any suspected fraud or scam to your local{" "}
        <strong>law enforcement</strong> agency and notify us directly. If you do want to report the suspected fraud to
        us, please contact us at{" "}
        <a className="text-link" href={mailto(FRAUD_EMAIL, "Suspected fraud report")}>
          {FRAUD_EMAIL}
        </a>
        .
      </p>

      <h2>
        I’ve been contacted by someone claiming to represent SolideFinance SA. How do I know this communication is
        legitimate?
      </h2>
      <p>
        <strong>Check the source:</strong> Legitimate communications from SolideFinance SA will only come from an
        official email address <strong>@solide.fi</strong>. We urge you to exercise caution and verify a sender’s identity
        before responding to any communication claiming to be from us.
      </p>

      <h3>We will never ask you to:</h3>
      <ul>
        {neverAsk.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>How do I spot a scam?</h2>
      <p>Scammers employ a range of tactics:</p>
      <ul className="scam-page__list">
        {scamTactics.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.body}
          </li>
        ))}
      </ul>

      <h2>How can you protect yourself from scams?</h2>
      <ul className="scam-page__list">
        {protectYourself.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
