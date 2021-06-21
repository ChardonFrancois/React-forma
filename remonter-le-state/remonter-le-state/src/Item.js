import { useState } from 'react';
import React from 'react';

function Item(props) {
  const [itemState, setItemState] = useState('MY ITEM STATE');

  return (
    <div>
      <button onClick={() => props.func(itemState)}>Change state</button>
    </div>
  );
}

export default Item;
