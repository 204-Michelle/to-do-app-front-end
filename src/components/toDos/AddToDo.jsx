import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@mui/material";
import { Send } from "@mui/icons-material";

import { publicConstants } from "../PublicConstants";
import { addToDo } from "../../store/actions/todoActions";
import "../../styles/Forms.css";

const { theme } = publicConstants;

const AddToDo = () => {
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState({
    name: "",
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = {
      ...toDo,
      date: new Date(),
    };
    dispatch(addToDo(newToDo));
    setToDo({
      name: "",
      isComplete: false,
    });
  };

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className="add-form-style"
        onSubmit={handleSubmit}
      >
        <TextField
          id="enter-todo"
          className="add-to-do-text-field"
          variant="outlined"
          label="Enter to do"
          autoFocus
          fullWidth
          theme={theme}
          color="secondary"
          value={toDo.name}
          onChange={(e) => setToDo({ ...toDo, name: e.target.value })}
        />
        {/*SEND TO DO BUTTON*/}
        <Button theme={theme} variant="contained" type="submit">
          <Send />
        </Button>
      </form>
    </>
  );
};

export default AddToDo;
