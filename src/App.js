import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as index from './pages/index';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/movies/new" component={index.NewMovie} />
        <Route strict path="/movies/:id/edit" component={index.EditMovie} />
        <Route strict path="movies/:id" component={index.MovieDetails} />
        <Route component={index.NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
