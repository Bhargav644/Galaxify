import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandingPage from './pages/landing'
import DestinationsPage from './pages/Destinations'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/destinations" element={<DestinationsPage/>}/>
      </Routes>
    </BrowserRouter>
       
  )
}

export default App
