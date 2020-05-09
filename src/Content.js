import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import Home from './Home';
// import MovieDetails from './pages/MovieDetails';

function Content() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movielist/:movieId" component={MovieList}/>
      <Route
        path="/movielist"
        render={(props) => <MovieList {...props} availableMovieList={MovieList}/>}
      />
      <Route path="/editmovie" component={EditMovie} />
      <Route path="/newmovie" component={NewMovie} />
      {/* <Route path="/details" component={MovieDetails} /> */}
    </Switch>
  );
}

export default Content;
