import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src="images/hourglass.gif" alt="Ampulheta" width="50px" />
        <p>Carregando...</p>
      </div>
    );
  }
}

export default Loading;
