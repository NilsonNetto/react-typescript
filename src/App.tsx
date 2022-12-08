import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Task from './components/Task/Task';

function App() {

  const initialTasks = ["Primeira tarefa", "Segunda Tarefa", "Terceira tarefa"]

  const [tasks, setTasks] = useState(initialTasks);

  function removeTask (task: string){
    const removedList = tasks.filter( value => value !== task);
    setTasks([...removedList])
  }

  return (
    <body>
      <Header text='Todo List'/>
      <div className='List'>
      {tasks.map( (value, index) => <Task key={index} task={value} removeTask={removeTask}/>)}
      </div>      
      <Input tasks={tasks} setTasks={setTasks}/> 
    </body>
  );
}

export default App;
