import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { dltAllData } from '../store/action/Index';

const CleraAll = () => {
    const newState = useSelector((state) => state.TodoReducer.list);
    const dispatch = useDispatch()
    console.log("Hi janu",newState);
    return (
        <>
            {
                newState.length > 0 ?
                    <button className="bg-blue-800 text-white font-bold border-2 border-blue-800 px-7 py-3 my-2 transition-all rounded-none hover:bg-white hover:text-blue-800" onClick={() => dispatch(dltAllData())}> Delete All </button>
                    :
                    null
            }

        </>
    )
}

export default CleraAll
