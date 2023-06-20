const useApplicationData =  () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);
  
  const handleFavoriteClick = (photoId) => {
    if (favorites.includes(photoId)) {
      setFavorites((prev)=>{
        return prev.filter((id) => id !== photoId)
      });
    } else {
      setFavorites((prev)=>{
        return [...prev, photoId]
      });
    }
  };
  
  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };


  return { }

}


  export default useApplicationData;
