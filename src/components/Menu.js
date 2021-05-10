import React from 'react';

const Menu = () => {
  return (
    <div className='container'>
      <div className='img-outer'>
        <span className='parchment-outer'>
          <h1>Our Menu</h1>
        </span>
      </div>
      <div className='img-outer'>
        <div className='parchment-outer'>
          <div className='food-course'>Soups</div>
          <div className='food-title'>French Onion Soup</div>
          <div className='food-price'>$5.25</div>
          <div className='food-description'>
            Yerman's classic french onion soup
          </div>
        </div>
        <div className='parchment-outer'>menu box</div>
      </div>
    </div>
  );
};

export default Menu;
