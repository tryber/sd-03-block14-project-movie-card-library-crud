import React from 'react';
import MovieDetails from '../pages/MovieDetails';
import { Link } from 'react-router-dom';
import '../App.css';

//  Representa cada cartão na grade
class MovieCard extends React.Component {
  render() {
    const { id, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
