import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HandmadeShop from "./pages/HandmadeShop";
import PortfolioReact from "./pages/PortfolioReact";
import TaskManager from "./pages/TaskManager";
import SportNutrition from "./pages/SportNutrition";
import PortfolioPersonal from "./pages/PortfolioPersonal";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/handmade-shop" element={<HandmadeShop />} />
        <Route path="/projects/portfolio-react" element={<PortfolioReact />} />
        <Route path="/projects/task-manager" element={<TaskManager />} />
        <Route path="/projects/sport-nutrition" element={<SportNutrition />} />
        <Route path="/projects/portfolio-personal" element={<PortfolioPersonal />} />
      </Routes>
    </>
  );
}

export default App