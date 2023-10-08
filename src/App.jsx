import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing";
import ProductDescriptionPage from "./pages/PDP";

import DestinationsPage from './pages/Destinations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/destinations/:destination" element={<ProductDescriptionPage />} />
        <Route path="/destinations" element={<DestinationsPage/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
