import React, { useState } from 'react';

import AppUI from './AppUI';

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
    <AppUI
      completedTodos={completedTodos}
      leftTodos={leftTodos}
      todosToShow={todosToShow}
      todos={todos}
      setTodos={setTodos}
      onCompleteTodo={onCompleteTodo}
      onDeleteTodo={onDeleteTodo}
      setTodosFilter={setTodosFilter}
    />
  );
};

export default App;
