import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  name,
  location,
  profile,
  handleFavoriteClick,
  isFavorite,
  photoURL,
  handlePhotoClick,
}) => {
  return (
    <div className="photo-list-item">
      <PhotoFavButton
        handleFavoriteClick={handleFavoriteClick}
        isFavorite={isFavorite}
      />
      <img src={photoURL} alt="Photo" onClick={handlePhotoClick} />
      <div className="details">
        <img className="profilePic" src={profile} />
        <div className="username">{name}</div>
        <div className="location">
          The photo is made in {location.city} which is in {location.country}
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default PhotoListItem;
