import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/movieAPI';
import { Loading, MovieCard } from '../components/index';

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
      <div>
        <div data-testid="movie-list" className="movie-list">
          { !this.state.movies.length && <Loading /> }
          { this.state.movies.map((m) => <MovieCard key={m.title} movie={m} />) }
        </div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

// MovieList.propTypes = {
//  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieList;
