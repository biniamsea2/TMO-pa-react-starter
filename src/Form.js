function Form({ handleChange, formInputData, handleSubmit }) {
  return (
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
  );
}
export default Form;
