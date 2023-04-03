import React from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <div>
      <Navbar
        className="navigation-design"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand className="brand-name" href="#home">
            Madagascar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
              <Nav.Link href="#signin">Sign in</Nav.Link>

              <form class="form-inline my-2 my-lg-0 d-flex">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
