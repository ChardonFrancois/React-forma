import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // import uuid, donne un id unique au élement du tableau

import { useState } from 'react';
import Item from '../Item/Item';

export default function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: 'Promener le chien', id: uuidv4() }, //"id" appelle la fonction uuid
    { txt: 'Faire les courses', id: uuidv4() },
    { txt: 'Aller chez le coiffeur', id: uuidv4() },
    { txt: 'Apprendre React', id: uuidv4() },
  ]);

  const deleteElement = (id) => {
    // console.log(id);

    const filteredState = dataArr.filter((item) => {
      // fonction pour
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="" className="form-label mt-3">
          Chose à faire
        </label>
        <input type="text" className="form-control" id="todo" />
        <button className="mt-2 btn btn-primary d-block">Send</button>
      </form>

      <h2> Liste des choses à faire </h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              txt={item.txt}
              key={
                item.id
              } /* va chercher l'id aleatoire dans le tableau useState */
              del={deleteElement}
              id={item.id} //obligatoire pour naviguer dans la page Item.
            />
          );
        })}
      </ul>
    </div>
  );
}
