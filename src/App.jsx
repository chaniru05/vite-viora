import { useState } from 'react'
import './App.css'
import '@fontsource/im-fell-english-sc'
import Nav from "./components/nav";
import Home from './Pages/Home';
import Foot from './components/footer';


function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <Home/>    {/*Render Home*/}
      <Foot/>   {/*Render Footer*/}
    </div>
  );
}

export default App;
