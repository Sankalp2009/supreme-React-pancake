/* eslint-disable react/prop-types */
export default function TodoItem({title, id, status,handleToggle,handleDelete}) {
     console.log(id);
    return (
        <div>
            <li>{title} - {status ? "completed" : "Not completed"}
            <button onClick={()=>handleToggle(id)}>Toggle</button>
            <button onClick={()=>handleDelete(id)}>Delete</button>
            </li>
        </div>
    )
}