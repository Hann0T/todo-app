import React, { useState } from 'react';

import CreateTodo from '../CreateTodo';
import TodoContainer from '../TodoContainer';
import TodoItem from '../TodoItem';
import Filter from '../Filter';

import './App.css';

import toggleThemeIcon from '../img/icon-sun.svg';

let todosContent = [
  {
    text: 'Complete online JavaScript course',
    completed: true,
  },
  {
    text: 'Jog around the park 3x',
    completed: false,
  },
  {
    text: '10 minutes meditation',
    completed: false,
  },
];

const TodoFilterState = ['all', 'active', 'completed'];

const App = () => {
  const onCompleteTodo = (text) => {
    let todoIndex = todos.findIndex((todo) => todo.text === text);
    let newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const onDeleteTodo = (text) => {
    let todoIndex = todos.findIndex((todo) => todo.text === text);
    let newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState(todosContent);
  const [todosFilter, setTodosFilter] = useState('all');

  const leftTodos = todos.filter((todo) => !todo.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed);

  let todosToShow = [];

  if (todosFilter === TodoFilterState[2]) {
    todosToShow = todos.filter((todo) => todo.completed);
  } else if (todosFilter === TodoFilterState[1]) {
    todosToShow = todos.filter((todo) => !todo.completed);
  } else {
    todosToShow = [...todos];
  }

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

export default App;
