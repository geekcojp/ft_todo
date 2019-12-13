import React from 'react';
import './App.css';
import AddTodo from '../features/AddTodo';
import ShowTodo from '../features/ShowTodo';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddTodo></AddTodo>
      <ShowTodo></ShowTodo>
    </div>
  );
}

export default App;
