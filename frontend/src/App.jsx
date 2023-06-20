import React, { useState } from 'react';
import './App.scss';
import './styles/PhotoListItem.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {
    state,
    handleFavoriteClick,
    handlePhotoClick,
    handleCloseModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={handlePhotoClick}
        handleFavoriteClick={handleFavoriteClick}
        favorites={state.favorites}
      />
      {state.showModal && state.selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={state.selectedPhoto}
          handleFavoriteClick={handleFavoriteClick}
          favorites={state.favorites}
        />
      )}
    </div>
  );
};

export default App;
