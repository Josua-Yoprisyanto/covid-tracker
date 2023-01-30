import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../assets/css/navbar.css";
import { Link } from "react-scroll";
const NavigationBar = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="mt-2">
        <Container fluid>
          <Navbar.Brand href="#">COVID-19 | INDONESIA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <li>
                <Link to="definition" offset={-50} duration={500}>
                  Pengertian
                </Link>
              </li>
            </Navbar.Text>
            <Navbar.Text className="symptoms-pc">
              <li>
                <Link to="symptoms-pc" offset={-50} duration={500}>
                  Gejala
                </Link>
              </li>
            </Navbar.Text>
            <Navbar.Text className="symptoms-mobile">
              <li>
                <Link to="symptoms-mobile" offset={-50} duration={500}>
                  Gejala
                </Link>
              </li>
            </Navbar.Text>
            <Navbar.Text>
              <li>
                <Link to="solution" offset={-50} duration={500}>
                  Solusi
                </Link>
              </li>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
