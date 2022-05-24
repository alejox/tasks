import axios from 'axios';
import { useState, useEffect } from 'react';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskSelected, setTaskSelected] = useState (null)

  useEffect(() => {
    axios.get('https://todo-app-academlo.herokuapp.com/todos/')
      .then((res) => setTasks(res.data));
  }, [])

  const getTask = () =>{
    axios.get('https://todo-app-academlo.herokuapp.com/todos/')
      .then((res) => setTasks(res.data));
  }


  const addTask = (taskItem) => {
    axios.post('https://todo-app-academlo.herokuapp.com/todos/', taskItem)
      .then(() => getTask())
      .catch((error) => console.log(error.response));
  };



  const deleteTask = id => {
    axios.delete(`https://todo-app-academlo.herokuapp.com/todos/${id}/`)
    .then(() => getTask());
  }

  const selectTask = task => {
    setTaskSelected(task);
  }

  const deselectTask = () => setTaskSelected(null);

  const editTask = taskEdited => {

    axios.put(`https://todo-app-academlo.herokuapp.com/todos/${taskSelected.id}/`, taskEdited)
    .then(() => getTask())
    /* taskEdited.id = taskSelected.id;
    const index = tasks.findIndex(task => task.id === taskEdited.id)
    tasks[index] = taskEdited;
    setTasks([...tasks]) */
  }

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">

      <button onClick={()=> setShowModal(true)}>Abrir Modal</button>
      
      {showModal && <Modal close={() => setShowModal(false)}/>}

      <TasksForm 
      addTask={addTask} 
      taskSelected={taskSelected}
      deselectTask={deselectTask}
      editTask={editTask}
      />

      <TasksList 
      tasks={tasks} 
      deleteTask={deleteTask} 
      selectTask={selectTask}
      />
    </div>
  );
}

export default App;
