import React from 'react';
import '../scss/Popup.scss';

const Popup = () => {

  return (
    <section className="Popup">
      <div className="Popup__container">
        <h2 className="Popup__heading">Create new cell</h2>
        <input type="text" className="Popup__input"/>
      </div>
    </section>
  );
}
export default Popup;