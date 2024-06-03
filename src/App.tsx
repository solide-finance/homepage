import "@fontsource/inter";
import "@fontsource/poppins";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import HeroComponent from "./HeroComponent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
       <HeroComponent nav="top" />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
