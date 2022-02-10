import "./App.css";
import React, { useState } from "react";
import ListNew from "./ListNew";
import FormNew from "./FormNew";

function AppNew() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      {/* <h1 className="doNotRemoveMe">Hello world.</h1> */}
      {/* ^ Do not remove this element ^ */}
      <FormNew setTodo={setTodos} />
      <ListNew todoList={todos} />
    </div>
  );
}

export default AppNew;
