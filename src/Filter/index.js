import React from 'react';

import './Filter.css';

const Filter = ({ todos, todosToShow, setTodosToShow }) => {
  const All = (ev) => {
    setTodosToShow(todos);

    toggleActive(ev);
  };

  const Active = (ev) => {
    let newTodos = [...todos];
    newTodos = todos.filter((todo) => !todo.completed);
    setTodosToShow(newTodos);

    toggleActive(ev);
  };

  const Completed = (ev) => {
    let newTodos = [...todos];
    newTodos = todos.filter((todo) => todo.completed);
    setTodosToShow(newTodos);

    toggleActive(ev);
  };

  const toggleActive = (ev) => {
    let toToggle = ev.target;
    let items = ev.target.parentElement.children;
    [...items].forEach((item) => item.classList.remove('filter-active'));
    toToggle.classList.add('filter-active');
  };

  return (
    <div className='filter'>
      <span className='filter-active' onClick={All}>
        All
      </span>
      <span onClick={Active}>Active</span>
      <span onClick={Completed}>Completed</span>
    </div>
  );
};

export default Filter;
