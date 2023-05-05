import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import "./overview.css";


function Overview() {
  
  return (
    <div className="descri">
      <div className="main-image">
        <h1 className="header-1">
          Stay informed & connected with your village
        </h1>
        <p className="paragraph-1">
          Discover the power of community with our website designed to connect
          village chiefs, community members, and visitors for a strong, more
          vibrant village
        </p>
        <button className="learn-more">Learn More</button>
      </div>

      <div id="section-1">
        <h1 className="content-header">What We Offer</h1>

        <div className="card-content">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">For Community</h5>

              <p class="card-text">
                Our website provides a streamlined process for villagers to
                request relocation and report any visitors to the village chief
                for increased safety and security.
              </p>
              <div class="card__details">
                <ul>
                  <li>
                    <BsSuitDiamondFill />
                    Relocation Request
                  </li>
                  <li>
                    <BsSuitDiamondFill />
                    Vistor Reporting
                  </li>
                  <li>
                    <BsSuitDiamondFill />
                    Check Status
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">For Village Chief</h5>

              <p class="card-text">
                The chief can use our website to register new homes in the
                village registry, viewing visitors and accepting or rejecting
                relocation request from the community.
              </p>
              <div class="card__details">
                <ul>
                  <li>
                    <BsSuitDiamondFill />
                    Relocation Request
                  </li>
                  <li>
                    <BsSuitDiamondFill />
                    View Vistors
                  </li>
                  <li>
                    <BsSuitDiamondFill />
                    Register New house
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="paragraph-3">
        We strive to make the relocation process easier for villagers and to
        promote a safer living environment.
      </p>

      <div className="row" id="check-check">
        <div className="col-sm-6 " id="check-desc">
          <p id="maindesc-title">Join Our Community</p>
          <p className="maindesc-text">
            {" "}
            Fill this form to be able to connect with your village and provide
            information.
          </p>
          <ul>
            <li className="mainlist">
              <p>
                <FaCheck />
                Submit required information
              </p>
            </li>

            <li className="mainlist">
              <p>
                <FaCheck />
                Account Verification
              </p>
            </li>

            <li className="mainlist ">
              <p>
                {" "}
                <FaCheck />
                Connect with your Village
              </p>
            </li>
          </ul>
        </div>
        <div id="login-form-wrap" className="col-sm-6">
          <div className="form">
            <h2 className="login-h">Login</h2>
            <form class="login-form">
              <p>ID Number</p>
              <input type="text" placeholder="Enter National ID" />
              <p>Email</p>
              <input type="text" placeholder="Enter Phone Number" />
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
