import React, { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TopHeader from "./top_header";
import { routes } from "./../routes";
//import { useHistory } from "react-router-dom";
// import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const AppNavBar = (props) => {
  const navigate = useNavigate()

  const attachEventListener = () => {
    const elements = document.querySelectorAll("li a");
    elements.forEach(element => {
      element.addEventListener('onclick', (e) => {
        e.preventDefault();
        const href = element.getAttribute("href");
        if (href !== "#") {
          setTimeout(() => {
            navigate(href);
          }, 1500);

        }
        console.log(`document.querySelectorAll("li a")`, element.getAttribute("href"));
      });
    });

  }

  useEffect(() => {
    attachEventListener();
  }, []);

  

  const generateLinks = (routes) => {
    let element = [];
      routes && routes.map(route => {
        
        if (route.children.length > 0) {
          element.push(
            <Nav.Link href="#" className={"d-flex flex-row text-secondary"}>
              <FeatherIcon icon={route.icon} />
              <NavDropdown title={route.title} id="collasible-nav-dropdown" style={{ marginLeft: 0, marginTop: -6 }}>
                {
                  route.children.map(child => {
                    return (
                      <NavDropdown.Item href={child.href} onClick={() => navigate(child.href)}>
                        <FeatherIcon icon={child.icon} style={{marginRight: 5}} />
                        {child.title}
                      </NavDropdown.Item>
                    );
                  })
                }
              </NavDropdown>
            </Nav.Link>
          )
        }
        else {
          element.push(<Nav.Link href={route.href}  onClick={() => navigate(route.href)}>
            <FeatherIcon icon={route.icon} />
            <span style={{ marginLeft: 10 }}>{route.title}</span>
          </Nav.Link>);
        }
      });
      
      return element;
  }

  return (
    <>
      <TopHeader />
      <Navbar id="main-menu" style={{ marginTop: 65, backgroundColor: '#20304c' }} collapseOnSelect expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {
                generateLinks(routes)
              }
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default AppNavBar;