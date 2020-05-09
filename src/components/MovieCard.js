import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const id = this.props.movie.id;
    return (
      <div data-testid="movie-card" className="movie-card">
        <p>{this.props.movie.title}</p>
        <img src={this.props.movie.imagePath} alt="blablabla" />
        <p>{this.props.movie.storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
