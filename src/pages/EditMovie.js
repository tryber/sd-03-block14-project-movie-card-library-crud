import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    console.log('constructing Edit movie');
    console.log(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('constructed Edit movie');
    this.setMovieToState();
  }

  setMovieToState() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, status: 'loaded' }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie.target.value);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return <Redirect path="/" />;
    }

    if (status === 'loading') { return <Loading />; }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
EditMovie.propTypes = {
  match: PropTypes.isRequired,
};

export default EditMovie;
