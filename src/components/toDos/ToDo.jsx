import React, { useState } from "react";

import moment from "moment/moment";

import { useDispatch } from "react-redux";

import { Typography, Button, ButtonGroup, TextField } from "@mui/material";
import { Create, Delete, CheckCircle } from "@mui/icons-material";

import { publicConstants } from "../PublicConstants";
import {
  updateToDo,
  checkToDo,
  deleteToDo,
} from "../../store/actions/todoActions";
import "../../styles/ToDo.css";

const { theme } = publicConstants;

const ToDo = ({ toDo }) => {
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
      uid: toDo.uid,
    };
    console.log(updatedToDo);
    dispatch(updateToDo(updatedToDo, id));
  }
  //ACTIONS
  const inputAction = (e) => {
    setInput(e.target.value);
  };

  const keyPressAction = (e) => {
    if (e.key == "Enter") {
      toDoNameEditor.readOnly = true;
      toDo.name = toDoNameEditor.value;
      updateToDoFromMenu();
    }
  };

  const editButtonAction = () => {
    if (toDoNameEditor == undefined) {
      toDoNameEditor = document.getElementById(toDo._id);
    }
    if (toDoNameEditor.readOnly == true) {
      toDoNameEditor.readOnly = false;
      toDoNameEditor.focus();
    } else {
      toDo.name = toDoNameEditor.value;
      updateToDoFromMenu();
      toDoNameEditor.readOnly = true;
    }
  };

  const handleCheck = (id) => {
    dispatch(checkToDo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <>
      <div className="to-dos-style">
        <div className="div-width">
          <TextField
            id={toDo._id}
            multiline
            fullWidth
            className={toDo.isComplete ? "checked-to-do" : ""}
            variant="standard"
            theme={theme}
            value={input}
            InputProps={{
              readOnly: true,
              disableUnderline: true,
            }}
            onChange={inputAction}
            onKeyDown={keyPressAction}
          />
          <Typography className="gray-style" variant="subtitle1">
            author: {toDo.author}
          </Typography>
          <Typography className="gray-style" variant="subtitle1">
            Added: {moment(toDo.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            {
              <Button onClick={() => handleCheck(toDo._id)}>
                <CheckCircle
                  theme={theme}
                  color={toDo.isComplete ? "success" : "action"}
                />
              </Button>
            }

            {/* EDIT TO DO BUTTON*/}
            <Button onClick={editButtonAction}>
              <Create theme={theme} color="primary" />
            </Button>
            <Button onClick={() => handleDelete(toDo._id)}>
              <Delete theme={theme} color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default ToDo;
