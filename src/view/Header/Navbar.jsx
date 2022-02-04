import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./cryptolancer-hr.png" alt="logo" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {props.MenuItems}
            <li className="nav-item">{props.Chains}</li>
            <li className="nav-item">
              <span href="#" className="nav-link">
                {props.Balance}
              </span>
            </li>
          </ul>
          {props.Account}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
