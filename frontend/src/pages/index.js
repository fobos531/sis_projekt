import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = () => {
  return (
    <Navbar variant="pills">
      <Navbar.Brand href="/">SIS Projekt</Navbar.Brand>
      <NavDropdown title="Authentication & Authorization">
        <NavDropdown.Item as={NavLink} to="/authentication/access_control">
          Access control
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/authentication/authentication_vulnerabilities">
          Authentication vulnerabilities
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/authentication/jwt">
          JSON Web Tokens
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/authentication/session">
          Sessions
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Database">
        <NavDropdown.Item as={NavLink} to="/database/encryption">
          Encryption
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/database/injection">
          Injection
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Network traffic">
        <NavDropdown.Item as={NavLink} to="/network_traffic/cors">
          CORS
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/network_traffic/csrf">
          CSRF
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="User interface">
        <NavDropdown.Item as={NavLink} to="/user_interface/validation">
          Validation
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/user_interface/xss">
          XSS
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default Menu;
