import React, { useState } from 'react';
import './App.scss';
import './styles/PhotoListItem.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);


  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites((prev)=>{
        return prev.filter((id) => id !== photoId)
      });
    } else {
      setFavorites((prev)=>{
        return [...prev, photoId]
      });
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

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={handlePhotoClick}
        handleFavoriteClick={handleFavoriteClick}
        favorites={favorites}
      />
      {/* <PhotoDetailsModal/> */}
      {showModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
          handleFavoriteClick={handleFavoriteClick}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default App;
