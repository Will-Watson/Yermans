import React from 'react';
import { draftArray, bottleArray } from '../beerInfo';

const Beers = () => {
  return (
    <div className='container'>
      <div className='img-outer'>
        <span className='parchment-outer'>
          <h1>Our Draft Beers</h1>
        </span>
      </div>
      <div className='img-outer'>
        <picture>
          <img
            id='beer'
            src='https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt='beer'
          />
        </picture>
        <div className='parchment-outer'>
          {draftArray.map((beer) => (
            <span id='draft-text'>{beer}</span>
          ))}
        </div>
      </div>
      <div className='img-outer'>
        <span className='parchment-outer'>
          <h1>Our Bottled Beers</h1>
        </span>
      </div>
      <div className='img-outer'>
        <picture>
          <img
            id='beer'
            src='https://images.unsplash.com/photo-1544523653-f3b3e6adae8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
            alt='beer'
          />
        </picture>
        <div className='parchment-outer'>
          {bottleArray.map((beer) => (
            <span id='bottle-text'>{beer}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beers;
