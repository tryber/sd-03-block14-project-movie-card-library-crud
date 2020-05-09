import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'
import '../App.css'
import { Link } from 'react-router-dom'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then(result => this.setState({ movies: result }))
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) { return (<Loading />) }
    else {
      return (
        <div>
          <div data-testid="movie-list" className="movie-list">
            {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
          <button><Link to="/movies/new">ADICIONAR CARTÃO</Link></button>
        </div>
      );
    }
  }
}

export default MovieList;
