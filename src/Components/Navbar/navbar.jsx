import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink,Link } from "react-router-dom";
import {GiVillage } from "react-icons/gi";
import logo from "../../images/logos2.png";
// import {useRef} from 'react';
import "./navbar.css";

function NavBar() {

  // const ref = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Navbar fixed="top" className="main-nav" collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link className="logo-tittle " to="/">
            <span><GiVillage style={{fontSize: '3rem', marginLeft:'3rem'}}/>MyVillage</span>
            
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto myNav">
            <NavLink id="nav-menu" to="/">Home</NavLink>
            <NavLink id="nav-menu" onClick={handleClickScroll}>About</NavLink>
            <NavLink id="nav-menu" to ="/Relocation">Relocation Request</NavLink>
            <NavLink id="nav-menu" to ="/Visitor">Register Visitors</NavLink>
            <NavLink id="nav-menu">Check Status</NavLink>
            
          </Nav>
          <Nav className="nav-btn">
            <NavLink id="nav-menu" to ="/Mudugudu">
               Mudugudu
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
