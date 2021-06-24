import React from 'react';
import { useState } from 'react';

function Arr() {
  const [dataArr, setDataArr] = useState([
    { nom: 'Juliette' },
    { nom: 'Pierre' },
    { nom: 'Samuel' },
  ]);

  return (
    <div>
      <h1>Liste</h1>
      {dataArr.map((item, index) => {
        return <p key={index}>Nom:{item.nom}</p>;
      })}
    </div>
  );
}

export default Arr;
