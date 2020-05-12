import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, storyline, title, id } = movie;

    return (
      <div data-testid="movie-card">
        <img alt={`${title} COver`} src={imagePath} />
        <h4>{title}</h4>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
