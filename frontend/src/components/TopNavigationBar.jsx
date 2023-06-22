import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ handleFavoriteClick, handlePhotoClick, favoriteCount, photos, topics, setPhotos }) => {
  const handleTopicClick = (topic) => {
    console.log('topic:', topic);
    fetch(`http://localhost:8001/api/topics/photos/${topic}`)
      .then(response => response.json())
      .then(data => {
        console.log({ data });
        setPhotos(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList handleTopicClick={handleTopicClick}
        // onLoadTopic={onLoadTopic}
        topics={topics} />
      <FavBadge favoriteCount={favoriteCount} />
    </div>
  );
};

export default TopNavigation;
