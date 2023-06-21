import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoList from '../components/PhotoList';

export const PhotoDetailsModal = ({ onClose, photo, handleFavoriteClick, favorites }) => {
  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={onClose}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--content">
        <img src={photo.urls.regular} className="photo-details-modal--image" />
        <div className="photo-details-modal--header">
          <h2>Similar Photos</h2>
        </div>
        <div className='.photo-details-modal--images'>
          <PhotoList 
            favorites={favorites}
            photos={photo.similar_photos}
            handleFavoriteClick={handleFavoriteClick}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

