import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import '../App.css';

//  Tela com os detalhes do filme
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    // Para obter a URL direto das props do objeto (na URL)
    movieAPI.getMovie(this.props.match.params.id)
      .then((filme) => this.setState({ movie: filme }))
      .catch((e) => console.log(e));
  }

  render() {
    if (!this.state.movie) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    return (
      <div data-testid="movie-details" className="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p className="movie-card-title">{title}</p>
        <p className="movie-card-subtitle">Subtitle: {subtitle}</p>
        <p className="movie-card-storyline">Storyline: {storyline}</p>
        <p>Genre: {genre}</p>
        <p className="movie-card-rating">Rating: {rating}</p>
        <Link className="links" to={'/'}>VOLTAR</Link>
        <Link className="links" to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link className="links" to={'/'} onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
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
