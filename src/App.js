import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/index';
import MovieDetails from './pages/MovieDetails';
// import AddMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        {/* <Route path="/movies/new" component={AddMovie} /> */}
        <Route path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </Router>
  );
}

export default App;
