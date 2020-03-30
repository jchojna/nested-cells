import React, { Component } from 'react';
import classNames from 'classnames';
import Tree from './Tree.js';
import Cell from './Cell.js';
import Button from './Button.js';
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

  renderButton = (type, isMain, id, callback) => {

    const buttonClass = classNames('button', `button--${type}`, {
      'button--main': isMain
    });

    const onButtonClick = callback
    ? callback : isMain
      ? this.togglePopup
      : type === 'add'
        ? this.addCell
        : () => this.removeCell(id)
    

    return <Button
      buttonClass={buttonClass}
      onButtonClick={onButtonClick}
    >
      <svg
        className="button__svg"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        {
          type === 'add'
          ? <polyline points="0,15 0,25 15,25 15,40 25,40 25,25 40,25 40,15 25,15 25,0 15,0 15,15" />
          : <rect x="0" y="12.5" width="40" height="15" />
        }
      </svg>

    </Button>
  }

  renderCell = (id, parentId) => {

    const { cells } = this.state;
    const isMain = parentId === 'main';
    const isNested = isMain && cells.find(cell => cell.id === id).value.length > 1;
    const cell = cells
    .find(cell => !isNested && !isMain ? cell.id === parentId : cell.id === id);
    const { category } = cell;
    const { value } = isNested
    ? cell
    : isMain ? cell.value[0] : cell.value.find(value => value.id === id);
    
    return <Cell
      key={id}
      id={id}
      renderButton={this.renderButton}
    >
      {
        isNested ?

        <Tree
          parentName={category}
          parentId={id}
          childNodes={value}
          renderAddSvg={this.renderAddSvg}
          onAddButtonClick={() => {console.log('add')}}
          renderCell={this.renderCell}
          renderButton={this.renderButton}
        />

        : isMain ?     

          <h3 className="Cell__heading">
            {`${category} ${value}`}
          </h3>

          :

          <h3 className="Cell__heading">
            {value}
          </h3>
      }    
    </Cell>
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
          renderCell={this.renderCell}
          renderButton={this.renderButton}
        />

        { // POPUP
          isPopupVisible &&
          <Popup
            onPopupCancel={this.togglePopup}
            onPopupSubmit={this.addCell}
            renderButton={this.renderButton}
          /> 
        }
      </div>
    );
  }
}

export default App;