import { useState } from 'react';
import './App.css';
import Nav from './components/nav';
import Signup_Page from './Pages/Signup_Page';
import Foot from './components/footer';


function App() {
  return (
    <div>
      <Nav /> {/* Render Navbar */}
      <Signup_Page /> {/* Render Signup Page */}
      <Foot /> {/* Render Footer */}
    </div>
  );
}

export default App;
