import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt={movie.title} />
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>
        <Link
          to={{
            pathname: `movies/${movie.id}`,
            state: {
              movie: this.props.movie,
              }
          }}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    genre: '',
    rating: 0,
  },
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};
