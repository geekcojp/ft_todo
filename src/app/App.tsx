import React from 'react';
import './App.css';
import AddTodo from '../features/AddTodo';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
