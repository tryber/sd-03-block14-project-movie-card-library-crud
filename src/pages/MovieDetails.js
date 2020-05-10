import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: undefined,
      isLoading: false,
    };

    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie, isLoading: true }));
  }

  deleteHandler() {
    movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    // Change the condition to check the state
    const { isLoading, movie } = this.state;

    if (!isLoading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

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
        <Link
          to={`/movies/${id}/edit`}
          className="waves-effect waves-light btn-small"
        >
          EDITAR
        </Link>
        <Link to="/" className="waves-effect waves-light btn-small">
          VOLTAR
        </Link>
        <Link
          to="/"
          onClick={this.deleteHandler}
          className="waves-effect waves-light btn-small"
        >
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
