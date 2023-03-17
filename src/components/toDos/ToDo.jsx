import React, {useState} from 'react'

import moment from 'moment/moment';

import { useDispatch } from 'react-redux'

import { Typography, Button, ButtonGroup, TextField, FilledInput } from '@mui/material';
import { Create, Delete, CheckCircle, Height} from "@mui/icons-material"
//import { makeStyles } from '@mui/styles';

import {publicConstants} from "../PublicConstants"
import { updateToDo, checkToDo, deleteToDo } from '../../store/actions/todoActions';

const {theme} = publicConstants;

/*const useStyles = makeStyles({
    todoStyle:{
        margin: "20px auto",
        padding: "20px",
        border: "2px solid #bdbdbd",
        borderRadius: "9px",
        display: "flex",
        justifyContent: "space-between"
    },
    grayStyle:{
        color: "#8f8f8f"
    },
    checkedToDo: {
        textDecoration: "line-through",
    },
    divWidth: {
        width: "60%",
    }
})*/

const ToDo = ({ toDo }) => {
    //const classes = useStyles();

    const dispatch = useDispatch();

    const [input, setInput] = useState(toDo.name);
    
    let toDoNameEditor = document.getElementById(toDo._id);

    function updateToDoFromMenu() {
        const id = toDo._id;
        const updatedToDo = {
            name: toDo.name,
            isComplete: toDo.isComplete,
            date: toDo.date,
            author: toDo.author,
            uid: toDo.uid
        };
        console.log(updatedToDo);
        dispatch(updateToDo(updatedToDo, id));
    }
    //ACTIONS
    const inputAction = e => {
        setInput(e.target.value);
      };

    const keyPressAction = (e) => {
        if(e.key == "Enter"){
            toDoNameEditor.readOnly = true;
            toDo.name = toDoNameEditor.value;
            updateToDoFromMenu();
        }
    };
    
    const editButtonAction = () => {
        if(toDoNameEditor == undefined){
            toDoNameEditor = document.getElementById(toDo._id);
        }
        if(toDoNameEditor.readOnly == true){
            toDoNameEditor.readOnly = false;
            toDoNameEditor.focus();
        }else{
            toDo.name = toDoNameEditor.value;
            updateToDoFromMenu();
            toDoNameEditor.readOnly = true;
        }
    };

    const handleCheck = (id) => {
        dispatch(checkToDo(id));
    }
    const handleDelete = (id) => {
        dispatch(deleteToDo(id));
    }

    return ( 
        <>
        <div //className = {classes.todoStyle}
        >
            <div //className= {classes.divWidth}
            >
                <TextField
                id= {toDo._id}
                multiline
                fullWidth
                //className={ toDo.isComplete ? classes.checkedToDo : ""}     
                variant="standard"
                theme ={theme}
                value = {input}  
                InputProps={{
                    readOnly: true,
                    disableUnderline: true                
                  }}
                  onChange={inputAction}
                  onKeyDown = {keyPressAction}
                />
                <Typography 
                //className = {classes.grayStyle} 
                variant = "subtitle1">
                    author: Mushun
                </Typography>
                <Typography 
                //className = {classes.grayStyle} 
                variant = "subtitle1">
                    Added: {moment(toDo.date).fromNow()}
                </Typography>
            </div>
            <div>
                <ButtonGroup size="small" aria-label= "outlined primary button group">
                    { <Button onClick={() => handleCheck(toDo._id)}>
                        <CheckCircle theme = {theme} color= { toDo.isComplete ? "success" : "action"}/>
                    </Button>}

                    {/* EDIT TO DO BUTTON*/}
                    <Button onClick={editButtonAction}>
                        <Create theme={theme} color="primary"/>
                    </Button>
                    <Button onClick={() => handleDelete(toDo._id)}>
                        <Delete theme={theme} color="secondary"/>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
        </>
     );
}
 
export default ToDo;