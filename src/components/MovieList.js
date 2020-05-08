import React from 'react';
import { getMovies } from '../services/movieAPI';
import { Loading, MovieCard } from './index';

class MovieList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies()
    .then(resolve => this.setState(()=>(
      { movies:[...JSON.parse(localStorage.getItem('movies'))] }
    )));
  }

  render() {
    return (
      <div>
        <Loading />
        { this.state.movies.map((m) => <MovieCard key={m.title} movie={m} />) }
      </div>
    );
  }
}

export default MovieList;
