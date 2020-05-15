import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <div>
      <div className="movie-card-header">
        <h2 className="movie-title">Movie Card Library Crud!!</h2>
      </div>
      <main>
        <Switch>
          <Route
            exact path="/" render={(props) => <MovieList {...props} data-testid="movie-list" />}
          />
          <Route
            path="/movies/new" render={(props) => <NewMovie {...props} data-testid="new-movie" />}
          />
          <Route
            strict path="/movies/:id/edit"
            render={(props) => <EditMovie {...props} data-testid="edit-movie" />}
          />
          <Route
            strict path="/movies/:id/"
            render={(props) => <MovieDetails {...props} data-testid="movie-details" />}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </div>

  );
}

export default App;
