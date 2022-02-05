import React from "react";

const AboutSec = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3 text-center">ABOUT US</h1>
            <p className="text-center fs-5">
              Hello!! We are a bunch of passionate Developers who are in love
              with WEB 3.0. We are learning more about the space and are trying
              to solve real world issues using this new ground breaking
              technology.
            </p>
          </div>
          <div className="col-12 py-4">
            <div className="row g-2 justify-content-center">
              <div className="col-12 col-md-6 col-lg-3">
                {/* card   */}
                <div className="card">
                  <img
                    src="./images/kritik.png"
                    className="card-img-top"
                    alt="Kritik"
                  />
                  <div className="card-body">
                    <h3 className="card-title">KRITIK SAH</h3>
                    <small className="card-text mb-3">
                      jr. Frontend developer
                    </small>
                    <p className="card-text">
                      Hello, I'm Kritik Sah 21 years old, web developer and
                      willing to learn new skills so I can improve and perfect
                      those skills which I already have. I want to be a
                      blockchain developer, that's why I am learning it
                      everyday.
                    </p>
                  </div>
                </div>
                {/* card   */}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                {/* card   */}
                <div className="card">
                  <img
                    src="./images/arun.png"
                    className="card-img-top"
                    alt="Arun"
                  />
                  <div className="card-body">
                    <h3 className="card-title">ARUN KC</h3>
                    <small className="card-text mb-3">Data Engineer</small>
                    <p className="card-text">
                      Ahoy!! I'm Arun, a Data Engineer (Backend Dev) by day,
                      Web3 Hacker by night. I'm learning about Web3 and wish to
                      break into this game changing space 😄
                    </p>
                  </div>
                </div>
                {/* card   */}
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                {/* card   */}
                <div className="card">
                  <img
                    src="./images/himanshu.png"
                    className="card-img-top"
                    alt="Kritik"
                  />
                  <div className="card-body">
                    <h3 className="card-title text-uppercase">Himanshu Goel</h3>
                    <small className="card-text mb-3">
                      Smart Contract Developer
                    </small>
                    <p className="card-text">
                      I am a machine learning engineer who got fascinated by the
                      idea of blockchain and the transparency and openness it
                      can bring to the world. So, I am currently building
                      projects to learn more about web3 development.
                    </p>
                  </div>
                </div>
                {/* card   */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSec;
