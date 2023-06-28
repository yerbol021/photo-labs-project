import React, { useState, useEffect } from "react";
import "./App.scss";
import "./styles/PhotoListItem.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  const { state, handleFavoriteClick, handlePhotoClick, handleCloseModal } =
    useApplicationData();

  useEffect(() => {
    const fetchPhotos = () => {
      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => {
          setPhotos(data);
        })
        .catch((error) => console.error(error));
    };

    const fetchTopics = () => {
      fetch("/api/topics")
        .then((response) => response.json())
        .then((data) => {
          setTopics(data);
        })
        .catch((error) => console.error(error));
    };

    fetchPhotos();
    fetchTopics();
  }, []);

  return (
    <div className="App">
      <HomeRoute
        handlePhotoClick={handlePhotoClick}
        handleFavoriteClick={handleFavoriteClick}
        favorites={state.favorites}
        photos={photos}
        topics={topics}
        setPhotos={setPhotos}
      />
      {state.showModal && state.selectedPhoto && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={photos.find((photo) => photo.id === state.selectedPhoto)}
          handleFavoriteClick={handleFavoriteClick}
          favorites={state.favorites}
        />
      )}
    </div>
  );
};

export default App;
