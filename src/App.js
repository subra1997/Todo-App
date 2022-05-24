import React from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>
        <TodoList/>
      </h1>
    </div>
  );
}

export default App;
