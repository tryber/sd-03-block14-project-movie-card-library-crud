import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';


class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      route: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    const { history } = this.props;
    movieAPI.createMovie(newMovie)
    .then(this.setState({
      create: true,
      route: history.push('/'),
    }));
  }

  render() {
    const { create, route } = this.state;

    if (create) return <Redirect to={route} />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default NewMovie;
