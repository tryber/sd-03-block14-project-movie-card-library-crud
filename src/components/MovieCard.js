import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <h4>{movie.title}</h4>
        <p>{movie.storyline}</p>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    id: 1,
    title: 'Kingsglaive',
    subtitle: 'Final Fantasy XV',
    storyline:
    'King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empires plans to steal the sacred crystal.',
    rating: 4.5,
    imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    bookmarked: true,
    genre: 'action',
  }),
};

export default MovieCard;
