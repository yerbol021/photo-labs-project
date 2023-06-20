import React, { useState } from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const PhotoList = ({ handleFavoriteClick, favorites, handlePhotoClick}) => {


  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <li key={photo.id}>
            <PhotoListItem 
              name={photo.user.name} 
              location={photo.location} 
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

PhotoList.defaultProps = {
  photos: photos
};

export default PhotoList;
