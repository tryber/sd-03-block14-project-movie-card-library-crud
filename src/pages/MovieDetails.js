import React, { Component } from 'react';
import '../App.css';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  render() {
    // Change the condition to check the state
    //if (true) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.props.movie;

    return (
      <div data-testid="movie-details" className="movie-card-body">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

export default MovieDetails;

/*
  <div data-testid="movie-details" className="movie-card-body">
    <img className='movie-card-image' alt="Movie Cover" src={`../${imagePath}`} />
    <p className='movie-card-title'>{title}</p>
    <p className='movie-card-subtitle'>{subtitle}</p>
    <p className='movie-card-storyline'>{storyline}</p>
    <Link to={`movies/${id}`}>Ver detalhes</Link>
  </div>
*/
