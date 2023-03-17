import axios from "axios"
import { url } from "../../api"
import { toast } from "react-toastify"

//Sign Up
export const signUp = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/signup`, user)
            .then(token => {
                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_UP",
                    token: token.data
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

//Sign In
export const signIn = (creds) => {
    return (dispatch) => {
        axios
            .post(`${url}/signin`, creds)
            .then(token => {
                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_IN",
                    token: token.data
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
//Sign Out
export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT"
        })
    }
}

//Load User
export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        if(token){
            dispatch({
                type: "USER_LOADED",
                token
            })
        }else return null
    }
}