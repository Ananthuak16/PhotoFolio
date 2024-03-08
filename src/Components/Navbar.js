// importing the logo 
import logo from "../logo.jpg"
import './Navbar.css';

function Navbar() {
  return (

    <nav className="navbar">
     
      <img src={logo} alt="logo" width={200}/>
      <h2 className="font">PhotoFolio</h2>
    </nav>
  );
}

export default Navbar;