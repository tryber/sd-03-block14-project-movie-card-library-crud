import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    console.log(rating);
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

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.objectOf(PropTypes.object).isRequired,
  params: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
