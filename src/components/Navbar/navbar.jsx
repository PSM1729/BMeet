import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Nav_ele';
const Heading = () => {

  return (
    <div>
    <Nav>
      <NavLink to="/">
        <h1>BONJOUR MEET</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about" activeStyle>ABOUT</NavLink>
        <NavLink to="/contactus" activeStyle>CONTACT US</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">JOIN IN</NavBtnLink>
      </NavBtn>
      </Nav>
      </div>
  );
}


export default Heading;