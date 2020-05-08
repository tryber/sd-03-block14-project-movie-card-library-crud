import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import MovieList from './pages/MovieList';

function App() {
  return (
    <>
      <BrowserRouter>
        <MovieList />
      </BrowserRouter>
    </>
  );
}


export default App;
