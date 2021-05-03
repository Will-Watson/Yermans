import React from 'react';
import logo from '../yermans.png';

const Home = () => {
  return (
    <div className='home-outer'>
      <div className='home-inner'>
        <img className='logo' src={logo} alt="Yerman's Irish Pub Logo" />
      </div>
    </div>
  );
};

export default Home;
