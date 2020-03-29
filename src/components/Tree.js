import React from 'react';
import '../scss/Tree.scss';

const Tree = (props) => {
  
  const {
    parentName,
    parentId,
    childNodes,
    renderAddSvg,
    onAddButtonClick,
    renderCell
  } = props;
  
  return (

    <main className="Tree">
      <h2 className="Tree__heading">{parentName}</h2>

      { // LIST OF CELLS
        childNodes.map(({ id }) => {
          return (
            renderCell(id, parentId)
          );
        })
      }

      {/* ADD CELL BUTTON */}
        <button
          className="button button--add button--main"
          onClick={onAddButtonClick}
        >
          { renderAddSvg() }
        </button>
    </main>
  );
}
export default Tree;