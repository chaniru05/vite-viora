import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Ud from './Pages/db/ud-overview';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Ud />   {/* Render Navbar */}
    </div>
  );
}

export default App;