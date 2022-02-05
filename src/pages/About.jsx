import React from "react";
import AboutSec from "view/About/AboutSec";
import Header from "view/Header/Header";
import ProjectInfo from "view/About/ProjectInfo";

const About = () => {
  return (
    <>
      <Header
        heroStyles={
          "page-header d-flex align-items-center justify-content-center"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="fs-1 text-center">ABOUT CRYPTOLANCER</h1>
            </div>
          </div>
        </div>
      </Header>
      <ProjectInfo />
      <AboutSec />
    </>
  );
};

export default About;
