import './App.css'
import Nav from "./components/nav";
import Foot from './components/footer';
import SigninPage from './Pages/signinpage';


function App() {
  return (
    <div>
      <Nav />   {/* Render Navbar */}
      <SigninPage />  {/* Render Signin Page */}  
      <Foot/>   {/*Render Footer*/}
    </div>
  );
}

export default App;

