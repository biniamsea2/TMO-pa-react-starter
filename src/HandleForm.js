import "./App.css";
import React, { useState } from "react";
import ListFormat from "./ListFormat";
import InputData from "./InputData";

function AppNew() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <ListFormat todoList={todos} />
      <InputData setTodo={setTodos} />
    </div>
  );
}

export default AppNew;
