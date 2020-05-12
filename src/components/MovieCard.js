import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <div data-testid="movie-card">
        <h3>{movie.title}</h3>
        <img src={movie.imagePath} alt={movie.title}/>
        <p>{movie.storyline}</p>
        <Link to={`${movie.title}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
