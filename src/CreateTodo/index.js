import React from 'react';

import './CreateTodo.css';

const CreateTodo = ({ setTodos, todos }) => {
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (ev) => {
    setNewTodoValue(ev.target.value);
  };
  const onKeyDown = (ev) => {
    if (ev.charCode !== 13) return;
    if (!newTodoValue) return;
    onSubmit(ev);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!newTodoValue) return;
    createTodo(ev, newTodoValue);
  };
  const createTodo = (ev, text) => {
    let newTodo = {
      text: text,
      completed: false,
    };
    let newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
    setNewTodoValue('');
  };

  return (
    <div className='create'>
      <form onSubmit={onSubmit} onKeyPress={onKeyDown}>
        <input
          type='text'
          value={newTodoValue}
          onChange={onChange}
          className='create-input'
          placeholder='Create a new todo...'
        />
        <button type='submit' className='create-button'></button>
      </form>
    </div>
  );
};

export default CreateTodo;
