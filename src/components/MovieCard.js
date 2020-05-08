import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) { super(props); }

  render() {
    const { title, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        {title}
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
