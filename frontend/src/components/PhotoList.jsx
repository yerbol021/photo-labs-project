import React, { useState } from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const PhotoList = ({ handleFavoriteClick, favorites, handlePhotoClick, photos}) => {


  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <li key={photo.id}>
            <PhotoListItem 
              name={photo.user.name} 
              location={photo.location} 
              profile = {photo.user.profile}
              handleFavoriteClick={() => handleFavoriteClick(photo.id)} 
              handlePhotoClick={() => handlePhotoClick(photo.id)} 
              isFavorite={favorites.includes(photo.id)} 
              photoURL={photo.urls.regular}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
