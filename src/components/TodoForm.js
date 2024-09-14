// import React, {useState} from 'react' 

// export const TodoForm = ({addTodo})=>{
//     const [value,setValue] =useState("")

//     const handleSubmit = e =>{
//         e.preventDefault();
//         addTodo(value)
//         setValue("")
//     }
//     return (
//         <form className="TodoForm" onSubmit={handleSubmit}>
//             <input type="text" value={value} className="todo-input" placeholder='What is the task today?' onChange={(e)=>setValue(e.target.value)} />
//             <button type="submit" className='todo-btn'>Add Task</button>
//         </form>
//     )
// }
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
                value={title}  // Binding title to input
                className="todo-input" 
                placeholder='Enter title'
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                value={description}  // Binding description to input
                className="todo-input" 
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
