import React from 'react';
import '../scss/Cell.scss';

const Cell = ({id, parentId, renderButton, children}) => {    
  return (
    <section className="Cell">
      { children }      
      { renderButton('remove', parentId, id) }
    </section>
  );
}
export default Cell;