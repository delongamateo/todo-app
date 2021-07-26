import React, {useState} from 'react'
import "./Input.scss";
import  {useDispatch}  from 'react-redux';
import {saveTodo} from '../features/todoSlice';

function Input() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodo = () => {

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
    }
    console.log(input)

    return (
        <div className="input">
            <input type="text" onChange={e=>setInput(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input
