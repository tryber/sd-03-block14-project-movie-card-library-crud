import React from 'react';
import MovieList from './pages/MovieList';
import Header from './components/Header';
import { Switch, Router, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MovieList />
      </BrowserRouter>
    </div>
  );
}

export default App;
