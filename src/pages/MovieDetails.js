import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: undefined,
    };
  }

  componentDidMount() {
    movieAPI.getMovie().then((movie) => this.setState({ movie }));
  }

  render() {
    // Change the condition to check the state
    const {
      id,
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;
    if (!this.state.movie) return <Loading />;

    return (
      <div data-testid="movie-details">
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <span>{title}</span>
        </div>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
