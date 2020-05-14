import React, { Component } from 'react';
// import movie from '../services/movieData';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    if (!this.componentDidMount) return <Loading />;
    const movieId = this.props.match.params.id;
    const movie = movieAPI.getMovie(movieId);
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;
