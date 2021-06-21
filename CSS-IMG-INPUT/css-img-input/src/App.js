// import Item from './components/Item/Item';
import { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState(10);

  let changeInput = (e) => {
    // console.log(e);
    setInputData(e);
  };
  console.log(inputData);

  return (
    <div className="App">
      <h1>hello depuis APP</h1>
      {/* <Item /> */}

      <input
        type="text"
        onInput={(e) => changeInput(e.target.value)}
        value={inputData}
      />
    </div>
  );
}

export default App;
