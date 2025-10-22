import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import Vednorspreview from './Pages/vendorspreview';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Foot/>   {/*Render Footer*/}
      <Vednorspreview/>   {/*Render vendorspreview page
*/}
    </div>
  );
}

export default App;
