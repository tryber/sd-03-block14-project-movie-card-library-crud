import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library Crud</div>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => <MovieDetail {...props} />} />
    </BrowserRouter>
  );
}

export default App;
