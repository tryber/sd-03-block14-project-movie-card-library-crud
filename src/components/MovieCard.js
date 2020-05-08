import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { imagePath, storyline, title, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt={`${title} cover`} src={imagePath} />
        <h4 className="movie-card-title">{title}</h4>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
