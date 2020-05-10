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
      <div className="card" data-testid="movie-card">
        <div className="card-image">
          <img alt={`${title} Cover`} src={imagePath} />
          <span>{title}</span>
        </div>
        <div className="card-content">
          <h5>{subtitle}</h5>
          <h6>{genre}</h6>
          <p>{storyline}</p>
        </div>
        <div className="card-action">
          <Link
            to={`movies/${id}`}
            className="waves-effect waves-light btn-small"
          >
            VER DETALHES
          </Link>
        </div>
        <div className="card-content">
          <span>{rating}</span>
        </div>
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
