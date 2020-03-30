import React from 'react';
import '../scss/Cell.scss';

const Cell = (props) => {
  const {
    id,
    onCellRemove,
    renderRemoveSvg
  } = props;
    
  return (
    <section className="Cell">
      {props.children}
      
      <button
        className="button button--remove"
        onClick={() => onCellRemove(id)}
      >
        {renderRemoveSvg()}
      </button>
    </section>
  );
}
export default Cell;