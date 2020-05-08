import { updateMovie, getMovie } from '../services/movieAPI';
import Loading from '../components/Loading';
import React, { Component } from 'react';
import { MovieForm } from '../components';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getMovie(this.props.match.params.id).then((movie) =>
      this.setState({
        status: 'loaded',
        movie,
      }),
    );
  }

  handleSubmit(updatedMovie) {
    updateMovie(updatedMovie).then(() =>
      this.setState({
        shouldRedirect: true,
      }),
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
