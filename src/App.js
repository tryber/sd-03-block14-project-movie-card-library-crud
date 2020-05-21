import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import MovieDetails from './pages/MovieDetails';
import AddMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/movies/new" component={AddMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
