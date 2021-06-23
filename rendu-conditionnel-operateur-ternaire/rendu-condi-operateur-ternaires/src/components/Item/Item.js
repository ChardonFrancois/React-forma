import React from 'react';
import './item.css';
// import imgTest from './imgTest.jpeg';
function Item() {
  // let toggle = true;

  // const styleCSS = { color: toggle ? 'crimson' : 'green' };

  return (
    <div>
      <h1 className="titre-item" /*style={styleCSS}*/>Hello depuis ITEM</h1>
      {/* <img src={imgTest} alt="couple à la plage" /> */}
    </div>
  );
}

export default Item;
