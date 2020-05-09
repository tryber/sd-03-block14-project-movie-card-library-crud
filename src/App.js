import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      <div className="movie-card-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
      </div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" render={({ match }) => <MovieDetails match={match} />} />
        <Route exact path="/movies/:id/edit" render={({ match }) => <EditMovie match={match} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
