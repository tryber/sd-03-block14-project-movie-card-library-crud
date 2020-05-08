import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library Crud</div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props) => <MovieDetail {...props} />} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
