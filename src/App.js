import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';

function App() {
  return (
    <div>
      <div>Movie Card Library Crud</div>
      <Router>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
