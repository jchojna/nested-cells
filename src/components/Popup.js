import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../scss/Popup.scss';

const Popup = (props) => {
  const {
    onPopupCancel,
    onPopupSubmit,
    renderAddSvg,
    renderRemoveSvg
  } = props;

  const category = React.createRef();
  const value = React.createRef();

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    onPopupSubmit({
      id: uuidv4(),
      category: category.current.value,
      value: value.current.value
    });
  }

  return (
    <div className="Popup">
      <form className="Popup__form" onSubmit={handlePopupSubmit}>
        <h2 className="Popup__heading">Add Property</h2>

        {/* CATEGORY */}
        <label htmlFor="popupCategory" className="Popup__label">
          Category:
        </label>
        <input
          id="popupCategory"
          ref={category}
          type="text"
          className="Popup__input"
          required
        />

        {/* VALUE */}
        <label htmlFor="popupCategory" className="Popup__label">
          Value:
        </label>
        <input
          id="popupCategory"
          ref={value}
          type="text"
          className="Popup__input"
          required
        />

        { // ADD BUTTON
          <button
            className="button button--add"
            type="button"
            /* onClick={this.togglePopup} */
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
export default Popup;