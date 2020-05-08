import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// import NewMovie from './pages/NewMovie';
import MovieList from './pages/MovieList';
// import MovieDetails from './pages/MovieDetails';
// import EditMovie from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        {/* <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} /> */}
      </Switch>
    </Router>
  );
}

export default App;
