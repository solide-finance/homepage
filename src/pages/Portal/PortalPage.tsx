import CallToActionComponent from "./CallToActionComponent";
import FeaturesComponent from "./FeaturesComponent";
import HeroComponent from "./HeroComponent";
import MissionComponent from "./MissionComponent";
import ProductComponent from "./ProductComponent";
import VisionComponent from "./VisionComponent";

export default function PortalPage() {
  return (
    <>
      <HeroComponent nav="top" />
      <MissionComponent nav="mission" />
      <ProductComponent nav="product" />
      <VisionComponent nav="vision" />
      <FeaturesComponent nav="features" />
      <CallToActionComponent nav="cta" />
    </>
  );
}
