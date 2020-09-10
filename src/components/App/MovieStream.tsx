import React, { Component } from 'react';

import { entriesArray } from '../../utils/entries';

import './MovieStream.css';

const entries = entriesArray();

class MovieStream extends Component {
  GET_ENTRY: void;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      entryData: [],
    };
  }

  getMovieEntry = () => {
    entries.map((result) => {
      this.setState({
        entryData: result,
      });
    });
  };

  render() {
    const { entryData } = this.state;
    return (
      <div>
        <span>{entryData}</span>
      </div>
    );
  }
}

export default MovieStream;
