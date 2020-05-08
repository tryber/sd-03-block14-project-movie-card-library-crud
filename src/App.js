import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <div>Movie Card Library Crud</div>
      <MovieList />
      <MovieDetails />
    </Router>
  );
}

export default App;
