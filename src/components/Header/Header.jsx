import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText
} from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">FB Issue Tracker</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className="mr-auto" navbar />
          <NavbarText>@javilaotz</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;