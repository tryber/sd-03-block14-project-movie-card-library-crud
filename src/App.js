import React from 'react';
// Primeiro Commit
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieForm } from './components/index';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={MovieForm} />
      </Switch>
    </Router>
  );
}

export default App;
