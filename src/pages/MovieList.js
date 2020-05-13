import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movie) => this.setState({ movies: movie }));
  }

  render() {
    const { movies } = this.state;
    if (!movies.length) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new" >ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
