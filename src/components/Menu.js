import React from 'react';
import {
  soupsAndSalads,
  wings,
  appetizers,
  burgersAndSandwiches,
  entrees,
  sideOrders,
  childrensMenu,
} from '../foodInfo';

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
          <div className='food-course'>Soups and Salads</div>
          {soupsAndSalads.map((item, i) => (
            <div className='name-and-price'>
              <div className='item-name'>{item.name}</div>
              <div className='item-price'>{item.price}</div>
            </div>
          ))}
        </div>

        <div className='parchment-outer'>
          <div className='food-course'>Wings</div>
          {wings.map((item, i) => (
            <div className='name-and-price'>
              <div className='item-name'>{item.name}</div>
              <div className='item-price'>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
