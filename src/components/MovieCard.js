import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      title, storyline, imagePath, id,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div style={{ backgroundImage: `url(${imagePath})`, width: '100%', height: '60vh' }}>
          <h2>{title}</h2>
        </div>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Ver Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
