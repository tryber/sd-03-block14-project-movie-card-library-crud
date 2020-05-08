import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <div className="movie-card-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
      </div>
      <Route exact path="/" component={MovieList} />
    </Router>
  );
}

export default App;
