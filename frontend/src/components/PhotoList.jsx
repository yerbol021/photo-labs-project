import React, { useState } from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const PhotoList = ({ handleFavoriteClick, favorites }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePhotoClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <li key={photo.id} onClick={handlePhotoClick}>
            <PhotoListItem 
              name={photo.user.name} 
              location={photo.location} 
              handleFavoriteClick={() => handleFavoriteClick(photo.id)} 
              isFavorite={favorites.includes(photo.id)} 
              photoURL={photo.urls.regular}
            />
          </li>
        ))}
      </ul>
      {showModal && <PhotoDetailsModal onClose={handleCloseModal} />}
    </div>
  );
};

PhotoList.defaultProps = {
  photos: photos
};

export default PhotoList;
