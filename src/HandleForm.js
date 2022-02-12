import "./App.css";
import React, { useState } from "react";
import ListFormat from "./ListFormat";
import InputData from "./InputData";

function HandleForm() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <InputData setTodo={setTodos} />
      <ListFormat todoList={todos} />
    </div>
  );
}

export default HandleForm;
