export const addData = (inputChange) => {
    return {
        type: "ADD_DATA",
        payload: {
            id: new Date().getTime().toString(),
            data: inputChange
        }
    }
}

export const dltData = (id) => {
    return {
        type: "DELETE_DATA",
        payload: id
    }
}

export const dltAllData = () => {
    return { 
        type : "DELETE_ALL_DATA"
    }
}

export const editData = (id) => {
    return{
        type : "EDIT_DATA",
        payload : id
    }
}