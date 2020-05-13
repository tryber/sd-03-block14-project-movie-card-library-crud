import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="row" data-testid="movie-list">
        <div className="col s6">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
          <div>
            <Link
              to="/movies/new"
              className="waves-effect waves-light btn-large"
            >
              ADICIONAR CARTÃO
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
