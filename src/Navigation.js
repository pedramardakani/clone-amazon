import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-feather";

export default function Navigation() {
  const NavUnlisted = styled.ul`
    text-decoration: none;
  `;
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "white",
  };

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
            <Nav>
              <div className="router-links">
                <NavUnlisted>
                  <Link to="/" style={linkStyle}>
                    Home
                  </Link>
                  <Link to="/Cart" style={linkStyle}>
                    Cart
                  </Link>
                  <Link to="/signin" style={linkStyle}>
                    Sign in
                  </Link>
                </NavUnlisted>
              </div>
              <form class="form-inline my-2 my-lg-0 d-flex">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  aria-label="Search"
                  placeholder="search"
                ></input>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <Icon.Search />
                </button>
              </form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
