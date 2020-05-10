import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <div className="menii">
          <Link className="links" to='/'>Home</Link>
          <Link className="links" to='/movies/new'>Novo Filme</Link>
        </div>
        <h1 className="page-title">Movie Cards Library - CRUD</h1>
      </header>
    );
  }
}

export default Header;
