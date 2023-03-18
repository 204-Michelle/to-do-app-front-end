import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography } from "@mui/material";

import ToDo from "./ToDo";
import { getToDos } from "../../store/actions/todoActions";
import "../../styles/ToDo.css";

const ListToDos = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDos);
  console.log(toDos);
  useEffect(() => {
    dispatch(getToDos());
  }, [dispatch]);

  return (
    <>
      <div className="list-to-dos-style">
        <Typography>
          {toDos.length > 0 ? "Your to dos" : "Let's create a to do"}
        </Typography>
        {toDos &&
          toDos.map((toDo) => {
            return <ToDo toDo={toDo} key={toDo._id} />;
          })}
      </div>
    </>
  );
};

export default ListToDos;
