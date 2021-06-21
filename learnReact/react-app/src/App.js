import { useState } from 'react';
import Item from './Item';

function App() {
  const [monState, setMonState] = useState(10);

  const modifyState = () => {
    setMonState('hello ma couille');
  };

  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>

      <Item func={monState} />
    </div>
  );
}

export default App;
