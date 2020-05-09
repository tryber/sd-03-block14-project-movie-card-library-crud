import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount() {
    await this.setState({ loading: true });
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loading: false });
  }

  async deleteMovie(e) {
    const { match: { params: { id } }, history } = this.props;
    e.preventDefault();
    movieAPI.deleteMovie(id);
    history.push('/');
  }


  render() {
    const { movie } = this.state;
    const { loading } = this.state;
    if (loading) return <Loading />;

    const {
      title, storyline, imagePath, genre, rating, subtitle,
    } = movie;
    const { match: { params: { id } } } = this.props;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title:${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <a href="/" onClick={this.deleteMovie}>DELETAR</a>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))
    .isRequired,
};

export default MovieDetails;
