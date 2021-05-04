import React from 'react';
import beerArray from '../beerInfo';

const Beers = () => {
  return (
    <div className='container'>
      <div className='img-outer'>
        <h1 className='text'>header</h1>
      </div>
      <div className='img-outer'>
        <div>
          <h1 className='text'>beer image</h1>
        </div>
        <div>
          <h1 className='text'>beer text</h1>
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
