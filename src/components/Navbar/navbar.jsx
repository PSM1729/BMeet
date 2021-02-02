import React, { useState } from 'react';
import './navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,Button
} from 'reactstrap';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Heading = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/" className="navbar-brand">BMEET</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{margin:'15px'}} >
          <MenuRoundedIcon style={{ color: "white" }} />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="justify-content-end ml-auto px-3">
            <NavItem>
              <NavLink href="/about" style={{borderBottom:'#001427',paddingLeft:'20px'}}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus" style={{borderBottom:'#001427',paddingLeft:'20px'}}>Contact Us</NavLink>
            </NavItem>
            <NavItem style={{marginBottom:'-60px',paddingLeft:'20px'}}>
              <Button href="/signin" style={{color:'white'}}>JOIN IN</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Heading;