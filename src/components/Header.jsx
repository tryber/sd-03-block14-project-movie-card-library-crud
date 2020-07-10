import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="movie-card-header">
        <div className="menii">
          <Link className="links" to="/">INÍCIO</Link>
          <Link className="links" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <h1 className="page-title">Movie Cards Library - CRUD</h1>
      </header>
    );
  }
}

export default Header;
