import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h4>{title}</h4>
        <h2>{subtitle}</h2>
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
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
  },
};
