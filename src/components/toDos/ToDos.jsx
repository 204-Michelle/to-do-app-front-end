import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ListToDos from "./ListToDos";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ToDos = () => {
  const auth = useSelector((state) => state.auth);
  const [toDo, setToDo] = useState({
    name: "",
    isComplete: false,
  });

  if (!auth._id) return <Navigate to="/signin" />;
  return (
    <>
      <AddToDo toDo={toDo} setToDo={setToDo} />
      <ListToDos setToDo={setToDo} />
    </>
  );
};

export default ToDos;
