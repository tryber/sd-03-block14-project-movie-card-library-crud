import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { imagePath, storyline, title, id } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt={title}/>
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
