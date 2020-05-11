import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    return (
      <div data-testid="movie-card">
        <h3> {this.props.movie.title} </h3>
         <p>{this.props.movie.storyline}</p>
        <Link to={`/movies/${this.props.movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.checkPropTypes(PropTypes.object),
};

MovieCard.defaultProps = {
  movie: '',
};
