import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';

function App() {
  return (


    <Router>
      <Switch>
        <Route path="/" exact=''>
          <MovieList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
