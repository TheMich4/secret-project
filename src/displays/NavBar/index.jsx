// @flow

import './style.css';

import { Navbar } from 'react-bootstrap';
import React from 'react';

type Props = {
  logo: string,
};

const NavBar = ({ logo }: Props) => {
  return (
    <Navbar className="NavBar" variant="dark">
      <Navbar.Brand>
        <img alt="" className="d-inline-block align-top" height="30" src={logo} width="30" />
        SECRET-PROJECT
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
