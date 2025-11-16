import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Nav from './components/nav';
import Foot from './components/footer';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Vendors from './Pages/Vendors';
import Dashboardb from './Pages/db/ud-budget';



// Wrap Routes in a separate component so we can use useLocation
function AppContent() {
  const location = useLocation();
  const hideFooterr = location.pathname.startsWith('/webset'); // 👈 hides footer on dashboard

  return (
    <>
      {/* Floating petals overlay */}
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
        <Route path="/dashboardb" element={<Dashboardb />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* 👇 Footer hidden only on dashboard */}
      {!hideFooterr && <Foot />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
