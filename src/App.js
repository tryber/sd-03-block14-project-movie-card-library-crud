import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Index from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index.MovieList}/>
        <Route path="/movies/:id" component={Index.MovieDetails}/>
        <Route path="/movies/new" component={Index.NewMovie}/>
        <Route path="/movies/:id/edit" component={Index.EditMovie}/>
        <Route path="/" component={Index.NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
