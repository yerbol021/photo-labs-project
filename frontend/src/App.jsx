import React, { useState } from 'react';
import './App.scss';
import './styles/PhotoListItem.scss';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="App">
      <HomeRoute/>
      {/* <PhotoDetailsModal/> */}
    </div>
  );
};

export default App;
