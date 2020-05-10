import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: undefined,
      isLoading: false,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovies()
      .then((movies) => this.setState({ movies, isLoading: true }));
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    return !isLoading ? (
      <Loading />
    ) : (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
