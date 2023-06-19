import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({ isFavPhotoExist, favoriteCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon 
      width={20} 
      height={17} 
      fill="#C80000" 
      displayAlert={!!isFavPhotoExist}
      />
      {favoriteCount}
    </div>
  ) 
};

export default FavBadge;
