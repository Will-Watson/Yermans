import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className='navbar'>
    <h3>Yerman's Irish Pub</h3>
    <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  </div>
);

export default NavBar;
