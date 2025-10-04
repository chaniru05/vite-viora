import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import Vendors from './Pages/Vendors';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Foot/>   {/*Render Footer*/}
      <Vendors/>   {/*Render Vendors page*/}
    </div>
  );
}

export default App;
