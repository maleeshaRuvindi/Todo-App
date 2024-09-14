import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("");  // Added state for title
    const [description, setDescription] = useState("");  // Added state for description

    const handleSubmit = e => {
        e.preventDefault();
        addTodo({ title, description });  // Passing title and description as an object
        setTitle("");  // Resetting the title
        setDescription("");  // Resetting the description
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title}   //input title
                className="todo-input" 
                placeholder='Enter title'
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea
                type="text" 
                value={description}  // input description
                className="todo-input" 
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit" className='todo-btn'>Add Task</button> 
        </form>
    )
}
