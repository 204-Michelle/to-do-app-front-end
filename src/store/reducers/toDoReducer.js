import { toast } from "react-toastify";

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TODOS":
            return action.toDos.data;
        case "ADD_TODO":
            toast.success("A to do was added", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return [action.toDo.data, ...state];
        case "UPDATE_TODO":
            toast.success("A to do was updated", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return state.map((toDo) =>
                toDo._id == action.toDo.data._id ? action.toDo.data : toDo
            );
        case "CHECK_TODO":
            toast.success("A to do status was changed", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return state.map((toDo) =>
                toDo._id == action.toDo.data._id ? action.toDo.data : toDo
            );
        case "DELETE_TODO":
            toast.success("A to do was deleted", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            return state.filter((toDo) =>
                toDo._id !== action.id
            );
        default:
            return state;
    }
};

export default toDoReducer