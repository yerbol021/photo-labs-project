import React, { useState } from 'react';
import './App.scss';
import './styles/PhotoListItem.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  
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
  
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="App">
      <HomeRoute
      handlePhotoClick={handlePhotoClick}/>
      {/* <PhotoDetailsModal/> */}
      {showModal && selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={selectedPhoto}
        />
      )}
    </div>
  );
};

export default App;
