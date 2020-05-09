import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isMovieLoading: true
    }
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
    .then(result => {
      this.setState({
        isMovieLoading:false,
        movie: result
      })
    })
  }

  deleteMovie() {
    movieAPI.deleteMovie(this.props.match.params.id)
  }

  render() {
    if (this.state.isMovieLoading === true) { return <Loading /> }
    else {
      const { title, id, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{title}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <button><Link to={`/`}>VOLTAR</Link></button>
          <button onClick={()=>this.deleteMovie()}><Link to={`/`}>DELETAR</Link></button>
        </div>
      );
    }
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
};

export default MovieDetails;
