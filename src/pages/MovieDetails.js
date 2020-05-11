import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
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
    if (movie) this.changeState(true, movie);
    return 0;
  }

  changeState(flag, obj) {
    this.setState((state) => ({
      ...state,
      hasMovies: flag,
      movie: obj,
    }));
  }

  deleteMovie(id) {
    const { history } = this.props;

    movieAPI.deleteMovie(id).then(() => history.push('/'))
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
        <br />
        <Link to={'/'} onClick={() => this.deleteMovie(id)}>DELETAR</Link>
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
