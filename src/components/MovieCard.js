import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt={`${title} movie cover`} className="movie-card-image" />
        <div className="movie-card-body">
          <h3 className="movie-card-title">{title}</h3>
          <h4 className="movie-card-storyline">{storyline}</h4>
        </div>
        <Link to={`/movies/${id}`} className="movie-card-details">VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
    imagePath: Proptypes.string,
    id: Proptypes.number,
  }).isRequired,
};
