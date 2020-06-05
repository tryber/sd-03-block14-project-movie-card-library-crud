import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-text">Carregando...</div>
        <div className="loader" />
      </div>
    );
  }
}

export default Loading;
