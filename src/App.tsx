import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Task from './components/Task/Task';

function App() {
  return (
    <body>
      <Header text='Todo List'/>
      <Task />
      <Input />
    </body>
  );
}

export default App;
