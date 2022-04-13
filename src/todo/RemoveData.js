import React from 'react';
import { useDispatch } from 'react-redux';
import { dltData } from '../store/action/Index';
import { MdDeleteForever } from "react-icons/md";

const RemoveData = (props) => {
    const { id } = props;
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(dltData(id))} className="text-2xl"> <MdDeleteForever /> </button>
        </>
    )
}

export default RemoveData
