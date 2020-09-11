import React from 'react';

import './MainHeader.css';

const MainHeader = () => {
  return (
    <div className='main-header'>
      <h1>Movie Streaming</h1>
      <button id='btn-login'>Log in</button>
      <button id='btn-trial'>Strat Trial</button>
    </div>
  );
};

export default MainHeader;
