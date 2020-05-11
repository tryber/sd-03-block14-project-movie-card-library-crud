import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
    .then((el) => this.setState({ movie: el }));
  }

  render() {
    const { movie } = this.state;
    // Change the condition to check the state
    if (movie === '') return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
        <Link
          to={{
            pathname: `/movies/${id}/edit`,
            state: {
                movie: this.props.location.state,
            },
          }}
        >
            EDITAR
          </Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
