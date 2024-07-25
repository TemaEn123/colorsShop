import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="."
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="faq"
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="colors"
          >
            Colors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
