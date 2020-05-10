import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      imagePath,
      storyline,
      title,
      id,
    } = movie;
    return (
      <div data-testid="movie-card">
        <img alt={`${title} cover`} src={imagePath} />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
