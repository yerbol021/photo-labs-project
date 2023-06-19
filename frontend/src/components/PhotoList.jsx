import React, { useState } from 'react';
import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';

const PhotoList = ({ handleFavoriteClick, favorites }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

  return (
    <div>
      <ul className="photo-list">
        {photos.map((photo) => (
          <li key={photo.id} onClick={() => handlePhotoClick(photo)}>
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
      {showModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

PhotoList.defaultProps = {
  photos: photos
};

export default PhotoList;
