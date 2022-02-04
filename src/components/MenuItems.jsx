import { NavLink } from "react-router-dom";

function MenuItems() {
  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </>
  );
}

export default MenuItems;
