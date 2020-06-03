import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as index from './pages/index';

function App() {
  return (
    <div>
      <h1>Movie Card Library Crud</h1>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/movies/:id" component={index.MovieDetails} /> */}
          {/* <Route path="/movies/:id/edit" component={index.EditMovie} /> */}
          {/* <Route path="/movies/new" component={index.NewMovie} /> */}
          {/* <Route exact path="/" component={index.MovieList} /> */}
          {/* <Route component={index.NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
