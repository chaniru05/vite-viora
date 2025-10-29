import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import AboutUs from './Pages/AboutUs';
import Testimonials from './Pages/Testimonials';
import OurTeam from './Pages/Ourteam';
import Foot from './components/footer';
import Home from './Pages/Home';


function App() {
  return (
    <div>
      {/* Floating petals overlay for a subtle wedding vibe */}
      <div className="wedding-vibe-overlay" aria-hidden="true">
        <span className="petal"/>
        <span className="petal cream"/>
        <span className="petal"/>
        <span className="petal cream"/>
        <span className="petal"/>
        <span className="petal cream"/>
        <span className="petal"/>
        <span className="petal cream"/>
        <span className="petal"/>
        <span className="petal cream"/>
      </div>
      <Nav />   {/* Render Navbar */}
      <Home/>     { /*Render Home*/}
      <AboutUs/> {/*Render AboutUs*/}
      <Testimonials/> {/*Render Testimonials*/}
      <OurTeam/>  {/*Render Our Team*/}
      <Foot/>   {/*Render Footer*/}
      
    </div>
  );
}

export default App;

