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
        type="text"
        aria-label="recipe-name"
        name="recipe-name"
        placeholder="recipe-name"
      />
      <input
        type="text"
        aria-label="recipe-instructions"
        name="recipe-instructions"
        placeholder="recipe-instructions"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormNew;
