import React from 'react';

import crossIcon from '../img/icon-cross.svg';

import './TodoItem.css';

const TodoItem = ({ text, completed, onCompleteTodo, onDeleteTodo }) => {
  return (
    <div className={'todo-item' + (completed ? ' completed' : '')}>
      <button
        className='check-button'
        onClick={() => {
          onCompleteTodo(text);
        }}
      ></button>
      <p className='todo-text'>{text}</p>
      <button
        className='delete-button'
        onClick={() => {
          onDeleteTodo(text);
        }}
      >
        <img src={crossIcon} alt='cross' />
      </button>
    </div>
  );
};

export default TodoItem;
