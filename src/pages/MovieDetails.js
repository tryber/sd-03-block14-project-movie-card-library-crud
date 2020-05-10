import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';


class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMovies: false,
      movie: {},
    };
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.props.match.params.id);
    this.changeState(true, movie);
  }

  changeState(flag, obj) {
    this.setState((state) => ({
      ...state,
      hasMovies: flag,
      movie: obj,
    }));
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

MovieDetails.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
  genre: PropTypes.string,
  rating: PropTypes.number,
  subtitle: PropTypes.string,
}

export default MovieDetails;
