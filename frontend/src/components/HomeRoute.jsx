import React, { useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

export const HomeRoute = ({handleFavoriteClick, handlePhotoClick, favorites }) => {
  return (
    <div className="home-route">
      <TopNavigation favoriteCount={favorites.length} />
      <PhotoList 
      handleFavoriteClick={handleFavoriteClick} 
      handlePhotoClick= {handlePhotoClick}
      favorites={favorites} />
    </div>
  );
};

export default HomeRoute;

