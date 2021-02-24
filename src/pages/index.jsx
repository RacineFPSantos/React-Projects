import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Date from '../components/Date';
import Todo from '../components/Todo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const getData = () => {
    fetch('http://localhost:3004/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => res.json()).then((data) => {
        setTodos(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container flex-center">
        <Date />

        <div className="todos-container flex-center">
          {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </div>

        <div>
          <button type="button" className="add-btn">ADD</button>
        </div>
      </div>
    </>
  );
};

export default App;
