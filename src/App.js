import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        {/*  <Route path="/movies/new" component={Index.NewMovie} />
        <Route path="/movies/:id/edit" component={Index.EditMovie} />
        <Route path="/movies/:id" component={Index.MovieDetails} />
        <Route component={Index.NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;
