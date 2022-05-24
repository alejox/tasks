import React from 'react';

const TasksList = ({ tasks, deleteTask, selectTask }) => {
    return (
        <ul className='tasks-list'>
            {
                tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p><b>Description: </b>{task.description}</p>
                        <p><b>Done: </b>{task.isCompleted.toString()}</p>
                    <button onClick={() => deleteTask(task.id)}>
                        Delete :D
                    </button>
                    <button onClick={() => selectTask(task)}>
                        Editar
                    </button>
                    </li>  
                ))
            }
        </ul>
    );
};

export default TasksList;