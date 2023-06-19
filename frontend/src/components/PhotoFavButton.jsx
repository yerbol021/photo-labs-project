import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({isFavorite, handleFavoriteClick}) {
  // console.log("button click")
  return (
    <div className="photo-list__fav-icon" onClick={handleFavoriteClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={isFavorite? "red" : "white"}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;