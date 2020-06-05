import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <header className="movie-card-header">
          <h1 className="page-title">Movie Card Library Crud</h1>
        </header>
      </Link>
    );
  }
}

export default Header;
