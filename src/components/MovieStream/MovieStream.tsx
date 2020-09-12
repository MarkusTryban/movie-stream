import React, { Component } from 'react';

import { entriesArray } from '../../utils/entries';

import MainContent from '../MainContent/MainContent';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';

import './MovieStream.css';

const entriesArr = entriesArray();

class MovieStream extends Component {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      entryData: [],
    };
  }

  render() {
    return (
      <>
        <MainHeader />
        <MainContent />
        <MainFooter />
      </>
    );
  }
}

export default MovieStream;
