import React from 'react';

import './TodoContainer.css';

const TodoContainer = ({
  children,
  leftTodos,
  completedTodos,
  todos,
  setTodos,
}) => {
  const deleteCompletedTodos = (completedTodos) => {
    let newTodos = [...todos];
    completedTodos.forEach((todo) => newTodos.splice(todo, 1));
    setTodos(newTodos);
  };

  return (
    <div className='todo-container'>
      {children}
      <footer className='todo-container__footer'>
        <span className='todo-left'>{leftTodos} items left</span>
        <span
          onClick={() => {
            deleteCompletedTodos(completedTodos);
          }}
          className='todo-clear'
        >
          Clear Completed
        </span>
      </footer>
    </div>
  );
};

export default TodoContainer;
