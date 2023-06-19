import React from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = ({ handleFavoriteClick, favorites }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem 
          name={photo.user.name} 
          location={photo.location} 
          handleFavoriteClick={() => handleFavoriteClick(photo.id)} 
          isFavorite={favorites.includes(photo.id)} 
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
