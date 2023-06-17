import React, { useState } from 'react';
import FavIcon from './components/FavIcon';
import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';
import './styles/PhotoListItem.scss';


const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="App">
      <div className='photo-list'>
        <PhotoList handleFavoriteClick={handleFavoriteClick} isFavorite ={isFavorite}/>
        
      </div>
    </div>
  );
};

export default App;
