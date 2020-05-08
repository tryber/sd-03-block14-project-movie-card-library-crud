import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    /* componentDidMount() {
      setTimeout(() => {
        movieAPI.getMovies();
      }, 2000);
    } */

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
