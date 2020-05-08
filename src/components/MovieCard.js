import React from 'react';
import MovieDetails from '../pages/MovieDetails';
import '../App.css';
import { Link, Switch, Route } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, storyline, imagePath, subtitle } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <Switch>
          <Route
            path='/movies/:id'
            render={(props) => <MovieDetails {...props} movie={this.props.movie}/>}
          />
        </Switch>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
