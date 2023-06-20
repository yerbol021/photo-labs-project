import React, { useState } from 'react';
import './App.scss';
import './styles/PhotoListItem.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
    showModal,
    selectedPhoto,
    favorites,
    handleFavoriteClick,
    handlePhotoClick,
    handleCloseModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={handlePhotoClick}
        handleFavoriteClick={handleFavoriteClick}
        favorites={favorites}
      />
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
