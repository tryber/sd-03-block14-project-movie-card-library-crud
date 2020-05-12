import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
    // this.state.loading = this.state.bind(this);
    console.log('props', props);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI
      .getMovie(id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    const {
      title, storyline, imagePath, genre, rating, subtitle, id,
    } = movie;
    if (!Object.keys(movie).length) { return <Loading />; }
    return (
      <div data-testid="movie-details">
        <h3>{title}</h3>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movie/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieDetails;
