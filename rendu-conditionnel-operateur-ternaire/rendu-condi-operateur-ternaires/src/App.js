import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  const changeState = () => setToggle(!toggle);

  // let toggleContenu;

  // if (toggle) {
  //   toggleContenu = <h1>State : TRUE</h1>;
  // } else {
  //   toggleContenu = <h1>State : FALSE</h1>;
  // }

  return (
    <div className="App">
      {/* fonctionne lorsque la valeur est true */}
      {toggle && <h1>State : TRUE</h1>}
      {/* operateur ternaire  */}
      {toggle ? <h1>State : TRUE</h1> : <h1>State : FALSE</h1>}
      {/* {toggleContenu} */}
      <button onClick={changeState}> Change State</button>
    </div>
  );
}

export default App;
