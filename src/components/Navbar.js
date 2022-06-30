import logo from '../images/logoA.png';
import '../scss/Navbar.css';

function Navbar() {
  return (
    <header>
      <img src={logo} alt="logo"/>
      <h1>English Dictionary</h1>
    </header>
  );
}

export default Navbar;