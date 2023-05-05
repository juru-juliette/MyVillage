import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./mud_dashboard.css";
import { GoDashboard } from "react-icons/go";
import { ImUsers } from "react-icons/im";
import { ImExit } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import {GiVillage } from "react-icons/gi";
import {MdShareLocation } from "react-icons/md";
import { CgProfile} from "react-icons/cg";
function MudDashboard() {
  return (
    
      <div className="row" id="dash-dash">
        <div className="col-sm-2" id="left-dash">
          <p className="loguser"> <CgProfile style={{fontSize: '30px'}}/>Username</p>
          
          <li className="dash-item" >
            <GoDashboard style={{fontSize: '20px'}} />
            <a className="dash-link" href="/">
              <span>Dashboard</span>
            </a>
          </li>
          <li className="dash-item">
            <MdShareLocation style={{fontSize: '20px'}}/>
            <a className="dash-link" href="RelocaRequest">
              <span>Relocation Requests</span>
            </a>
          </li>
          <li className="dash-item">
            <ImUsers style={{fontSize: '20px'}}/>
            <a className="dash-link" href="/">
              <span>Visitors</span>
            </a>
          </li>
          <li className="dash-item">
            <GiVillage style={{fontSize: '20px'}}/>
            <a className="dash-link" href="/">
              <span>Village Member</span>
            </a>
          </li>
          <li className="dash-item">
            <BsPencilSquare style={{fontSize: '20px'}}/>
            <a className="dash-link" href="/">
              <span>Register New House</span>
            </a>
          </li>

          <li className="dash-item">
            <ImExit style={{fontSize: '20px'}}/>
            <a className="dash-link" href="/">
              <span>Logout</span>
            </a>
          </li>

        </div>
        <div className="col-sm-10" id="right-dash">
          <h1 className="dash-h">Welcome to Village Amahoro</h1>
          <div className="card-content">
            <Row>
              <Col>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">3</h5>

                    <p className="card-text">New Request</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">0</h5>

                    <p className="card-text">New Visitors</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="card-content">
            <Row>
              <Col>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">12000</h5>

                    <p className="card-text">Members</p>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">50</h5>

                    <p className="card-text">Houses</p>
                  </div>
                </div>
              </Col>
            </Row>

           
          </div>
        </div>
      </div>
    
  )
}

export default MudDashboard
