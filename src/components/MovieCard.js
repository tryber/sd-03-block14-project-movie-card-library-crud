import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

//  Representa cada cartão na grade
class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h5>{title}</h5>
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <p>{storyline}</p>
        <Link className="links" to={`movies/${id}`}>Ver detalhes</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  })
};

export default MovieCard;
