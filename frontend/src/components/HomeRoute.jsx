import React, { useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

export const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  

  const handleFavoriteClick = (photoId) => {
    console.log(photoId)
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

  return (
    <div className="home-route">
      <TopNavigation favoriteCount={favorites.length} />
      <PhotoList 
      handleFavoriteClick={handleFavoriteClick} 
      favorites={favorites} />
    </div>
  );
};

export default HomeRoute;

