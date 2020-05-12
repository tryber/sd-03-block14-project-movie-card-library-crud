import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    const { match } = this.props;
    movieAPI.getMovie(match.params.id)
      .then((movie) => {
        this.setState({ movie, status: false })
      });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((movie) => {
        this.setState({ movie, shouldRedirect: true, })
      });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (status) return <Loading />

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    })
  }),
}

export default EditMovie;
