import React from 'react';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';


class App extends React.Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
