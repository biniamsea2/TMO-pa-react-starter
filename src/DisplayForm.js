import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

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
        <div>
          <div>
            <DisplayData inputData={inputData} />
            <Form
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
            />
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default DisplayForm;
