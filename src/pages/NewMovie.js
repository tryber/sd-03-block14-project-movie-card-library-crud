import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

import { Redirect } from 'react-router-dom';


class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie);
    this.setState(() => ({ redirect: true }));
  }

  // componentDidMount() {
  //   <Redirect to="/" />
  // }

  render() {
    const { history } = this.props;
    const { redirect } = this.state;
    if (redirect) { history.push('/'); }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
