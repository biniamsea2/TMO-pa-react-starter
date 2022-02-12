import React from "react";

const FormNew = ({ setTodo }) => {
  var itemToAdd = "";
  const formHandling = (e) => {
    e.preventDefault();
    itemToAdd = e.target.firstChild.value;
    if (itemToAdd !== "") {
      setTodo((state) => [...state, { todo: itemToAdd }]);
    }
  };
  return (
    <form onSubmit={formHandling}>
      <input
        aria-label="recipe-name"
        type="text"
        name="recipe-name"
        label="recipe-name"
        // placeholder="recipe-name"
      />
      <input
        type="text"
        aria-label="recipe-instructions"
        name="recipe-instructions"
        label="recipe-instructions"
        placeholder="recipe-instructions"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormNew;
