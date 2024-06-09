import "@fontsource/inter";
import "@fontsource/poppins";

import PortalPage from "./pages/Portal/PortalPage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <PortalPage />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
