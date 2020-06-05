import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import * as index from './pages/index';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={index.MovieList} />
          <Route exact path="/movies/new" component={index.NewMovie} />
          <Route strict path="/movies/:id/edit" component={index.EditMovie} />
          <Route strict path="/movies/:id" component={index.MovieDetails} />
          <Route component={index.NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
