/* eslint-disable react/prop-types */


import { useState } from 'react';
export default function AddTodo({HandleAdd}){
    const [text, setText] = useState("");
    
    const HandleChange = (e)=>{
        setText(e.target.value);
    }
    const handleClick = () => {
        HandleAdd(text);
        setText("");
    }

    return (
        <div>
            <input type="text" value={text} name="text" id="text" placeholder="Add a new todo" onChange={HandleChange} />
            <button onClick={handleClick} type="submit">submit</button>
        </div>
    )
}