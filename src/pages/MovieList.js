import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const getMovies = await movieAPI.getMovies();
    this.setState({ movies: getMovies})
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        {!movies.length && <Loading /> }
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
