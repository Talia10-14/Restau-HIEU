import './Header.css';
import logo from '../assets/logo.png';
function Header() {
    console.log(logo);
    
  return (
    <header className="header">
        <img src={logo} alt="ICC Motors Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About US</a></li>
            <li><a href="/services">Services</a></li>
            <li>
                <select name="shop" id="shop">
                <option value="shop">Shop</option>
                </select>
                </li>
          <li><a href="/contact">Contact US</a></li>
        </ul>
      </nav>
      <div className='auth-buttons'>
      <button>Login</button>
      <button>Register</button>

      </div>
    </header>
  );
}

export default Header;