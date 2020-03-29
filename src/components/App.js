import React, { Component } from 'react';
import classNames from 'classnames';
import Tree from './Tree.js';
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









  renderCell = (id, parentId) => {
    const { cells } = this.state;

    const isMain = parentId === 'main';
    const isNested = isMain && cells.find(cell => cell.id === id).values.length > 1;


    if (isNested) {
      
      const { category, values } = cells.find(cell => cell.id === id);

      return <Cell
        key={id}
        id={id}
        onCellRemove={this.removeCell}
        renderRemoveSvg={this.renderRemoveSvg}
      >
        <Tree
          parentName={category}
          parentId={id}
          childNodes={values}
          renderAddSvg={this.renderAddSvg}
          onAddButtonClick={() => {console.log('add')}}
          renderCell={this.renderCell}
        />
      </Cell>

    } else {

      if (isMain) {

        const cell = cells.find(cell => cell.id === id);
        const { category } = cell;
        const value = cell.values[0].value;

        return <Cell
          key={id}
          id={id}
          onCellRemove={this.removeCell}
          renderRemoveSvg={this.renderRemoveSvg}
        >
          <h3 className="Cell__heading">
            {`${category} ${value}`}
          </h3>
        </Cell>

      } else {

        const value = cells
        .find(cell => cell.id === parentId)
        .values
        .find(value => value.id === id)
        .value;

        return <Cell
          key={id}
          id={id}
          onCellRemove={this.removeCell}
          renderRemoveSvg={this.renderRemoveSvg}
        >
          <h3 className="Cell__heading">
            {value}
          </h3>
        </Cell>

      }
    }      
  }










  render() {
    const { isPopupVisible, cells } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1>Nested Cells</h1>
        </header>

        <Tree
          parentName="People"
          parentId="main"
          childNodes={cells}
          renderAddSvg={this.renderAddSvg}
          onAddButtonClick={this.togglePopup}
          renderCell={this.renderCell}
        />

        { // POPUP
          isPopupVisible &&
          <Popup
            onPopupCancel={this.togglePopup}
            onPopupSubmit={this.addCell}
            renderAddSvg={this.renderAddSvg}
            renderRemoveSvg={this.renderRemoveSvg}
          /> 
        }
      </div>
    );
  }
}

export default App;