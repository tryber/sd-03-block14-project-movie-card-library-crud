import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="movies/:id/edit" component={EditMovie} />
        <Route exact path="movies/:id" component={MovieDetails} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/" component={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;
