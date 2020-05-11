import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as index from './pages/index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={index.MovieList} />
          <Route exact path="/movies/:id/edit" component={index.EditMovie} />
          <Route path="/movies/:id" component={index.MovieDetails} />
          <Route path="/movies/new" component={index.NewMovie} />
          <Route component={index.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
