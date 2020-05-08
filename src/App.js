import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <div>Movie Card Library Crud</div>
      <Switch>
        <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
        <Route strict path="/">
          <MovieList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
