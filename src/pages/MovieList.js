import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movies.css';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      stat: true,
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      movieAPI.getMovies().then((resp) => {
        const index = resp.find((e) => e.id === this.props.location.state.id);
        const newArrMovies = [...resp];
        newArrMovies[index] = this.props.location.state;
        this.setState({
          movies: newArrMovies,
          stat: false,
        });
      });
    }
    movieAPI.getMovies().then((resp) => {
      this.setState({
        movies: resp,
        stat: false,
      });
    });
  }

  render() {
    const { movies, stat } = this.state;
    // Render Loading here if the request is still happening

    if (stat) return <Loading />;
    return (
      <div data-testid="movie-list" className="container" >
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link className="botao" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}


export default MovieList;

MovieList.defaultProps = {
  location: {
    state: {
      id: '',
    },
  },
};

MovieList.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
