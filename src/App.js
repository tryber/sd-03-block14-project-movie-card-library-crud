import React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>

        <Route exact path='/' component={MovieList} />
        <Route path='/movies/:id' component={MovieDetails} />
        <Route path='/movies/:id/edit' component={EditMovie} />
      </BrowserRouter>
    </>
  );
}

export default App;
