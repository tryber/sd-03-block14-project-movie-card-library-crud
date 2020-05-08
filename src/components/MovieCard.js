import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    return (
      <>
        <Link to='movies/:id'>VER DETALHES</Link>
        <Route path='movies/:id'/>
        <div data-testid="movie-card">
          Movie Card
        </div>
      </>
    );
  }
}

export default MovieCard;
