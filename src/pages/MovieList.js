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
        <Link to="/movies/new" className="add-card-button">ADICIONAR CARTÃO</Link>
        {!movies.length && <Loading /> }
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
