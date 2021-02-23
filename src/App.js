import React from 'react';

import Todo from './components/Todo';
import Date from './components/Date';

const App = () => (
  <div className="container flex-center">
    <Date />

    <div className="todos-container flex-center">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div>

    <div>
      <button type="button" className="add-btn">ADD</button>
    </div>
  </div>
);

export default App;
