import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'noneLink link'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'noneLink link'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/News"
          className={({ isActive }) =>
            isActive ? 'activeLink' : 'noneLink link'
          }
        >
          News
        </NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
