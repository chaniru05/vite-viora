import { useState } from 'react'
import './App.css'
import './Pages/Home'
import './Pages/Vendors'
import './Pages/db/ud'
import './Pages/AboutUs'
import Nav from "./components/nav";
import Foot from './components/footer';

function App() {
  return (
    <div>
      <Router>
      <Nav />   {/* Navigation bar stays on all pages */}
      <Foot/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
      <Footer /> {/* Optional footer */}
    </Router>

    </div>
  );
}

export default App;
