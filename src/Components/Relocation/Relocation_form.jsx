import React from "react";
import "./Relocation_form.css";
import NavBar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export default function RelocationForm() {
  return (
  <div>
    <NavBar/>
    <div className="container ">
      <div className="form-header">
        <h1>Relocation Request form</h1>
      </div>
      <div className="row">
        <div className="col-sm-4">
          Names
          <p>
            <input
              type="text"
              id="Name"
              name="Full Name"
              placeholder="Enter Full Names"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          ID Number
          <p>
            <input
              type="text"
              id="number"
              name="National ID"
              placeholder="Enter National ID Number"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Gender
          <p>
            <input
              type="text"
              id="gender"
              name="gender"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Phone Number
          <p>
            <input
              type="number"
              id="tel"
              name="Phone Number"
              placeholder="Enter Phone Number"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Email
          <p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
            />
          </p>
        </div>
        <div className="short-p">
          <p>Relocate From:</p>
        </div>
        <div className="col-sm-4">
          Province
          <p>
            <input
              type="text"
              id="Name"
              name="Province"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          District
          <p>
            <input
              type="text"
              id="Name"
              name="District"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Sector
          <p>
            <input
              type="text"
              id="text"
              name="Sector"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Cell
          <p>
            <input
              type="text"
              id="text"
              name="Cell"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Village
          <p>
            <input
              type="text"
              id="text"
              name="Village"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="short-p">
          <p>Relocate To:</p>
        </div>
        <div className="col-sm-4">
          Province
          <p>
            <input
              type="text"
              id="Name"
              name="Province"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          District
          <p>
            <input
              type="text"
              id="Name"
              name="District"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Sector
          <p>
            <input
              type="text"
              id="text"
              name="Sector"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Cell
          <p>
            <input
              type="text"
              id="text"
              name="Cell"
              placeholder="Select"
              required
            />
          </p>
        </div>
        <div className="col-sm-4">
          Village
          <p>
            <input
              type="text"
              id="text"
              name="Village"
              placeholder="Select"
              required
            />
          </p>
        </div>
        {/* <div className="col-12">
          <button className="sender">Send Request</button>
        </div> */}
      </div>
      <div class="form-row text-center">
        <div class="col-12">
          <button type="submit" class="btn-sender">
          Send Request
          </button>
        </div>
      </div>
    </div>
    <Footer/> 
    </div>
    
  );
}
