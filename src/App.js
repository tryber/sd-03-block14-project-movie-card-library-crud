import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { NewMovie, EditMovie, MovieDetails, MovieList } from './pages';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/:id/edit" component={EditMovie} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
