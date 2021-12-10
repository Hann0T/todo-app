import React from 'react';

import CreateTodo from '../CreateTodo';
import TodoContainer from '../TodoContainer';
import TodoItem from '../TodoItem';
import Filter from '../Filter';
import ThemeSwitcher from '../ThemeSwitcher';

import './App.css';

const AppUI = ({
  todosToShow,
  todos,
  setTodos,
  onCompleteTodo,
  onDeleteTodo,
  setTodosFilter,
  displayMessage,
}) => {
  return (
    <React.Fragment>
      <header className='main-header'>
        <div className='container'>
          <h1 className='main-header__title'>TODO</h1>
          <ThemeSwitcher />
        </div>
      </header>
      <section className='middle-section'>
        <div className='container'>
          <CreateTodo setTodos={setTodos} todos={todos} />
          <TodoContainer todos={todos} setTodos={setTodos}>
            {todos.length === 0 && (
              <TodoItem
                text={'Crea tu primer TODO'}
                completed={false}
                onCompleteTodo={displayMessage}
                onDeleteTodo={displayMessage}
              />
            )}
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
