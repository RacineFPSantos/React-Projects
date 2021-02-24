import React, { useState } from 'react';

const Todo = ({ todo }) => {
  const { title, description, completed } = todo;

  const [check, setCheck] = useState(completed);

  return (
    <div className="todo">
      <div className="todo-for-layout">
        <div className="todo-type" />
        <div className="todo-info">
          <p className="todo-title">{title}</p>
          <p className="todo-description">{description}</p>
        </div>
      </div>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={check}
        onChange={() => setCheck(!check)}
      />
    </div>
  );
};

export default Todo;
