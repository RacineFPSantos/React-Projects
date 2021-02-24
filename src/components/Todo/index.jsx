import React from 'react';

const index = ({ todo }) => {
  const { title, description } = todo;

  const isChecked = () => {
    console.log(`${title} is completed`);
  };

  return (
    <div className="todo">
      <div className="space-between">
        <div className="todo-type" />
        <div className="todo-info">
          <p className="todo-title">{title}</p>
          <p className="todo-description">{description}</p>
        </div>
      </div>
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={() => isChecked()}
      />
    </div>
  );
};

export default index;
