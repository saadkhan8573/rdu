import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addData } from '../store/action/Index';

const AddTodo = () => {
    const [inputChange, setInputChange] = useState("");
    const dispatch = useDispatch();
    const handleClick = () => {
        if (inputChange.length > 3) {
            dispatch(addData(inputChange));
            setInputChange("")
        }else{
            alert("Min 4 charcters allowed")
        }
    }

    return (
        <>
            <div className="flex justify-between items-center w-1/5 h-12 rounded bg-gray-300 px-5 mb-1">
                <input className="w-10/12 h-12 bg-transparent focus:outline-none" type="text" placeholder="Add Item" value={inputChange} onChange={(event) => setInputChange(event.target.value)} />
                <button className="text-3xl font-bold text-black" onClick={handleClick}> + </button>
            </div>
        </>
    )
}

export default AddTodo;