import Seo from "../../components/Seo/Seo";
import BuiltForBanksComponent from "./BuiltForBanksComponent";
import CallToActionComponent from "./CallToActionComponent";
import HeroComponent from "./HeroComponent";
import HowItWorksComponent from "./HowItWorksComponent";
import InfrastructureCoverageComponent from "./InfrastructureCoverageComponent";
import ProofBarComponent from "./ProofBarComponent";
import TeamStripComponent from "./TeamStripComponent";
import TrustEcosystemComponent from "./TrustEcosystemComponent";
import UseCasesComponent from "./UseCasesComponent";

import "./PortalPage.scss";

export default function PortalPage() {
  return (
    <>
      <Seo
        title="SolideFinance — Regulated on-chain payment & FX infrastructure for financial institutions"
        description="SolideFinance operates regulated on-chain cross-border payment and FX infrastructure for banks and financial institutions. Account-to-account, T+0 settlement, 60+ currencies."
        path="/"
        organizationSchema
      />
      <HeroComponent />
      <ProofBarComponent />
      <BuiltForBanksComponent />
      <HowItWorksComponent />
      <UseCasesComponent />
      <InfrastructureCoverageComponent />
      <TrustEcosystemComponent />
      <TeamStripComponent />
      <CallToActionComponent />
    </>
  );
}
