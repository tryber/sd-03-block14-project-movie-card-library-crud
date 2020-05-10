import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMovies: false,
      movies: {},
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.changeState(true, movies);
  }

  changeState(flag, obj) {
    this.setState((state) => {
      return {
        ...state,
        hasMovies: flag,
        movies: obj,
      };
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (!this.state.hasMovies) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
