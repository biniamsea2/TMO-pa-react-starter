import React, { useState } from "react";
// import Form from "./Form";

function DisplayForm() {
  const [inputData, setInputData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    recipeName: "",
    recipeInstructions: "",
  });

  const handleChange = (event) => {
    const newnInput = (data) => ({
      ...data,
      [event.target.name]: event.target.value,
    });
    setFormInputData(newnInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setInputData(newData);
      const emptyInput = { recipeName: "", recipeInstructions: "" };
      setFormInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
        <div>
          {inputData.map((data) => {
            return <li>{data["recipe-name"]}</li>;
          })}
        </div>
        <form>
          {/* <label htmlFor="recipe-name">recipe-name </label> */}
          <input
            name="recipe-name" 
            // value={formInputData["/recipe-name/i"]}
            type="textbox"
            onChange={handleChange}
            placeholder="recipe-name"
          />

          {/* <label htmlFor="recipe-instructions">recipe-instructions </label> */}
          <input
            type="textbox"
            onChange={handleChange}
            // value={formInputData["r/ecipe-instructions/i"]}
            name="recipe-instructions"
            placeholder="recipe-instructions"
          />
          <div>
            <button type="submit" onClick={handleSubmit}>
              Add
            </button>
          </div>
        </form>
    </React.Fragment>
  );
}
export default DisplayForm;
