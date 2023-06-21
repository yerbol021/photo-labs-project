import React, { useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

export const HomeRoute = ({ handleFavoriteClick, handlePhotoClick, favorites, photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigation favoriteCount={favorites.length} />
      {photos.length > 0 && <PhotoList
        handleFavoriteClick={handleFavoriteClick}
        handlePhotoClick={handlePhotoClick}
        favorites={favorites}
        photos={photos} />}
    </div>
  );
};

export default HomeRoute;

