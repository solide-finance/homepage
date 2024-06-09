import "@fontsource/inter";
import "@fontsource/poppins";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeroComponent from "./HeroComponent";
import MissionComponent from "./MissionComponent";

import "./App.scss";
import ProductComponent from "./ProductComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <HeroComponent nav="top" />
        <MissionComponent nav="mission" />
        <ProductComponent nav="product" />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
