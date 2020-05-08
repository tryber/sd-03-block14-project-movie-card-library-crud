import React from 'react';
// Primeiro Commit
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css'
import { MovieForm } from './components/index';
import MovieList from './components/MovieList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={MovieForm}/>
        <Route path="/movies/:id/edit" componet={MovieForm} />
      </Switch>
    </Router>
  );
}

export default App;
