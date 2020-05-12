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
    .then((movies) =>
    this.setState(() => (
        { movies: [...movies] }
      )),
    );
  }

  render() {
    return (
      <div data-testid="movie-list">
        { !this.state.movies.length && <Loading /> }
        { this.state.movies.map((m) => <MovieCard key={m.title} movie={m} />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
