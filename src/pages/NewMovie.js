import React, { Component } from 'react';
import { Redirect, BrowserRouter } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState(() => ({ create: true }));
  }

  render() {
    const { create } = this.state;

    // if (!create) {
    //   return (
    //     <BrowserRouter>
    //       <Redirect to="/" />
    //     </BrowserRouter>
    //   );
    // }

    return (
      <div data-testid="new-movie">
        deu certo
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
