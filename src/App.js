import React from 'react';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h2>Movie Card Library Crud!!</h2>
      <main>
        <Switch>
          <Route exact path = '/' component = {MovieList} />
          <Route path='/NewMovie' component = {NewMovie} />
          <Route path='/' component = {NotFound} />
        </Switch>  
      </main>
    </div>

  );
}

export default App;
