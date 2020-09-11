import React, { Component } from 'react';

class MainHeader extends Component {
  render() {
    return (
      <div className='main-header'>
        <h1>Movie Streaming</h1>
        <button id='btn-login'>Log in</button>
        <button id='btn-trial'>Strat Trial</button>
      </div>
    );
  }
}

export default MainHeader;
