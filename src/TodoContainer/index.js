import React from 'react';

import './TodoContainer.css';

const TodoContainer = ({
  children,
  leftTodos,
  completedTodos,
  todos,
  setTodos,
}) => {
  const deleteCompletedTodos = () => {
    let newTodos = [...todos];
    completedTodos.forEach((completedTodo) => {
      let todoIndex = newTodos.findIndex(
        (todo) => todo.text === completedTodo.text,
      );
      newTodos.splice(todoIndex, 1);
    });
    setTodos(newTodos);
  };

  return (
    <div className='todo-container'>
      {children}
      <footer className='todo-container__footer'>
        <span className='todo-left'>{leftTodos} items left</span>
        <span onClick={deleteCompletedTodos} className='todo-clear'>
          Clear Completed
        </span>
      </footer>
    </div>
  );
};

export default TodoContainer;
