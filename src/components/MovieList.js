import React from 'react';
import PropTypes from 'prop-types';
import { getMovies } from '../services/movieAPI';
import { Loading, MovieCard } from './index';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentWillMount() {
    getMovies()
    .then(
      this.setState(() => (
        { movies: [...JSON.parse(localStorage.getItem('movies'))] }
      )),
    );
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
