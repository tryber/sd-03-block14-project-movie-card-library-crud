import React from 'react';
import * as index from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={index.MovieList} />
          <Route path="/movies/:id" component={index.MovieDetails} />
          <Route path="/movies/new" component={index.NewMovie} />
          <Route path="/movies/:id/edit" component={index.EditMovie} />
          <Route component={index.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
