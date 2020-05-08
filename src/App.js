import React from 'react';
import {
  BrowserRouter as Router ,
  Route ,
  Link,
  Switch,  
  } from 'react-router-dom';
import MovieList from './pages/MovieList'

function App() {
  return (
      <Router>
     <Switch> 
    <Route path="/" component={MovieList} />
    </Switch>
    </Router>
  );
}

export default App;