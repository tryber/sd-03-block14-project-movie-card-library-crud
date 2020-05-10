import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  componentDidMount() {
    const p = movieAPI.getMovies()
    p.then(result => this.setState((prevState) => ({
      movies: result,
      onRequest: !prevState.onRequest,
    })))
  }

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      onRequest: true,
    }
  }
  
  render() {
    const { movies } = this.state;

    if(this.state.onRequest) {
      return <Loading />
    } else {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      );
    }

  }
}

export default MovieList;
