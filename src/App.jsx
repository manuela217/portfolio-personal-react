import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HandmadeShop from "./pages/HandmadeShop";
import PortfolioReact from "./pages/PortfolioReact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/handmade-shop" element={<HandmadeShop />} />
        <Route path="/projects/portfolio-react" element={<PortfolioReact />} />
      </Routes>
    </>
  );
}

export default App