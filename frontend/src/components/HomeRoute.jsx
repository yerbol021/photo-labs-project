import React, { useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

export const HomeRoute = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList
        isFavorite={isFavorite}
        handleFavoriteClick={() => setIsFavorite(!isFavorite)}

      />
    </div>
  );
};

export default HomeRoute;

