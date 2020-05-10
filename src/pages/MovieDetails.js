import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      movie: null,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) =>
      this.setState({
        isLoading: true,
        movie,
      })
    );
  }

  handleDelete() {
    movieAPI.deleteMovie(this.props.match.params.id);
  }

  render() {
    const { isLoading, movie } = this.state;

    if (!isLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid='movie-details'>
        <div>
          <img alt='Movie Cover' src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <br />
        <Link to='/'>VOLTAR</Link>
        <Link to='/' onClick={this.handleDelete}>
          DELETAR
        </Link>
      </div>
    );
  }
}

// um link com o texto "EDITAR" apontando para a rota /movies/:id/edit
// e um link apontando para a rota raiz (/) com o texto "VOLTAR".

export default MovieDetails;
