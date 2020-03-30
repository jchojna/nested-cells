import React from 'react';
import classNames from 'classnames';
import '../scss/Tree.scss';

const Tree = (props) => {
  
  const {
    parentName,
    parentId,
    childNodes,
    renderCell,
    renderButton
  } = props;

  const treeClass = classNames('Tree', {
    'Tree--main': parentId === 'main',
    'Tree--cell': parentId !== 'main'
  });
  const headingClass = classNames('Tree__heading', {
    'Tree__heading--main': parentId === 'main',
    'Tree__heading--cell': parentId !== 'main'
  });
  
  return (

    <main className={treeClass}>
      <h2 className={headingClass}>{parentName}</h2>
      {
        childNodes.map(({ id }) => {
          return (
            renderCell(id, parentId)
          );
        })
      }
      { renderButton('add', parentId) }
    </main>
  );
}
export default Tree;