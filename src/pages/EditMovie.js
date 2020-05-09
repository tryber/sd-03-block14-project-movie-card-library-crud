import React, { Component } from 'react';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then(result => this.setState({
        movie: result,
        status: 'loaded',
      }))
  }


  handleSubmit(updatedMovie) {
    this.setState(()=>({
      shouldRedirect: true,
    }))
    movieAPI.updateMovie(updatedMovie)
  }

  render() {
    console.log(this.state)
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect === true) {
      return (<Redirect to="/"/>)
    }

    if (status === 'loading') {
      return (<Loading />)
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }),
  }).isRequired,
};

export default EditMovie;
