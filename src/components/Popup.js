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
      ],
      singleValue: ''
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

  handleSingleValueInputChange = (value) => {
    this.setState({
      singleValue: value
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
    const { category, value, singleValue } = this.state;
    const { onPopupSubmit, editedCellId } = this.props;

    if (editedCellId) {
      onPopupSubmit({
        id: uuidv4(),
        value: singleValue
      }, editedCellId);

    } else {
      onPopupSubmit({
        id: uuidv4(),
        category,
        value
      });
    }
  }

  render() {
    const { category, value, singleValue } = this.state;
    const { onPopupCancel, renderButton, editedCellId } = this.props;
    const heading = editedCellId ? 'Add Value' : 'Add Cell';

    return (
      <div className="Popup">
        <form
          className="Popup__form"
          onSubmit={this.handlePopupSubmit}
        >
          <h2 className="Popup__heading">{heading}</h2>
  
          {
            !editedCellId ?

            <>
              {/* CATEGORY */}
              <label
                htmlFor="popupCategory" className="Popup__label">
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

              {
                renderButton('add', false, null, this.addNewValueInput)
              }
            </>

            : 

            <>
              {/* NEW VALUE */}
              <label htmlFor="popupSingleValue" className="Popup__label">
                New Value:
              </label>
              <input
                id="popupSingleValue"
                type="text"
                className="Popup__input"
                value={singleValue}
                onChange={(e) => this.handleSingleValueInputChange(e.target.value)}
                required
              />
            </>
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