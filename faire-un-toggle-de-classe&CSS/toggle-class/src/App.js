import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      {toggle ? <h1> it's true</h1> : <h1> it's false</h1>}
      <button onClick={changeToggle}>Change state</button>
      <div className={toggle ? 'box animated' : 'box'}></div>
    </div>
  );
}

export default App;
