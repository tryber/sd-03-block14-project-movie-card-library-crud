import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class MovieCard extends React.Component {
  render() {
    const { title, id, storyline, imagePath } = this.props.movie;
    console.log(this.props.movie);
    return (
      <div className="movie-card-wrapper" data-testid="movie-card">
            <h3>{title}</h3>
            <img src={imagePath} alt={title} />
            <p>{storyline}</p>
            <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
