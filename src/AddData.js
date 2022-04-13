import React from 'react'
import AddTodo from './todo/AddTodo';
import CleraAll from './todo/CleraAll';
import SetTodoData from './todo/SetTodoData';

const AddData = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full h-screen">
                <h1 className="font-bold text-2xl my-3">Add ToDo List</h1>
                <AddTodo />
                <SetTodoData />
                <CleraAll/>
            </div>
        </>
    )
}

export default AddData
