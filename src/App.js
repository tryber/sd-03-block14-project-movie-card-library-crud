import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import M from "materialize-css";
import * as index from './pages/index';
import 'materialize-css/dist/css/materialize.min.css';


class App extends React.Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={index.MovieList} />
          <Route path="/movies/new" component={index.NewMovie} />
          <Route exact path="/movies/:id" component={index.MovieDetails} />
          <Route path="/movies/:id/edit" component={index.EditMovie} />
          <Route component={index.NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
