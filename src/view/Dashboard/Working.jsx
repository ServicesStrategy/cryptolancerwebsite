import React from "react";
import ReactEmbedGist from "react-embed-gist";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Working = () => {
  return (
    <section className="container my-4">
      <div className="row">
        <div className="col-md-6 p-2">
          <article>
            <h4>
              # Deployed and tested this Smartcontract on Polygon Mumbai testnet
            </h4>
            <a
              href="https://mumbai.polygonscan.com/address/0xCbA327D1b62FcdA8182941d57b33a97568Ca536F"
              className="btn btn-info my-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check on Polygon scan
            </a>
            <p>
              Freelancer Address : 0x0DB63C9613b3BECf644A298AfECBa450795f612B
            </p>
            <p>Client Address : 0x0DB63C9613b3BECf644A298AfECBa450795f612B</p>
            <hr />
            <h4 className="mb-2"># About This smart contract!</h4>
            <p className="mb-2">
              This contract is an opensource(MIT license) Smartcontract for
              freelancers.
              <br />
              built by:{" "}
              <a
                href="https://github.com/jacksonng77"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github: jacksonng77
              </a>
              .
              <br />
              We found one of his Artical during this Road to web3 Hackthon{" "}
              <a
                href="https://jacksonng.org/freelancer-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Artical
              </a>
              . We also confirmed that we can use this smartcontract for this
              hackthon.
            </p>
            <LiteYouTubeEmbed
              id="ZlkFyVP7XfA"
              title="We also confirmed that we can use this smartcontract for this
              hackthon."
            />
            <hr />
            <h4 className="mb-3"># So How This smart contract works?</h4>
            <p className="mb-3">
              You can read that artical for more details, But we will try to
              explain it in short.
            </p>
            <p className="mb-3">Steps to Follow</p>
            <ul className="list-group my-3">
              <li className="list-group-item">
                <strong>
                  #STEP 1 <em>Freelancer : </em>
                </strong>
                Should Deploy this smart contract
              </li>
              <li className="list-group-item">
                <strong>
                  #STEP 2 <em>Freelancer : </em>
                </strong>
                Should Create one or more Checkpoints/schedules
              </li>
              <li className="list-group-item">
                <strong>
                  #STEP 3 <em>Client : </em>
                </strong>
                Should Accept or End this project[Note : End task will only work
                if this contract have no balance left, or client havent funded
                for the task]
              </li>
              <li className="list-group-item">
                <strong>
                  #STEP 4 <em>Client : </em>
                </strong>
                Should Fund or End this project [Client have to fund each
                checkpoints seprately, Thats how client can pay in parts]
              </li>
              <li className="list-group-item">
                <strong>
                  #STEP 5 <em>Freelancer : </em>
                </strong>
                Should Start working on this project [since Client have alredy
                fund.]
              </li>
              <li className="list-group-item">
                <strong>
                  #STEP 6 <em>Client : </em>
                </strong>
                Should Approve the work done by the freelancer [If he/she
                setisfied with this work. But what if he is not? (so in future
                cryptolancer will solve this issue)]
              </li>
              <li className="list-group-item">
                <strong>
                  #STEP 7 <em>Freelancer : </em>
                </strong>
                Since the work has been aproved by the client now and only now
                Freelancer can withdraw the funds for this peticular checkpoint
                / schudule.
              </li>
              <li className="list-group-item">
                If you have multipal checkpoints/schedulesthen rpeat the steps
                4, 5 , 6 ,7 for each time.
              </li>
            </ul>
          </article>
        </div>
        <div className="col-md-6">
          <ReactEmbedGist gist="kritik-sah/d5fc77d0a35611221f983114bb615016" />
        </div>
      </div>
    </section>
  );
};

export default Working;
