import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((resp) => {
      this.setState({
        movie: resp,
        status: false,
      });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => {
      this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: this.state.movie,
          }}
        />
      );
    };

    if (status) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  };
}


export default EditMovie;

EditMovie.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
}

EditMovie.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({
    id: PropTypes.string.isRequired,
    }),
  }),
};
