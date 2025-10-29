import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import VendorSignUpPage from './Pages/VendorSignUpPage';


function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <VendorSignUpPage />  {/* Render Vendor Sign Up Page */}  
      <Foot/>   {/*Render Footer*/}
    </div>
  );
}

export default App;

