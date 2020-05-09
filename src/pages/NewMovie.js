import React, { Component } from 'react';
import { Redirect, BrowserRouter } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then((result) => {
        if (result) this.setState({ shouldRedirect: true });
        console.log('erro');
        return null;
      }).catch((error) => console.log(error));
  }

  render() {
    if (this.state.shouldRedirect) return <BrowserRouter><Redirect to="/" /></BrowserRouter>;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
