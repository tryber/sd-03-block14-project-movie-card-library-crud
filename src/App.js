import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
import Header from './components/Header';

// render={(props) => <MovieDetails {...props} movie={this.props.movie}/>}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route path="/" component={MovieList} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
