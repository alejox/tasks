import { useState } from 'react';
import './App.css';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

function App() {

  const initialTasks = [
    {
      id: 1,
      name: "Llamar a Juan",
      category: "Operativas",
      description: "Especificar ordenes del dia",
      done: false
    },
    {
      id: 2,
      name: "Pedir repuestos",
      category: "Operativas",
      description: "solicitar repuesto impresora",
      done: true
    }
  ]

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (taskItem) =>{
    console.log("Se añadio una tarea");
    console.log(taskItem);
    setTasks([...tasks, taskItem]);
  }

  const deleteTask = name => {
    console.log(name);
  }

  return (
    <div className="App">
      <TasksForm addTask={addTask}/>
      <TasksList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
