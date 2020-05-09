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
      requesting: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.toggleRequesting(false, movies);
  }

  toggleRequesting(requesting, movies) {
    this.setState({ requesting, movies });
  }

  render() {
    const { movies, requesting } = this.state;

    if (requesting) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>

    );
  }
}

export default MovieList;
