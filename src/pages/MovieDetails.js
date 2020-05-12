import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: '',
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((data) => {
        this.setState({ movie: data });
        this.setState({ isLoading: false });
      },
      );
  }

  deleteMovie() {
    movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    // Change the condition to check the state
    if (this.state.isLoading) return <Loading />;
    if (this.state.movie !== undefined) {
      const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to="/">VOLTAR</Link>
          <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
          <Link to="/" onClick={this.deleteMovie} >DELETAR</Link>
        </div>
      );
    }
    return null;
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.checkPropTypes(PropTypes.object),
  params: PropTypes.number,
};

MovieDetails.defaultProps = {
  match: '',
  params: 0,
};
