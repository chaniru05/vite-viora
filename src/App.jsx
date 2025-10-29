import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import Vendors from './Pages/Vendors';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Vendors/>   {/*Render Vendors page*/}
      <Foot/>   {/*Render Footer*/}
    </div>
  );
}

export default App;
