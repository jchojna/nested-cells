import React from 'react';
import '../scss/Cell.scss';

const Cell = ({id, renderButton, children}) => {    
  return (
    <section className="Cell">
      { children }      
      { renderButton('remove', null, id) }
    </section>
  );
}
export default Cell;