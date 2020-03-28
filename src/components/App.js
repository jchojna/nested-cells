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

  removeCell = (id) => {
    this.setState(prevState => ({
      cells: prevState.cells.filter(cell => cell.id !== id)
    }));
  }

  renderAddSvg = () => {    
    return <svg
      className="button__svg"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="0,15 0,25 15,25 15,40 25,40 25,25 40,25 40,15 25,15 25,0 15,0 15,15" />
    </svg>
  }

  renderRemoveSvg = () => {
    return <svg
      className="button__svg"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="12.5" width="40" height="15" />
    </svg>
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

          { // LIST OF CELLS
            cells.map(cell => {
              const { id, category, value } = cell;
              return (
                <Cell
                  key={id}
                  id={id}
                  category={category}
                  value={value}
                  onCellRemove={this.removeCell}
                  renderRemoveSvg={this.renderRemoveSvg}
                />
              );
            })
          }

          {/* ADD CELL BUTTON */}
            <button
              className="button button--add button--main"
              onClick={this.togglePopup}
            >
              { this.renderAddSvg() }
            </button>

          { // POPUP
            isPopupVisible &&
            <Popup
              onPopupCancel={this.togglePopup}
              onPopupSubmit={this.addCell}
              renderAddSvg={this.renderAddSvg}
              renderRemoveSvg={this.renderRemoveSvg}
            /> 
          }
        </main>
      </div>
    );
  }
}

export default App;