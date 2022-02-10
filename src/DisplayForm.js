import React, { useState } from "react";
// import Form from "./Form";
// import DisplayData from "./DisplayData";

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
    // <React.Fragment>
    //   <div>
    //     <div>
    //       <div>
    //         <DisplayData inputData={inputData} />
    //         <Form
    //           handleChange={handleChange}
    //           formInputData={formInputData}
    //           handleSubmit={handleSubmit}
    //         />
    //       </div>
    //       <div></div>
    //     </div>
    //   </div>
    // </React.Fragment>

    <div>
      <div>
        <div>
          {/* <DisplayData inputData={inputData} />
           */}
          <div>
            {inputData.map((data) => {
              return <li>{data["recipe-name"]}</li>;
            })}
          </div>
          <form>
            <label for="recipe-name">recipe-name </label>
            <input
              name="recipe-name"
              // value={formInputData["/recipe-name/i"]}
              type="text"
              onChange={handleChange}
              placeholder="recipe-name"
            />

            <label for="recipe-instructions">recipe-instructions </label>
            <input
              type="text"
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
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default DisplayForm;
