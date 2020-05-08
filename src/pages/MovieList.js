import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../App.css';

class MovieList extends Component {
  constructor(props) {
    super(props)
      this.state = {
        movies: [],
        loading: 'loading'
      };
  }

  
  componentDidMount() {
    movieAPI.getMovies()
      .then(filmes => this.setState({movies: filmes}))
      .then(this.setState({loading: 'none'}))
      .catch(e => console.log(e));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        <p className={this.state.loading}></p><Loading />
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
