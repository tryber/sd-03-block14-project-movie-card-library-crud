import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

//  Gera a grade com filmes
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((filmes) => this.setState({ movies: filmes }))
      .catch((e) => console.log(e));
  }

  render() {
    const { movies } = this.state;

    if (!this.state.movies.length) return <Loading />

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
