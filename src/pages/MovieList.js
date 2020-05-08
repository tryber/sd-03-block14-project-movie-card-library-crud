import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  componentDidMount(){
    movieAPI.getMovies()
  }
  render() {
    //const { movies } = this.state;

    

    // Render Loading here if the request is still happening
    //if(movies===null) return 'loading...'
    return (
      <div data-testid="movie-list">
        {console.log(movieAPI.getMovies)}
      </div>
    );
  }
}

export default MovieList;
