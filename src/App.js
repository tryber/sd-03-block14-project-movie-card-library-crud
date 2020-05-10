import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import * as pages from "./pages/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={pages.MovieList} />
          <Route path="/movies/new" component={pages.NewMovie} />
          <Route path="/movies/:id/edit" component={pages.EditMovie} />
          <Route path="/movies/:id" component={pages.MovieDetails} />
          <Route component={pages.NotFound} />
        </Switch>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </Router>
    </div>
  );
}

export default App;
