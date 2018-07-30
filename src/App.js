import React, { Component } from 'react';
import Animator from './animator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    hide: false,
  };
  render() {
    return (
      <div className="App">
        <Animator show={!this.state.hide} time={2000}>
          {(aboutToUnmount, timeInS) => (
            <header
              className="App-header"
              style={
                aboutToUnmount
                  ? {
                      visibility: 'hidden',
                      opacity: 0,
                      transition: `visibility 0s ${timeInS}s, opacity ${timeInS}s linear`,
                    }
                  : {}
              }
            >
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          )}
        </Animator>

        <button onClick={() => this.setState({ hide: !this.state.hide })}>toggle</button>
      </div>
    );
  }
}

export default App;
