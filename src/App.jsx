import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/nav';
import Foot from './components/footer';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Vendors from './Pages/Vendors';


// ✅ Optional future pages
// import Vendors from './Pages/Vendors';
// import Dashboard from './Pages/Dashboard';
// import Login from './Pages/Login';

function App() {
  return (
    <Router>
      {/* Floating petals overlay for a subtle wedding vibe */}
      <div className="wedding-vibe-overlay" aria-hidden="true">
        <span className="petal" />
        <span className="petal cream" />
        <span className="petal" />
        <span className="petal cream" />
        <span className="petal" />
        <span className="petal cream" />
        <span className="petal" />
        <span className="petal cream" />
        <span className="petal" />
        <span className="petal cream" />
      </div>

      {/* Navbar always visible */}
      <Nav />

      {/* Main route content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vendors" element={<Vendors />} />
        {/* Optional future routes */}
        {/* <Route path="/vendors" element={<Vendors />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}

        {/* Catch-all (404) */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* Footer always visible */}
      <Foot />
    </Router>
  );
}

export default App;
