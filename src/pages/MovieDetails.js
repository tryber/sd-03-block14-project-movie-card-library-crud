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
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;
    if (movie === undefined) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link className="movie-details-link" to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link className="movie-details-link" to={'/'}>VOLTAR</Link>
        <Link
          className="movie-details-link" to={'/'} onClick={() => movieAPI.deleteMovie(id)}
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
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
