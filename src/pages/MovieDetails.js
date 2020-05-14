import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
      loading: false,
    }));
  }

  render() {
    const { movie, loading } = this.state;

    const {
      imagePath, title, storyline, genre, rating, subtitle, id,
    } = movie;

    if (loading || !movie) return <Loading />;

    return (
      <div data-testid="movie-details">
      <div className="col s12 m6">
        <div className="card horizontal">
          <div className="card-image">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <span className="card-title">{`Title: ${title}`}</span>

          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{`Title: ${title}`}</p>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link to="/">VOLTAR</Link>
              <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.func, PropTypes.object]))
    .isRequired,
};
