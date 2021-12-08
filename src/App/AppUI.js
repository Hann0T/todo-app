import React from 'react';

import CreateTodo from '../CreateTodo';
import TodoContainer from '../TodoContainer';
import TodoItem from '../TodoItem';
import Filter from '../Filter';

import toggleThemeIcon from '../img/icon-sun.svg';

import './App.css';

const AppUI = ({
  completedTodos,
  leftTodos,
  todosToShow,
  todos,
  setTodos,
  onCompleteTodo,
  onDeleteTodo,
  setTodosFilter,
}) => {
  return (
    <React.Fragment>
      <header className='main-header'>
        <div className='container'>
          <h1>TODO</h1>
          <img
            src={toggleThemeIcon}
            alt='toggle icon'
            className='toggle-theme__icon'
          />
        </div>
      </header>
      <section className='middle-section'>
        <div className='container'>
          <CreateTodo setTodos={setTodos} todos={todos} />
          <TodoContainer
            completedTodos={completedTodos}
            leftTodos={leftTodos}
            todos={todos}
            setTodos={setTodos}
          >
            {todosToShow.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleteTodo={onCompleteTodo}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
          </TodoContainer>
        </div>
      </section>
      <footer className='main-footer'>
        <div className='container'>
          <Filter todos={todos} setTodosFilter={setTodosFilter} />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AppUI;
