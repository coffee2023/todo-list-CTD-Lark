import './App.css';
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
 
  return (
    <div>
      <h1>My Todos List</h1>
      <TodoForm />
      <TodoList />
      
    </div>
  );
}

export default App;
