import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PropType from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, storyline, id } = movie;
    return (
      <div>
        <div data-testid="movie-card">
          <p>{title}</p>
          <img src={imagePath} alt={title} />
          <p>{storyline}</p>
          <Link
            to={{
              pathname: `/movies/${id}`,
            }}
          >
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    imagePath: PropType.string,
    storyline: PropType.string,
    id: PropType.number,
  }).isRequerid,
};

export default MovieCard;
