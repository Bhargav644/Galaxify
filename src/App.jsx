import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ProductDescriptionPage from "./pages/PDP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/destinations/:destination" element={<ProductDescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
