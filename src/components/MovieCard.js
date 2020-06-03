import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={`${title} movie cover`} />
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Ver Detalhes</Link>
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
