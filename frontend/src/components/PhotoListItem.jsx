import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import TopicListItem from './TopicListItem';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ name, location, handleFavoriteClick, isFavorite,photoURL }) => {
  
  return (
    <div className="photo-list-item">
      <img src={photoURL} alt="Photo" />
      <div className="details">
        <div className="username">{name}</div>
        <div className="location">The photo is made in {location.city} which is in {location.country}</div>
      </div>
      <TopicListItem />
      <PhotoFavButton 
      handleFavoriteClick={handleFavoriteClick} 
      isFavorite ={isFavorite}/>
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
}

export default PhotoListItem