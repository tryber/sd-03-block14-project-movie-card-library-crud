import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import './App.css';
import { NotFound, NewMovie, EditMovie, MovieDetails, MovieList} from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route exacy path='/movies/new'component={NewMovie} />
          <Route exact path='/movies/:id' component={MovieDetails} />
          <Route exact path='/movies/:id/edit' component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
