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
    movieAPI.getMovies()
    .then((response) => this.setState({ movies: response }))
    .catch((error) => console.log(error));
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    // Render Loading here if the request is still happening
    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) =>
            <MovieCard key={movie.title} movie={movie} className="movie-card-header" />)}
        </div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
