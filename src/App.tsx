import "@fontsource/inter";
import "@fontsource/poppins";

import { Outlet } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
