import './App.css'
import Header from './components/Header'
import TopHeader from './components/TopHeader'
import { Routes, Route } from "react-router-dom";
import About from './pages/About'
import NotFound from './pages/About'
import Homepage from './pages/Homepage'
import Service from './pages/Service'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className='hidden sm:block'>
        <TopHeader />
      </div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Service />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
