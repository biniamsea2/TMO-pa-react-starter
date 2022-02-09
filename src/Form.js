function Form({ handleChange, formInputData, handleSubmit }) {
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.recipeName}
          name="recipeName"
          placeholder="recipe-name"
        />
      </div>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={formInputData.recipeInstructions}
          name="recipeInstructions"
          placeholder="recipe-instructions"
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}
export default Form;
