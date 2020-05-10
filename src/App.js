import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import Header from './components/Header';

// render={(props) => <MovieDetails {...props} movie={this.props.movie}/>}
//<Route path='/movies/:id' component={MovieDetails} />

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/movies/:id/edit' render={(props) => <EditMovie {...props} />} />
        <Route path='/movies/:id' render={(props) => <MovieDetails {...props} />} />
        <Route path='/movies/new' component={NewMovie} />
        <Route path='/' component={MovieList} />
      </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
