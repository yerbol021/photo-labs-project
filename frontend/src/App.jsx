import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import './styles/PhotoListItem.scss';
import TopicList from './components/TopicList';


const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="App">
      <div className='photo-list'>
        <TopicList />
        <PhotoList 
        handleFavoriteClick={handleFavoriteClick} 
        isFavorite ={isFavorite}/>
        
      </div>
    </div>
  );
};

export default App;
