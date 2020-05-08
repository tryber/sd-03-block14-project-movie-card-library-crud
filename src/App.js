import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library Crud</div>
      <div>
        <MovieList />
      </div>
    </BrowserRouter>
  );
}

export default App;
