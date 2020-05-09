import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <div className="movie-card-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
      </div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={ ({ match }) => <MovieDetails match={match} /> } />
      </Switch>
    </Router>
  );
}

export default App;
