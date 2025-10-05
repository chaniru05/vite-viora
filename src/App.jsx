import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Foot/>   {/*Render Footer*/}
      <AboutUs/> {/*Render AboutUs*/}
    </div>
  );
}

export default App;
