import React from "react";
import { NavLink } from "react-router-dom";
import Header from "view/Header/Header";

const Home = () => {
  return (
    <>
      <Header
        heroStyles={
          "full-screen-hero d-flex align-items-center justify-content-center"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="fs-3 mb-2">Welcome to</h4>
              <h1 className="fs-1 mb-2">CRYPTOLANCER</h1>
              <p className="fs-5 mb-2">
                Join cryptolancer to get you work done by top talented
                Cryptolancers.
              </p>
              <p className="fs-6 mb-2">
                We are creating best decentralized freelance marketplace on L2
                Solution like Polygon and later will scale it diffrent EVM
                compatable chains.
              </p>
              <NavLink className="btn m-2 ms-0 btn-primary btn-lg" to="/about">
                POST YOUR REQUIREMENT
              </NavLink>
              <NavLink
                className="btn btn-outline-success m-2 ms-0 btn-lg"
                to="/about"
              >
                JOIN CRYPTOLANCER
              </NavLink>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Home;
