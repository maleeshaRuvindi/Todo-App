import React, {useState} from 'react' 
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
uuidv4();

export const TodoWrapper = ()=>{
    const [todos,setTodos]=useState([])

    const addTodo = (todo) => {
        setTodos([
          ...todos,
          { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todos)
      }

    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }

    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const editTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }

      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
      const navigate = useNavigate(); // Initialize useNavigate for navigation
      // eslint-disable-next-line
      const { user, logout } = useAuth();
      const handleLogout = () => {
        logout(); // Call the logout function from the context
        navigate('/login'); // Redirect to the login page after logout
  };

    return (
        <div className='TodoWrapper'>
            <h1>Let's get things done!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index)=>todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
        <button onClick={handleLogout}>Logout</button> {/* Call handleLogout on click */}  
        </div>
    )
}