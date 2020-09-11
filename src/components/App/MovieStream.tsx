import React, { Component } from 'react';

import { entriesArray } from '../../utils/entries';

import './MovieStream.css';

const entries = entriesArray();

class MovieStream extends Component {
  setState(arg0: {
    entryData: {
      total: number;
      entries: {
        title: string;
        description: string;
        programType: string;
        images: {
          'Poster Art': { url: string; width: number; height: number };
        };
        releaseYear: number;
      }[];
    };
  }) {
    throw new Error('Method not implemented.');
  }

  GET_ENTRY: void;
  state: { entryData: never[] };

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
