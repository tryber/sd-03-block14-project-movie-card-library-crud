import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { imagePath, storyline, title, id } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;

/* MovieCard.propTypes = {
  movie: PropTypes.object,
}
 */