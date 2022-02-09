function Form({ handleChange, formInputData, handleSubmit }) {
  return (
    <form>
      <div>
        <label>recipe-name </label>
        <input
          onChange={handleChange}
          name="recipe-name"
          placeholder="recipe-name"
        />
      </div>
      <div>
      <label>recipe-instructions </label>
        <input
          onChange={handleChange}
          name="recipe-instructions"
          placeholder="recipe-instructions"
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}
export default Form;
