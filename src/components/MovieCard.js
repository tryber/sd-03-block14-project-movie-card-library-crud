import React from 'react';
import '../App.css';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';

class MovieCard extends React.Component {
  render() {
    const { imagePath, storyline, title, id } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} />
        <h2>{title}</h2>
        <p>{storyline}</p>
        <BrowserRouter>
          <Link to={`movies/${id}`}>Ver detalhes</Link>
          <Route path={`movies/${id}`} render={(props) => <MovieDetails {...props} movieId={id} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default MovieCard;
