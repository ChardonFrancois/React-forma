function Item(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.func}>Change state</button>
    </div>
  );
}

export default Item;
