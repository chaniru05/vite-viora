import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Home/>     { /*Render Home*/}
      <Foot/>   {/*Render Footer*/}
    </div>
  );
}

export default App;