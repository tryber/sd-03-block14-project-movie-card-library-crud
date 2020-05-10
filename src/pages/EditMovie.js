import React, { Component } from 'react';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie, shouldRedirect: true }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((movie) => this.setState({ movie, status: false }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    const { history } = this.props;
    if (shouldRedirect) {
      history.push('/');
    }

    if (status) {
      return (<Loading />);
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
