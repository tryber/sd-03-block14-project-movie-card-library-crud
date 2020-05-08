import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (

    <>
      <div>Movie Card Library Crud</div>
      <MovieList />
    </>
  );
}

export default App;
