import React from 'react';
import beerArray from '../beerInfo';

const Beers = () => {
  return (
    <div className='container'>
      {beerArray.map((beer) => (
        <div className='img-outer'>
          <span className='textbox'>
            <h1 className='text'>{beer.name}</h1>
          </span>
          <img className='beerimg' src={beer.img} alt='assorted beers' />
        </div>
      ))}
    </div>
  );
};

export default Beers;
