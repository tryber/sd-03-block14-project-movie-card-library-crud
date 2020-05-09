import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({
      isLoading: false,
      movies,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
