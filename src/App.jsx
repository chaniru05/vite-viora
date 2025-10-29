import { useState } from 'react'
import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import SignInPage from './Pages/signInpage';

function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <SignInPage />  {/* Render SignIn Page */}  
      <Foot/>   {/*Render Footer*/}

    </div>
  );
}

export default App;
