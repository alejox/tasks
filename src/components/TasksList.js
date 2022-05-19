import React from 'react';

const TasksList = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {
                tasks.map(task => (
                    <li key={task.id}>
                        <h3>{task.name}</h3>
                        <p><b>Category: </b>{task.category}</p>
                        <p><b>Description: </b>{task.description}</p>
                        <p><b>Done: </b>{task.done.toString()}</p>
                    <button onClick={() => deleteTask(task.name)}>
                        Delete :D
                    </button>
                    </li>
                ))
            }
        </ul>
    );
};

export default TasksList;