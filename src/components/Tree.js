import React from 'react';
import '../scss/Tree.scss';

const Tree = (props) => {
  
  const {
    parentName,
    parentId,
    childNodes,
    renderCell,
    renderButton
  } = props;
  
  return (

    <main className="Tree">
      <h2 className="Tree__heading">{parentName}</h2>
      {
        childNodes.map(({ id }) => {
          return (
            renderCell(id, parentId)
          );
        })
      }
      { renderButton('add', true) }
    </main>
  );
}
export default Tree;