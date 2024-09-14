import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [title, setTitle] = useState(task.title);  // Editing title
    const [description, setDescription] = useState(task.description);  // Editing description

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo({ title, description }, task.id);  // Pass both title and description
    }

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} //set title
                className="todo-input" 
                placeholder='Update title' 
            />
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} //set description
                className="todo-input" 
                placeholder='Update description' 
            />
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}
