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

  togglePopup = () => {
    this.setState(prevState => ({
      isPopupVisible: !prevState.isPopupVisible
    }));
  }

  addCell = (newCell) => {

    this.setState(prevState => ({
      cells: [
        ...prevState.cells,
        newCell
      ]
    }));


    this.togglePopup();
  }

  render() {
    const { isPopupVisible, cells } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1>Nested Cells</h1>
        </header>
        <main className="App__container">
          <h2 className="App__title">People</h2>
          {/* LIST OF CELLS */}
          {
            cells.map(cell => {
              return (
                <Cell key={cell.id}/>
              );
            })
          }
          {/* ADD CELL BUTTON */}
          <button
            className="button button--add button--main"
            onClick={this.togglePopup}
          >
            +
          </button>
          {/* POPUP */}
          {
            isPopupVisible &&
            <Popup
              onPopupCancel={this.togglePopup}
              onPopupSubmit={this.addCell}
            /> 
          }
        </main>
      </div>
    );
  }
}

export default App;