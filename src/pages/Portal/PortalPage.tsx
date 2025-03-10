import CallToActionComponent from "./CallToActionComponent";
import FeaturesComponent from "./FeaturesComponent";
import HeroComponent from "./HeroComponent";
import MissionComponent from "./MissionComponent";
import ServicesComponent from "./ServicesComponent";
import VisionComponent from "./VisionComponent";

export default function PortalPage() {
  return (
    <>
      <HeroComponent nav="top" />
      <MissionComponent nav="mission" />
      <ServicesComponent nav="services" />
      <VisionComponent nav="vision" />
      <FeaturesComponent nav="features" />
      <CallToActionComponent nav="cta" />
    </>
  );
}
