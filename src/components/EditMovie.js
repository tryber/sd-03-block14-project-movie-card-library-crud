import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { getMovie, updateMovie } from '../services/movieAPI';
import { MovieForm, Loading } from './index';

class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    getMovie(id)
    .then((movie) =>
    this.setState(() => (
        { movie }
      )),
    );
  }

  handleSubmit(movieChanges) {
    updateMovie(movieChanges)
    .then(() =>
      this.setState({ done: true }),
    );
  }

  render() {
    return (
      <div>
        <div>
        { !this.state.movie.id && <Loading /> }
        </div>
        {
        this.state.done &&
        <Redirect to="/" />
        }
        {
        this.state.movie.id &&
        <MovieForm movie={this.state.movie} onSubmit={this.handleSubmit} />
        }
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
