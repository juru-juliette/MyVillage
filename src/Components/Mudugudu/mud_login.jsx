import React, { Component } from "react";
import { NavLink ,Link } from "react-router-dom";
import {GiVillage } from "react-icons/gi";
import "./mud_log.css";
import NavBar from "../Navbar/navbar";

class MudLogin extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      <div className="mud-login-page">
        <div className="left-side">
          <div className="top">
            <NavLink id="nav-menu" to="/">
              <button type="button" className="btn back-btn btn-secondary">
                Back
              </button>
            </NavLink>

            <h1>Welcome !</h1>
          </div>

         <center>
         <div className="logo">
          <GiVillage style={{fontSize: '10rem',marginTop:'2rem'}}/>
            {/* <h1>My Village</h1> */}
          </div>
        </center> 

          <div className="bottom">
            <h4>“Keeping you connected to your village”</h4>
          </div>
        </div>

        <div className="right-side">
          <div className="mud-login">
            <h2>Mudugudu Login</h2>

            <form className="mud-log-form">
              <div className="mud-form">
                <label for="telnum">
                  <b>Telphone Number</b>
                </label>
                <input type="tel" placeholder="+250" name="telnum" />

                <label for="psw">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                />
              </div>

              <div className="log-btn">
              <Link to="/Dashboard">
                <button type="submit" >Login</button>
              </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MudLogin;
