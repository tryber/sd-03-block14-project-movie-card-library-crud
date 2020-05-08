import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    const status = movieAPI.getMovies();
    this.state = status;
    console.log(status);
  }

  render() {
    console.log(this);
    const { movies } = this.state;
    if (!this.componentDidMount) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    // Render Loading here if the request is still happening
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
