import { Switch, Route } from 'react-router-dom';
import React from 'react';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';

function App() {
  return (
    <div>
      <h2>Movie Card Library Crud!!</h2>
      <main>
        <Switch>
          <Route
            exact path="/" render={(props) => <MovieList {...props} data-testid="movie-list" />}
          />
          <Route
            path="/newmovie" render={(props) => <NewMovie {...props} data-testid="new-movie" />}
          />
          <Route
            path="/editmovie" render={(props) => <EditMovie {...props} data-testid="edit-movie" />}
          />
          <Route
            path="/moviedetails" 
            render={(props) => <MovieDetails {...props} data-testid="movie-details" />}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </div>

  );
}

export default App;
