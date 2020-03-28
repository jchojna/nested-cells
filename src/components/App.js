import React, { Component } from 'react';
import classNames from 'classnames';
import Cell from './Cell.js';
import Popup from './Popup.js';
import { v4 as uuidv4 } from 'uuid';
import '../scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupVisible: false,
      cells: []

    }
  }

  handlePopup = () => {
    this.setState({ isPopupVisible: true });
  }

  render() {
    const { isPopupVisible, cells } = this.state;

    return (
      <div className="App">
        <header className="App__header">
  
          {/* APP LOGO */}
  
          <h1 className="App__heading">Recruitment Task</h1>
        </header>
        <main className="App__container">
          <h2 className="App__title">People</h2>
          {/* LIST OF CELLS */}
          {
          cells.map(cell => {
            return (
              <Cell key={cell}/>
            );
          })
          }
          {/* ADD CELL BUTTON */}
          <button
            className="button button--add button--main"
            onClick={this.handlePopup}
          >
            +
          </button>
          {/* POPUP */}
          { isPopupVisible && <Popup /> }
        </main>
      </div>
    );
  }
}

export default App;