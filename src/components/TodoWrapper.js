import React, { useEffect, useState } from 'react'; 
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

import { useLocation } from 'react-router-dom';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { 
                id: uuidv4(), 
                title: todo.title,  // Adding title
                description: todo.description,  // Adding description
                completed: false, 
                isEditing: false 
            },
        ]);
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo//toggle complete
            )
        );
    }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));//delete todos

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo//edit todos
            )
        );
    }

    const editTask = (updatedTask, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, ...updatedTask, isEditing: !todo.isEditing } : todo  // Handling both title and description
            )
        );
    }

    const navigate = useNavigate();
    // eslint-disable-next-line
    const { user, logout } = useAuth();
    const handleLogout = () => {// handling logout function
        logout();
        navigate('/login');
    };

    const location = useLocation();
  const [successMessage, setSuccessMessage] = useState(location.state?.successMessage || null);

  useEffect(() => {
    if (successMessage) {
      // Clear the success message after 3 seconds
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [successMessage]);

    return (
      
        <div className='TodoWrapper'>
          
      {successMessage && <div className='success-message'>{successMessage}</div>}
      {/* Todo list and other content here */}
    
            <h1>Let's get things done!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo, index) => todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
                <Todo
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
            <button onClick={handleLogout} className='todo-btn'>Logout</button>
        </div>
    )
}
