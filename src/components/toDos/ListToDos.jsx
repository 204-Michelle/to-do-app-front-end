import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import ToDo from './ToDo';
import { getToDos } from '../../store/actions/todoActions';

const useStyles = makeStyles({
    toDosStyle:{
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000"
    }
})

const ListToDos = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const toDos = useSelector((state) => state.toDos);
    console.log(toDos);
    useEffect(() => {
        dispatch(getToDos());
    }, [dispatch]);

    return ( 
        <>
        <div className = {classes.toDosStyle}>
            <Typography>
                { toDos.length > 0? "Your to dos" : "Let's create a to do" 
                }
            </Typography>
            { toDos && toDos.map((toDo) => {
                return(
                    <ToDo
                    toDo = {toDo}
                    key = {toDo._id}
                    />
                )
            })}
        </div>
        </>
     );
}
 
export default ListToDos;