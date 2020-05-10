import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMovies: false,
      movie: {},
    };
  }

  changeState(flag, obj) {
    this.setState((state) => {
      return {
        ...state,
        hasMovies: flag,
        movie: obj,
      }
    });
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.changeState(true, movie);
  }

  render() {
    // Change the condition to check the state
    if (!this.state.hasMovies) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{`Title: ${title}`}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
