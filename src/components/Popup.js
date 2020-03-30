import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../scss/Popup.scss';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      value: [
        {
          id: uuidv4(),
          value: ''
        },
      ]  
    }
  }

  handleCategoryInputChange = (value) => {
    this.setState({
      category: value
    });
  }

  handleValueInputChange = (value, id) => {
    this.setState(prevState => {
      prevState.value.find(val => val.id === id).value = value;
      return {
        value: [...prevState.value]
      }
    });
  }

  addNewValueInput = () => {
    this.setState(prevState => ({
      value: [
        ...prevState.value,
        {
          id: uuidv4(),
          value: ''
        }
      ]
    }));
  }

  handlePopupSubmit = (e) => {
    e.preventDefault();
    const { category, value } = this.state;
    const { onPopupSubmit } = this.props;

    onPopupSubmit({
      id: uuidv4(),
      category,
      value
    });
  }

  render() {
    const { category, value } = this.state;
    const {
      onPopupCancel,
      renderAddSvg,
      renderRemoveSvg
    } = this.props;

    return (
      <div className="Popup">
        <form className="Popup__form" onSubmit={this.handlePopupSubmit}>
          <h2 className="Popup__heading">Add Property</h2>
  
          {/* CATEGORY */}
          <label htmlFor="popupCategory" className="Popup__label">
            Category:
          </label>
          <input
            id="popupCategory"
            type="text"
            className="Popup__input"
            value={category}
            onChange={(e) => this.handleCategoryInputChange(e.target.value)}
            required
          />
  
          {/* VALUES */}
          <label htmlFor="popupValue" className="Popup__label">
            Value:
          </label>
          {
            value.map((value, index) => {
              return (
                <input
                  key={value.id}
                  id={index === 0 ? 'popupValue' : value.id}
                  type="text"
                  className="Popup__input"
                  value={value.content}
                  required
                  onChange={(e) =>
                    this.handleValueInputChange(e.target.value, value.id)
                  }
                />
              );
            })
          }








  
          { // ADD BUTTON
            <button
              className="button button--add"
              type="button"
              onClick={this.addNewValueInput}
            >
              { renderAddSvg() }
            </button>
          }
  
          { // REMOVE BUTTON
            /* renderRemoveButton(id) */
          }
  
          {/* BUTTONS */}
          <button
            type="submit"
            className="Popup__button Popup__button--submit"
          >
            Submit
          </button>
          <button
            type="button"
            className="Popup__button Popup__button--cancel"
            onClick={onPopupCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
export default Popup;