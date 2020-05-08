import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <div>Movie Card Library Crud</div>
      <div>
        <MovieList />
      </div>
    </Router>
  );
}

export default App;
