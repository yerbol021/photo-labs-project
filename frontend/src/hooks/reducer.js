
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_CLOSE_MODAL: 'SET_CLOSE_MODAL',

}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.data],
      }

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== action.data)
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.data,

      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.data,

      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.data,
        showModal: true,

      }

    case ACTIONS.SET_CLOSE_MODAL:
      return {
        ...state,
        showModal: action.data,

      }

      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {
          ...state,
          photoDetails: action.data,
  
        }
        

        

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default reducer;