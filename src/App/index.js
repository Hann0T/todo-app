import React, { useState } from 'react';

import AppUI from './AppUI';

import useLocalStorage from '../Utils/LocalStorage';

const App = () => {
  const displayMessage = () => {
    alert('Crea tu primer TODO');
  };
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

  const TodoFilterState = ['all', 'active', 'completed'];

  const [todos, setTodos] = useLocalStorage('TODOSv1', []);

  const [todosFilter, setTodosFilter] = useState(TodoFilterState[0]);

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
      todosToShow={todosToShow}
      todos={todos}
      setTodos={setTodos}
      onCompleteTodo={onCompleteTodo}
      onDeleteTodo={onDeleteTodo}
      setTodosFilter={setTodosFilter}
      displayMessage={displayMessage}
    />
  );
};

export default App;
