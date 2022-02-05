import React from "react";

const AboutSec = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3 text-center">ABOUT US</h1>
            <p className="text-center">
              Hello we are Developers, and learning WEB 3.0 and trying to solve
              realworld issues using this new opportunity we get.
            </p>
          </div>
          <div className="col-12 py-4">
            <div className="row g-2 justify-content-between">
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
                      I’m currently working on improving my problem solving
                      skills 😄
                      <br />
                      👀 I'm interested in decentralized systems and full stack
                      development
                    </p>
                  </div>
                </div>
                {/* card   */}
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-none">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSec;
