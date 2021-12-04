import React from 'react';

import crossIcon from '../img/icon-cross.svg';

import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <div className={'todo-item' + (props.completed ? ' completed' : '')}>
      <button
        className='check-button'
        onClick={() => {
          props.onCompleteTodo(props.text);
        }}
      ></button>
      <p className='todo-text'>{props.text}</p>
      <button
        className='delete-button'
        onClick={() => {
          props.onDeleteTodo(props.text);
        }}
      >
        <img src={crossIcon} alt='cross' />
      </button>
    </div>
  );
};

export default TodoItem;
