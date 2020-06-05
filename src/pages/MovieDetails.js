import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovieById();
  }

  async fetchMovieById() {
    const { id } = this.props.match.params;
    const getMovieById = await movieAPI.getMovie(id);
    this.setState({ movie: getMovieById });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (!Object.keys(movie).length) return <Loading />;
    return (
      <div data-testid="movie-details" className="details-card">
        <img alt="Movie Cover" src={`../${imagePath}`} className="details-image" />
        <div className="details-container">
          <h3 className="details-title">{`Título: ${title}`}</h3>
          <p className="details-rating">{`Avaliação: ${rating}`}</p>
        </div>
        <p className="details-subtitle">{`Subtítulo: ${subtitle}`}</p>
        <p className="details-storyline">{`Sinopse: ${storyline}`}</p>
        <p className="details-genre">{`Gênero: ${genre}`}</p>
        <div className="details-buttons">
          <Link to={`/movies/${id}/edit`} className="details-button">EDITAR</Link>
          <Link to="/" className="details-button">VOLTAR</Link>
          <Link
            className="details-button"
            to="/"
            onClick={() => movieAPI.deleteMovie(id)}
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
