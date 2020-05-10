import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

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
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    {console.log(movies)}
    if(movies==="") return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
