import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components/index';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      deleted: false,
    };
    this.deleteMoviex = this.deleteMoviex.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { id } = this.props.match.params;

    getMovie(id)
    .then((movie) =>
    this.setState(() => (
        { movie }
      )),
    );
  }

  deleteMoviex() {
   deleteMovie(this.state.movie.id);
   this.setState({delete:true});
   if(this.state.delete) this.componentWillUnmount()
  }

  render() {
    const { title, subtitle, storyline, rating, imagePath, genre, id } = this.state.movie;
    return (
      <div data-testid="movie-details">
        <div>
          { !this.state.movie.id && <Loading /> }
        </div>
        {
        this.state.movie.id &&
        <div data-testid="movie-card">
          <img alt="Movie Cover" className="movie-card-image" src={`../${imagePath}`} />
          <div className="movie-card-body">
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
          </div>
          <div>
            <p>Genero: {genre}</p>
          </div>
          <div>
            <p>Rating: {rating}</p>
          </div>
          <div>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link to="/" onClick={this.deleteMoviex}>DELETAR</Link>
          </div>
        </div>
        }
        <div>
        {
        this.state.delete &&
        <Redirect to="/" />
        }
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
