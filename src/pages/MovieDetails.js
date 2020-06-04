import React, { Component } from 'react';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const getMovieById = await movieAPI.getMovie(id);
    this.setState({ movie: getMovieById  });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    if (!Object.keys(movie).length) return <Loading />
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{`Title: ${title}`}</h3>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to='/'>VOLTAR</Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
