import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
// import MovieList from './pages/MovieList';
// import MovieDetails from './pages/MovieDetails';
// import EditMovie from './pages/EditMovie';
// import NotFound from './pages/NotFound';
// import NewMovie from './pages/NewMovie';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <Link to="/" className="brand-logo center">MOVIE LIBRARY</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
