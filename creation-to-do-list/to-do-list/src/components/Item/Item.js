import React from 'react';

export default function Item(props) {
  return (
    <div>
      <li className="justify-content-between border align-items-center d-flex p-2 m-2">
        <div className="p-3">{props.txt}</div>
        <button
          className="btn btn-danger p-2 h-50"
          onClick={() => props.del(props.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
}
