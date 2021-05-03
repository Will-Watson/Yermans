import React from 'react';
import logo from '../yermans.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='img-outer'>
        <div>
          <img className='logo' src={logo} alt="Yerman's Irish Pub Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
