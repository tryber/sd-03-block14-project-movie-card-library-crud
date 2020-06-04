import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const getMovies = await movieAPI.getMovies();
    this.setState({ movies: getMovies });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        {!movies.length && <Loading /> }
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
