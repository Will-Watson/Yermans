import React from 'react';
import beerArray from '../beerInfo';

const Beers = () => {
  return (
    <div className='container'>
      <div className='img-outer'>
        <span className='parchment-outer'>
          <h1>Our Beers on Draft</h1>
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
          {beerArray.map((beer) => (
            <span id='beer-text'>{beer.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beers;

//<div className='container'>
//   {beerArray.map((beer) => (
//     <div className='img-outer'>
//       <span className='textbox'>
//         <h1 className='text'>{beer.name}</h1>
//       </span>
//       <img className='beerimg' src={beer.img} alt='assorted beers' />
//     </div>
//   ))}
// </div>
