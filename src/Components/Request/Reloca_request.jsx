import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Reloca_request.css";
import { GoDashboard } from "react-icons/go";
import { ImUsers } from "react-icons/im";
import { ImExit } from "react-icons/im";
import { BsPencilSquare } from "react-icons/bs";
import {GiVillage } from "react-icons/gi";
import {MdShareLocation } from "react-icons/md";
import { CgProfile} from "react-icons/cg";
import Table from 'react-bootstrap/Table';

function RelocaRequest(){
  return (
    <div className="row" id="dash-dash">
        <div className="col-sm-2" id="left-dash">
          <p className="loguser"> <CgProfile style={{fontSize: '30px'}}/>Username</p>
          
          <li className="dash-item" >
            <GoDashboard style={{fontSize: '20px'}} />
            <a className="dash-link" href="Dashboard">
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
          <h1 className="dash-h">Current Request</h1>

          {/* <Row>
              <Col>
                <div className="reloca">
                    <p className="reloca-text">ID Numbers</p>
                    <p>1195380002009139</p>
                </div>
              </Col>
              <Col>
                <div className="reloca">
                    <p className="reloca-text">Names</p>
                    <p>Karenzi Nathan</p>
                </div>
              </Col>
              <Col>
                <div className="reloca">
                    <p className="reloca-text">Phone Number</p>
                    <p>0788518090</p>
                </div>
              </Col>
            </Row> */}
            <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ID Number</th>
          <th>Names</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>1195380002009145</td>
          <td>Karenzi Nathan</td>
          <td>0788518090</td>
        </tr>
        <tr>
          
          <td>1199870014574027</td>
          <td>Keza Nelly</td>
          <td>0787873242</td>
        </tr>
        
      </tbody>
    </Table>
          
        </div>
      </div>
  )
}
export default RelocaRequest 