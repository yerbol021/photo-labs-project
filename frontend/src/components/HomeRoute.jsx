import React from "react";
import '../styles/HomeRoute.scss';
import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";

export const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;