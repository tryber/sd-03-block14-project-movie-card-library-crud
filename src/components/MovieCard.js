import React from 'react';
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    const { title, id } = this.props;
    return (
      <div data-testid="movie-card">
        <h5>{title}</h5>
        <Link to={`movies/:${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
