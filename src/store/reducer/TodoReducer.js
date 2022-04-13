const initialState = {
    list: []
}

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA": {
            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        }
        case "DELETE_DATA":
            const newList = state.list.filter((elem) => elem.id !== action.payload)
            return {
                ...state,
                list: newList
            }
        case "DELETE_ALL_DATA": return {
            ...state,
            list: []
        }
        case "EDIT_DATA": {
            const { payload } = action;
            const newList = state.list.find((elem) => {
                return (<>
                   { elem.id === payload}
                </>);
            });
            return{
                ...state,
                list : newList
            }
            console.log(newList);

        }
        default: return state;
    }
}

export default TodoReducer
