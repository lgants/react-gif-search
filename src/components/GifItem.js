import React from 'react';


// gives us access to image.gif and image.onGifSelect
// const GifItem = (image) => {
// gives us access to our props as gif and onGifSelect directly
const GifItem = ({gif, onGifSelect}) => {
  return (
    <div className="gif-item" onClick={() => onGifSelect(gif)}>
      <img src={gif.images.downsized.url} alt={gif.slug} />
    </div>
  )
};

export default GifItem;
