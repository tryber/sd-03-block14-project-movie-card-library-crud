import React from 'react';
// import { getMovies } from '../services/movieAPI';
import { Loading, MovieCard } from './index';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <Loading />
        <MovieCard />
      </div>
    );
  }
}

export default MovieList;
