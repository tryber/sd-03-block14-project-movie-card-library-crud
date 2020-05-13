import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: undefined,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies === undefined) return <Loading />;

    return (

      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movies} />)}
      </div>
    );
  }
}

export default MovieList;
