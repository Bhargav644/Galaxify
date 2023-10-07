import { BrowserRouter,Route,Router } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'

function App() {

  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<LandingPage/>}/>
      </Router>
    </BrowserRouter>
       
  )
}

export default App
