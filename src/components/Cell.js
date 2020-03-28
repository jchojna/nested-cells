import React from 'react';
import '../scss/Cell.scss';

const Cell = (props) => {
  const {
    id,
    category,
    value,
    onRemove
  } = props;

  return (
    <section className="Cell">
      <h3 className="Cell__heading">
        {`${category} ${value}`}
      </h3>

      {/* REMOVE CELL BUTTON */}
      <button
        className="button button--remove"
        onClick={() => onRemove(id)}
      >
        <svg
          className="button__svg"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="12.5" width="40" height="15" />
        </svg>
      </button>
    </section>
  );
}
export default Cell;