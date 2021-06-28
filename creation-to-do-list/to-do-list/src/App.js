import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">To-Do List journalières</h1>
      <Form />
    </div>
  );
}

export default App;
