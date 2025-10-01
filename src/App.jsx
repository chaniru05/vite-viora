import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Foot/>   {/*Render Footer*/}

    </div>
  );
}

export default App;
