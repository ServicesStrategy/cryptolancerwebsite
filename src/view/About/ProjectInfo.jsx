import React from "react";

const ProjectInfo = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3">PROJECT INFO</h1>
            <h4 className="mb-3"># WHAT ARE WE BUILDING?</h4>
            <p className="mb-3">
              Cryptolancer.in is a decentralized application which will offer
              its users to Hire talented freelancers and pay in crypto. We are
              planning to launch it on Polygon Matic Chain, since it has very
              less gas fee. and have a huge ecosystem & potential of growth. and
              later we will scale it to other chains.
            </p>

            <p className="mb-3">
              we want to create a freelance marketplace like fiverr, but
              decentralized all transactions will happen on blockchain with
              complete transparency + without reviling someone's Identity over
              public blockchain, and freelancer/user can earn in crypto and
              start using our web 3.0 ecosystem. without any initial investment.
              we will provide a platform that will connect talented developers,
              artists with employers,
            </p>

            <p className="mb-3">
              we are using moralis web3 provider so we are in our development
              phase so we are only focusing on polygon chain. we will deploy our
              test contracts on testnet very soon
            </p>

            <h4 className="mb-3"># WHAT PROBLEMS ARE WE SOLVING?</h4>

            <div className="accordion" id="accordionAbout">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Problem #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionAbout"
                >
                  <div className="accordion-body">
                    With the help of smart contracts we will be replacing banks
                    and Payment gateways, since we will be using Polygon (L2
                    solution on ETH) the gas price will be automaticly reduced.
                    well suted for our needs.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Problem #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionAbout"
                >
                  <div className="accordion-body">
                    We will be connecting you with a freelace tallent, and with
                    this i hope many new crypto user will start their crypto
                    journey, Since many of us dont want to put real money at
                    first so they can earn from cryptolancer and use the other
                    dapps
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-3">checkout our plan and cash flow:</p>

            <a
              href="https://drive.google.com/file/d/12baBQtMmsUcHhaRRtfSalu-V4hSh60lF/view?usp=sharing"
              className="btn btn-success"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download .pdf
            </a>
          </div>
          <div className="col-md-6">
            <img src="./images/plan.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
