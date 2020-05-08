import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} />
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>
        <Link to={{
          pathname: `movies/${movie.id}`,
          state: {
            movie: this.props.movie,
          }}}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
