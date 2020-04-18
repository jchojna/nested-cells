import React from 'react';
import classNames from 'classnames';
import '../scss/Cell.scss';

const Cell = ({id, parentId, renderButton, children}) => {    

  const cellClass = classNames('Cell', {
    'Cell--main': parentId === 'main',
    'Cell--child': parentId !== 'main'
  });

  return (
    <section className={cellClass}>
      { children }      
      { renderButton('remove', parentId, id) }
    </section>
  );
}
export default Cell;