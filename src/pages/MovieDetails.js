import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
           .then((data) => {
             this.setState({ movie: data });
             this.setState({ isLoading: false });             
           },           
      );      
  }

  render() {
    // Change the condition to check the state
    if (this.state.isLoading) return <Loading />;
    if(this.state.movie != undefined) {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
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
    return null
  }
}

export default MovieDetails;
