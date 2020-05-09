import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import Header from './components/Header';

//render={(props) => <MovieDetails {...props} movie={this.props.movie}/>}
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/movies/:id' component={MovieDetails} />
        <Route path='/movies/:id/edit' component={EditMovie} />
        <Route path='/' component={MovieList} />
      </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
