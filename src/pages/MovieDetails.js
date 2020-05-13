import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id)
      .then((movie) => this.setState({ movie, status: false }));
  }

  render() {
    const { movie, status } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (status) return <Loading />;

    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <button>DELETE</button>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propType = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    })
  }).isRequired,
}
