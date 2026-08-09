import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HandmadeShop from "./pages/HandmadeShop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/handmade-shop" element={<HandmadeShop />} />
    </Routes>
  );
}

export default App