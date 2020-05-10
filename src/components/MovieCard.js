import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

//  Representa cada cartão na grade
class MovieCard extends React.Component {
  render() {
    const { id, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p>{storyline}</p>
        <Link className="links" to={`movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  id: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
};

export default MovieCard;
