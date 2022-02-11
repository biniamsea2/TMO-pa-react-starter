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
        {/* <label htmlFor="recipe-name">
          <input id="recipe-name" type="text" name="recipe-name" />
        </label> */}
        {/* <label htmlFor="recipe-name">First name:</label> */}

        <input
          type="text"
          name="recipe-name"
          label="recipe-name"
          placeholder="recipe name"
        />
        <input
          label="recipe-name"
          type="text"
          name="recipe-instructions"
          placeholder="recipe instructions"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormNew;
