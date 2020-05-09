import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    // Render Loading here if the request is still happening
    const { movies } = this.state;
    if (!movies.length) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
