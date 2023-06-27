import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

import "../styles/TopNavigationBar.scss";
import DarkMode from "./DarkMode";

const TopNavigation = ({
  handleFavoriteClick,
  handlePhotoClick,
  favoriteCount,
  photos,
  topics,
  setPhotos,
}) => {
  const handleTopicClick = (topic) => {
    fetch(`http://localhost:8001/api/topics/photos/${topic}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList handleTopicClick={handleTopicClick} topics={topics} />
      <FavBadge favoriteCount={favoriteCount} />
      <DarkMode />
    </div>
  );
};

export default TopNavigation;
