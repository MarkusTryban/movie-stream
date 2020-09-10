import React, { Component } from 'react';

import { entriesArray } from '../../utils/entries';

import './MovieStream.css';

class MovieStream extends Component {
  GET_ENTRY: void;

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      entryData: [],
    };
    this.GET_ENTRY = entriesArray();
    console.log(entriesArray);
  }

  getMovieEntry = () => {
    fetch(this.GET_ENTRY)
      .then((res) => res.json())
      .then((result) => {
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
