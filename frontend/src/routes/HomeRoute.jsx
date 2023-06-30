import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

export const HomeRoute = ({
  handleFavoriteClick,
  handlePhotoClick,
  favorites,
  photos,
  topics,
  setPhotos,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        favoriteCount={favorites.length}
        setPhotos={setPhotos}
        topics={topics}
      />
      {photos.length > 0 && (
        <PhotoList
          handleFavoriteClick={handleFavoriteClick}
          handlePhotoClick={handlePhotoClick}
          favorites={favorites}
          photos={photos}
          topics={topics}
          setPhotos={setPhotos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
