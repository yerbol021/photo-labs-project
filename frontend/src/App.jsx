import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import './App.scss';
import './styles/PhotoListItem.scss';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from './components/HomeRoute';


const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="App">
      {/* <div className='photo-list'>
        <TopNavigation />
        <PhotoList 
        handleFavoriteClick={handleFavoriteClick} 
        isFavorite ={isFavorite}/>
        
      </div> */}
      <HomeRoute/>
    </div>
  );
};

export default App;
