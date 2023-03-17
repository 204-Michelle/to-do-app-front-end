import axios from "axios"
import { url, setHeaders } from "../../api"
import { toast } from "react-toastify";

//Get to do
export const getToDos = () => {
    return (dispatch) => {
        axios
            .get(`${url}/todos`, setHeaders())
            .then(toDos => {
                dispatch({
                    type: "GET_TODOS",
                    toDos
                });
            })
            .catch(error => {
                console.log(error.response);
            });
    }
}


// Create to do
export const addToDo = (newToDo) => {
    return (dispatch, getState) => {
        const author = getState().auth.name;
        const uid = getState().auth._id

        axios
            .post(`${url}/todos`, {...newToDo, author, uid}, setHeaders())
            .then(toDo => {
                dispatch({
                    type: "ADD_TODO",
                    toDo
                });
            })
            .catch(error => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }
}

// Edit to do

export const updateToDo = (updatedToDo, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/todos/${id}`, updatedToDo, setHeaders())
            .then(toDo => {
                dispatch({
                    type: "UPDATE_TODO",
                    toDo
                });
            })
            .catch(error => {
                console.log(error.response);
                toast.error(error.response?.data,{
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }
}

export const checkToDo = (id) => {
    return (dispatch) => {
        axios
            .patch(`${url}/todos/${id}`, {}, setHeaders())
            .then(toDo => {
                dispatch({
                    type: "CHECK_TODO",
                    toDo
                });
            })
            .catch(error => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }
}

export const deleteToDo = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/todos/${id}`, setHeaders())
            .then(() => {
                dispatch({
                    type: "DELETE_TODO",
                    id
                });
            })
            .catch(error => {
                console.log(error.response);
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }
}