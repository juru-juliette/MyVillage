
import React from 'react'
import NavBar from "../Navbar/navbar";
import Footer from "../Footer/footer";
export default function Visitor() {
  return (
    <div>
      <NavBar/>
    <div className='container '>
        <div className='form-header'>
            <h1>Visitor Report Form</h1>
        </div>
        <div className='row'>
            <div className='short-p'>
              <p>Vistor's Information:</p>
            </div>
            <div className='col-sm-4'>Names
            <p><input type="text" id="Name"name="Full Name"placeholder="Enter Full Names" required/></p>
            </div>
            <div className='col-sm-4'>ID Number
            <p><input type="text" id="number"name="National ID" placeholder="Enter National ID Number" required/></p>
            </div>
            <div className='col-sm-4'>Gender
            <p><input type="text" id="gender"name="gender" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>Province
            <p><input type="number" id="Name"name="Province" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>District
            <p><input type="email" id="Name" name="District" placeholder="Enter Email" required/></p>
            </div>
            <div className='col-sm-4'>Sector
            <p><input type="text" id="text"name="Sector" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>Reason
            <p><input type="text" id="text"name="reason" placeholder="Enter Reason for staying" required/></p>
            </div>
            <div className='short-p'>
              <p>Host Information:</p>
            </div>
            <div className='col-sm-4'>Names
            <p><input type="text" id="Name"name="Full Name"placeholder="Enter Full Names" required/></p>
            </div>
            <div className='col-sm-4'>ID Number
            <p><input type="text" id="number"name="National ID" placeholder="Enter National ID Number" required/></p>
            </div>
            <div className='col-sm-4'>Gender
            <p><input type="text" id="gender"name="gender" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>Province
            <p><input type="text" id="Name"name="Province"placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>District
            <p><input type="text" id="Name"name="District" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>Sector
            <p><input type="text" id="text"name="Sector" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>Cell
            <p><input type="text" id="text"name="Cell" placeholder="Select" required/></p>
            </div>
            <div className='col-sm-4'>Village
            <p><input type="text" id="text" name="Village" placeholder="Select" required/></p>
            </div>

           
        </div>
        <div class="form-row text-center">
        <div class="col-12">
          <button type="submit" class="btn-sender">
          Report Visitor
          </button>
        </div>
      </div>   
    </div>
    <Footer/> 
    </div>
  );
}

