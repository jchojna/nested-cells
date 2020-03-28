import React from 'react';
import '../scss/Cell.scss';

const Cell = (props) => {
  const {
    id,
    category,
    values,
    onCellRemove,
    renderRemoveSvg
  } = props;

  return (
    <section className="Cell">
      <h3 className="Cell__heading">
        {`${category} ${values}`}
      </h3>

      { // REMOVE BUTTON
        <button
          className="button button--remove"
          onClick={() => onCellRemove(id)}
        >
          {renderRemoveSvg()}
        </button>
      }
    </section>
  );
}
export default Cell;