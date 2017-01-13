// file deprecated
import React from 'react';

// this function expects an object passed in with a property gifs; this syntax allows us to pull out the gifs property of whatever object is passed in and automatically assign it to a variable named gifs
const GifsTemp = ({gifs}) => {
  const gifItems = gifs.map((gif) => {
    return(
      <li key={gif.id}><img src={gif.url} alt={gif.slug} /></li>
    );
  });

  return (
    <ul className="gif-list">{gifItems}</ul>
  );
};

export default GifsTemp;
