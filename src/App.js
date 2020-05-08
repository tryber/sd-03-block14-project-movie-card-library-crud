import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    </div>
  );
}


export default App;
