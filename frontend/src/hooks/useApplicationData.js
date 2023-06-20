import { useReducer, useState } from 'react';
import reducer, { ACTIONS } from './reducer';

const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    topics: [],
    photos: [],
    showModal: false,
  });

  const handleFavoriteClick = (photoId) => {
    if (state.favorites.includes(photoId)) {
     dispatch ({type: ACTIONS.FAV_PHOTO_REMOVED, 
      data: state.favorites.filter((id) => id !== photoId)})

    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, 
        data: [...state.favorites, photoId]})
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