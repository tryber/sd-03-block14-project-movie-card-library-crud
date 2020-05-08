import React from 'react';
import { getMovies } from '../services/movieAPI';
import { Loading } from './index';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
        <Loading />
        </div>
    );
  }
}

export default MovieList;