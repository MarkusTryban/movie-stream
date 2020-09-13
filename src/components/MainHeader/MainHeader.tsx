import React from 'react';

import './MainHeader.css';

const MainHeader = () => {
  return (
    <div className='main-header'>
      <div id='main-title'>
        <h1>Movie Streaming</h1>
        <h3>Popular Titles</h3>
        <button id='btn-login'>Log in</button>
        <button id='btn-trial'>Strat Trial</button>
      </div>
    </div>
  );
};

export default MainHeader;
