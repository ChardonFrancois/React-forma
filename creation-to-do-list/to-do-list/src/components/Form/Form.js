import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // import uuid, donne un id unique au élement du tableau

import { useState } from 'react';
import Item from '../Item/Item';

export default function Form() {
  // useStates
  const [dataArr, setDataArr] = useState([]); // creation du tableau pour recevoir les element de la to-do-list

  const date = new Date();

  const [stateInput, setStateInput] = useState(
    `Début des tâches journalières à ${date.getHours()} heures et ${date.getMinutes()} minutes.`
  );
  const linkedInput = e => {
    // console.log(e);
    setStateInput(e);
  };

  const addTodo = e => {
    e.preventDefault(); // pour appeller cette methode creer une fonction anomnyme dans l input "onInput" permet de ne pas actualiser la page lors de l insertion dans la todo

    if (stateInput !== '') {
      const newArr = [...dataArr]; // utilisation des spreed pour rajouter les todo au tableau.
      const newTodo = {};

      newTodo.txt = stateInput;
      newTodo.id = uuidv4();

      newArr.push(newTodo);
      setDataArr(newArr);

      setStateInput('');
    } else {
      console.log('fcktht');
    }
  };

  // Fonction
  // foncion pour supprimer un élement avec l'id
  const deleteElement = id => {
    // console.log(id);

    const filteredState = dataArr.filter(item => {
      // fonction pour
      return item.id !== id; // va retourner un tableau avec un id different duquel on vient de cliquer
    });
    setDataArr(filteredState); // renvoie le nouveau tableau
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={e => addTodo(e)} className="mb-3">
        <label htmlFor="" className="form-label mt-3">
          Chose à faire
        </label>
        <input
          type="text"
          className="form-control"
          id="todo"
          value={stateInput}
          onChange={e => {
            linkedInput(e.target.value);
          }}
        />
        <button className="mt-2 btn btn-primary d-block">Send</button>
      </form>

      <h2> Liste des choses à faire </h2>
      <ul className="list-group">
        {dataArr.map(item => {
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
