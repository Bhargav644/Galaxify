import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import DestinationsPage from "./pages/Destinations";
import ProductDescriptionPage from "./pages/PDP";
import Quiz from "./pages/quiz/index";
import Packages from "./pages/package/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route
          path="/destinations/:destination"
          element={<ProductDescriptionPage />}
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/packages/:package_id" element={<Packages/>} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
