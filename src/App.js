import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import * as Index from './pages/index';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Index.MovieList} />
          <Route path="/movies/new" component={Index.NewMovie} />
          <Route path="/movies/:id/edit" component={Index.EditMovie} />
          <Route path="/movies/:id" component={Index.MovieDetails} />
          <Route component={Index.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
