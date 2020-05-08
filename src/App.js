import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library Crud</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" render={(props) => <MovieDetail {...props} />} />
        <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
        <Route exact path="/" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
