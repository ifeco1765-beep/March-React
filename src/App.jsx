import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero-Section'

function App() {
  return (
    <>
    <Navbar name="NavBar props" />
    <Navbar name="Ifeanyi NavBar" className="nav-bar" />
    <HeroSection />
    </>
    
  )
   
  
  
}

export default App
