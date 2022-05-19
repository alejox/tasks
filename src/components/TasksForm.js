import React, { useState } from 'react';

const TasksForm = ({ addTask }) => {

    const [name, setName] = useState ('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState(false);

    const submit = e =>{
        e.preventDefault();
        const task = {
            id:Date.now(),
            name,
            category,
            description,
            done
        }
        addTask(task);
    }

    return (
        <div>
            <form onSubmit={submit}>

            <div className="input_container">
                <label htmlFor="task">Task: </label>
                <input 
                type="text" 
                id="task"
                onChange={e => setName(e.target.value)}
                value={name}
                />
            </div>

            <div className="input_container">
                <label htmlFor="category">Category: </label>
                <input 
                type="text" 
                id="category"
                onChange={e => setCategory(e.target.value)}
                value={category}
                />
            </div>

            <div className="input_container">
                <label htmlFor="description">Description: </label>
                <textarea 
                type="text" 
                id="description"
                onChange={e => setDescription(e.target.value)}
                value={description}/>
            </div>

            <div className="input_container">
                <label htmlFor="done">Done: </label>
                <input 
                type="checkbox" 
                id="done"
                onChange={e=> setDone(e.target.checked)}
                checked={done}
                />
            </div>

            <button>Submit</button>



            </form> 
        </div>
    );
};

export default TasksForm;

