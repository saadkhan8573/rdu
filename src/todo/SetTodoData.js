import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditData from './EditData';
import RemoveData from './RemoveData';

const SetTodoData = () => {
    const myState = useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch()
    console.log(myState);
    return (
        <>
            {
                myState.map((elem) => {
                    return (<>
                        <div className="flex justify-between items-center px-5 bg-blue-600 border-2 border-blue-600 w-1/5 h-10 my-1 rounded text-white hover:bg-white hover:text-blue-600">
                            {elem.data}
                            <div className="flex justify-between items-center">
                                <EditData
                                    id={elem.id}
                                />
                                <RemoveData
                                    id={elem.id}
                                />
                            </div>

                        </div>
                    </>);
                })
            }
        </>
    )
}

export default SetTodoData;
