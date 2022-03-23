import React from "react"
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About'
import Devs from './components/Devs'
import Join from './components/Join'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Devs />
      <Join />
      <Footer />
    </div>
  );
}

export default App
