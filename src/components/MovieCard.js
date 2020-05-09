import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt="movie pc" />
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>

        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))
    .isRequired,
};

export default MovieCard;
