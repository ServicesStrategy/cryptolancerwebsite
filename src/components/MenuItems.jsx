import { NavLink } from "react-router-dom";
import { useMoralis } from "react-moralis";
// import { useState } from "react";

function MenuItems() {
  const { isAuthenticated, account } = useMoralis();
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
      {isAuthenticated || account ? (
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
}

export default MenuItems;
