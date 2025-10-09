import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import AboutUs from './Pages/AboutUs';
import Testimonials from './Pages/Testimonials';
import Foot from './components/footer';


function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <AboutUs/> {/*Render AboutUs*/}
      <Testimonials/> {/*Render Testimonials*/}
      <Foot/>   {/*Render Footer*/}
      
    </div>
  );
}

export default App;
