import React, { useEffect, useState } from 'react';

const TasksForm = ({ addTask, taskSelected, deselectTask, editTask }) => {

    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState('');
    const [isCompleted, setisCompleted] = useState(false);

    console.log(taskSelected);

    useEffect(() => {
        if(taskSelected !== null){
            setTitle(taskSelected.title);
            setDescription(taskSelected.description);
            setisCompleted(taskSelected.isCompleted)
        }else{
            reset();
        }
    },[taskSelected])

    const submit = e =>{
        e.preventDefault();
        const task = {
            title,
            description,
            isCompleted
        }
        if(taskSelected === null){
            addTask(task);
        }else{
            editTask(task);
            deselectTask();
        }
    };

    const reset = () => {
        setTitle("");
        setDescription("");
        setisCompleted(false);
      };

    return (
        <div>
            <form onSubmit={submit} className="tasks-form">
            <div className="input-container">
                <label htmlFor="task">Task: </label>
                <input 
                type="text" 
                id="task"
                onChange={e => setTitle(e.target.value)}
                value={title}
                />
            </div>

            

            <div className="input-container">
                <label htmlFor="description">Description: </label>
                <textarea 
                type="text" 
                id="description"
                onChange={e => setDescription(e.target.value)}
                value={description}/>
            </div>

            <div className="input-container">
                <label htmlFor="done">Done: </label>
                <input 
                type="checkbox" 
                id="done"
                onChange={e=> setisCompleted(e.target.checked)}
                checked={isCompleted}
                />
            </div>

            <button>Submit</button>
            {
                taskSelected !== null && (
                    <button type='button' onClick={deselectTask}>Cancel</button>
                ) 
            }

            



            </form> 
        </div>
    );
};

export default TasksForm;

