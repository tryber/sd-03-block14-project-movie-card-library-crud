import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    return (
      <div>
        <Link to="movies/:id">VER DETALHES</Link>
        <Route path="movies/:id" />
        <div data-testid="movie-card">
          Movie Card
        </div>
      </div>
    );
  }
}

export default MovieCard;
