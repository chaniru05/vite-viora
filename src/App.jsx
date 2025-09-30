import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <main>
        <h1>Welcome to My Vite + React App 🎉</h1>
        <p>This is where your content goes.</p>
      </main>
    </div>
  );
}

export default App;
