import { useState } from 'react';

const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites((prev) => prev.filter((id) => id !== photoId));
    } else {
      setFavorites((prev) => [...prev, photoId]);
    }
  };

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

  return {
    showModal,
    selectedPhoto,
    favorites,
    handleFavoriteClick,
    handlePhotoClick,
    handleCloseModal,
  };
};

export default useApplicationData;
