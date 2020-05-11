import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(
      this.props.history.push('/'),
    );
  }

  render(){
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;

NewMovie.defaultProps = {
  redirect: false,
  history: {
    push: '/',
  },
};

NewMovie.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }),
};
