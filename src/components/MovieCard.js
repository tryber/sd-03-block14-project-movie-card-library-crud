import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h5>{title}</h5>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.number,
  movie: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default MovieCard;
