import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  const changeState = () => setToggle(!toggle);

  let toggleContenu;

  if (toggle) {
    toggleContenu = <h1>State : TRUE</h1>;
  } else {
    toggleContenu = <h1>State : FALSE</h1>;
  }

  if (toggle) {
    return (
      <div className="App">
        {toggleContenu}
        <button onClick={changeState}> Change State</button>
      </div>
    );
  } else if (toggle === false) {
    return (
      <div className="App">
        {toggleContenu}
        <button onClick={changeState}> Change State</button>
      </div>
    );
  }
}

export default App;
