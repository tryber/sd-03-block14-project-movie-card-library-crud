import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/MovieList">Lista</Link>
        <Link to="/MovieDetails">Detalhes</Link>
        <Link to="/NewMovie">Novo</Link>
        <Link to="/EditMovie">Editar</Link>
      </nav>
    </header>
  );
}

export default Header;
