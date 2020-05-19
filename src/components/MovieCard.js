import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="Movie Cover"/>
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

export default MovieCard;
