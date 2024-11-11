import AddTodo from './AddTodo';
import { useState } from 'react';
import TodoItem from './TodoItem';
export default function Todo() {
    
    const [todo, setTodo] = useState([]);

    const HandleAddTodo = (text) =>{
        const newTodo = {
        id : new Date().toDateString() + text,
        title : text,
        status : false,
        }

        setTodo([...todo, newTodo]);

    }
    
    const handleTodoToggle = (id) => {
       const todoUpdation= todo.map(el=>(el.id === id ? {...el, status : !el.status} : el)) 
       setTodo(todoUpdation)
    }
    

    const handleTodoDelete = (id) => {
        const todoDelete= todo.filter(todo=> todo.id !== id) 
        setTodo(todoDelete)
     }


    return (
        <div>
            <AddTodo HandleAdd={HandleAddTodo} />
            {
                todo.map((item, index) => {
                    return (
                        <div key={index}>
                        <ul>
                          <TodoItem 
                          id={item.id} 
                          title={item.title} 
                          status={item.status} 
                          handleToggle={handleTodoToggle}
                          handleDelete={handleTodoDelete}
                          />  
                        </ul>
                        </div>
                        
                    )
                })
            }
        </div>
    );
}