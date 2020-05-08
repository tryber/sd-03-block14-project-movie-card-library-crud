import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      
    <Route exact path="/" component={MovieList} />

    </Router>
  );
}

export default App;
