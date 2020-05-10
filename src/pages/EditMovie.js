import React, { Component } from 'react';
import { MovieForm, Loading } from '../components';
import { Redirect, Route } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Para obter a URL direto das props do objeto (na URL)
    movieAPI.getMovie(this.props.match.params.id)
      .then((filme) => this.setState({ movie: filme, status: 'loaded' }))
      .catch((e) => console.log(e));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({movie: updatedMovie, shouldRedirect: true});
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect to='/movies' />
      )
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie" className="movie-edit">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
