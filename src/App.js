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
            exact path="/" render={ (props) => <MovieList { ...props } data-testid="movie-list"/> }
          />
          <Route path="/NewMovie" component={NewMovie} />
          <Route path="/EditMovie" component={EditMovie} />
          <Route path="/MovieDetails" component={MovieDetails} />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </div>

  );
}

export default App;
