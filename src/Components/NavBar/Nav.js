import { Link } from 'react-router-dom';
import style from './NavStyle.module.css';
import logo from './logo.png';

function Nav() {
  return (
    <nav className={style.navbar}>
      <div>
        <img src={logo} alt="Logo" className={style.logo} />
      </div>
      <ul className={style.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/book">Book a Table</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
