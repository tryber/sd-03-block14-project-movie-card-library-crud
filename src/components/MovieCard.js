import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
      id,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt={`${title} Cover`} src={imagePath} />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
        <span>{rating}</span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
