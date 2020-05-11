import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMovie } from '../services/movieAPI';
import { Loading } from './index';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentWillMount() {
    getMovie(1)
    .then((movie) =>
    this.setState(() => (
        { movie }
      )),
    );
  }

  render() {
    const { title, subtitle, storyline, rating, imagePath, id } = this.state.movie;
    return (
      <div>
        <div>
          { !this.state.movie.id && <Loading /> }
        </div>
        {
        this.state.movie.id &&
        <div data-testid="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
          <div className="movie-card-body">
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
          </div>
          <p>Rating: {rating}</p>
          <div>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={this.deleteMovie}>DELETAR</Link>
          </div>
        </div>
        }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
