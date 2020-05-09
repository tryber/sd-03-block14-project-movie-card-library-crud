import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: [] };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    console.log(this.props.match.params.id);
    const { movie } = this.state;
    // Change the condition to check the state
    if (!movie === []) return (<Loading />);
    
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <>
        <div data-testid="movie-details">
          <img alt={`${title} Cover`} src={`../${imagePath}`} />
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/" >VOLTAR</Link>
        </div>
      </>
    );
  }
}

export default MovieDetails;
