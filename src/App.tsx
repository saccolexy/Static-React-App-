// App.tsx
import React from 'react';
import { todoData } from './data';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css'; // Import the CSS file for styling

const App: React.FC = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
