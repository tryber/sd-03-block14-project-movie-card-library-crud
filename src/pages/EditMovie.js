import React, { Component } from 'react';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import PropType from 'prop-types';
import { BrowserRouter, Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie, status: false }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((movie) => this.setState({ movie, shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (status) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propType = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string,
    })
  }).isRequired,
}

export default EditMovie;
