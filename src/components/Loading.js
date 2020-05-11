import React, { Component } from 'react';
import './loading.css'

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="loader">
          <span></span>
        </div>
        <span className="center">Carregando...</span>
      </div>
    );
  }
}

export default Loading;
