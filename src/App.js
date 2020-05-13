import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';

import movies from './services/movieData';

class App extends Component() {
  render() {
    return (
      <Router>
        <div>Movie Card Library Crud</div>
        <MovieList movies={movies} />
      </Router>
    );
  }
}

export default App;
