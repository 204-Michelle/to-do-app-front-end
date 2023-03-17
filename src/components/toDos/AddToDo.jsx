import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import {TextField, Button} from "@mui/material"
import {Send} from "@mui/icons-material"
//import { makeStyles } from '@mui/styles'

import {publicConstants} from "../PublicConstants"
import { addToDo } from '../../store/actions/todoActions'

const {theme} = publicConstants;

/*const useStyles = makeStyles({
    formStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
        display: "flex",
        justifyContent: "space-between"
    },
    textField: {
        width: "86.5%"
    }
});*/

const AddToDo = () => {
//    const classes = useStyles();
    const dispatch = useDispatch();
    const [toDo, setToDo] = useState({
        name: "",
        isComplete: false,        
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newToDo = {
            ...toDo,
            date: new Date()
        }
        dispatch(addToDo(newToDo));
        setToDo({
            name: "",
            isComplete: false,
        })
    }

    return ( 
        <>
        <form noValidate autoComplete="off" 
        //className = {classes.formStyle} 
        onSubmit = { handleSubmit }>
            <TextField id="enter-todo"
            //className= {classes.textField}
            variant="outlined"
            label="Enter to do"
            autoFocus
            theme ={theme}
            color="secondary"
            value = {toDo.name}
            onChange = {(e) => setToDo({...toDo, name: e.target.value})}
            />
            {/*SEND TO DO BUTTON*/}
            <Button
            theme={theme} 
            variant="contained" 
            type="submit">
                <Send/>
            </Button>
        </form>
        </>
     );
}
 
export default AddToDo;