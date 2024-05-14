import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <NavLink to="/" className={style.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={style.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts/create"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Novo Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? style.active : '')}
          >
            Cadastrar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
