import React from 'react';
import { useDispatch } from 'react-redux';
import { editData } from '../store/action/Index';
import { BiEdit } from "react-icons/bi";

const EditData = (props) => {
    const { id } = props;
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(editData(id))} className="text-2xl"> <BiEdit/> </button>
        </>
    )
}

export default EditData
