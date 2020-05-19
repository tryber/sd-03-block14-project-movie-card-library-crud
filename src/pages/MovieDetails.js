import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    }
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params).then((movie) =>
      this.setState({ movie }),
    );
  }

  render() {
    const { movie } = this.state;
    if (movie === null) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} >Editar</Link>
        <Link to={'/'} >Voltar</Link>
      </div>
    );
  }
}

export default MovieDetails;
