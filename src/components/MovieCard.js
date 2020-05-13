import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      title, subtitle, storyline, rating, imagePath, genre, id,
    } = this.props.movie;
    return (
      <div className="card" data-testid="movie-card">
        <div className="card-image">
          <img className="responsive-image" alt={`${title} Cover`} src={imagePath} />
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
        </div>
        <div className="card-content">
          <p>{storyline}</p>
          <span>{genre}</span>
          <h5>{rating}</h5>
        </div>
        <div className="card-action">
          <Link
            to={`movies/${id}`}
            className="waves-effect waves-light btn-small"
          >
            VER DETALHES
          </Link>
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
