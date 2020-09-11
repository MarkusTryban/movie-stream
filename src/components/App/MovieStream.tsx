import React, { Component } from 'react';

import { entriesArray } from '../../utils/entries';

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
      <div>
        {entriesArr.map((data) => (
          <span>{data.total}</span>
        ))}
      </div>
    );
  }
}

export default MovieStream;
