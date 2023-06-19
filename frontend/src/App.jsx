import React, { useState } from 'react';
import './App.scss';
import './styles/PhotoListItem.scss';
import HomeRoute from './components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="App">
      <HomeRoute/>
    </div>
  );
};

export default App;
