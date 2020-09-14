import React, { Component } from 'react';

import { entriesArray } from '../../utils/entries';

import MainContent from '../MainContent/MainContent';
import MainFooter from '../MainFooter/MainFooter';
import MainHeader from '../MainHeader/MainHeader';

import './MovieStream.css';

const entriesArr = entriesArray();

const MovieStream = () => {
  return (
    <>
      <MainContent />
    </>
  );
};

export default MovieStream;
