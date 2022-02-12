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
    <div>
      <form onSubmit={formHandling}>
        <textarea
          type="text"
          name="recipe-name"
          label="recipe-name"
          placeholder="recipe-name"
        />
        <textarea
          type="text"
          name="recipe-instructions"
          label="recipe-instructions"
          placeholder="recipe-instructions"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormNew;
