import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = ({ photos, handleFavoriteClick, isFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem 
          name={photo.user.name} 
          location={photo.location} 
          handleFavoriteClick={handleFavoriteClick} 
          isFavorite={isFavorite} 
          photoURL={photo.urls.regular}/>
        </li>
      ))}
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: photos
};

export default PhotoList;
