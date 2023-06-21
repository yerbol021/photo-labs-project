import { useReducer, useState } from 'react';
import reducer, { ACTIONS } from './reducer';

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    topics: [],
    photos: [],
    showModal: false,
    selectedPhoto: null,
  });

  const handleFavoriteClick = (photoId) => {
    if (state.favorites.includes(photoId)) {
     dispatch({
       type: ACTIONS.FAV_PHOTO_REMOVED, 
       data: photoId
     })
  
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED, 
        data: photoId
      })
    }
  };

  const handlePhotoClick = (photo) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, 
      data: photo})
  };

  const handleCloseModal = () => {
    dispatch({type: ACTIONS.SET_CLOSE_MODAL,
      data: false,
    })
  };

  return {
    state,
    handleFavoriteClick,
    handlePhotoClick,
    handleCloseModal,
  };
};

export default useApplicationData;