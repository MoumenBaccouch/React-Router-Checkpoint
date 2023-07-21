
import React, { useState } from 'react';
import Add from './Add';
import './App.css'

const Nav = ({ setsearch, moviesData, setmoviesData }) => {
  const [isAddVisible, setIsAddVisible] = useState(false);

  const handleAddClick = () => {
    setIsAddVisible(true);
  };

  const handleCloseClick = () => {
    setIsAddVisible(false);
  };

 

  return (
    <div className='nav'>
      <nav>
        <h1>GoMyMovie</h1>
        <ul>
          <li><input type="text" placeholder='type your movie' onChange={(e)=>setsearch(e.target.value)} /></li>
          <li><button onClick={handleAddClick}>Add+</button></li>
          <li>home</li>
        </ul>
      </nav>
      {isAddVisible && <Add setmoviesData={setmoviesData} moviesData={moviesData} onClose={handleCloseClick} />}
    </div>
  );
};

export default Nav;