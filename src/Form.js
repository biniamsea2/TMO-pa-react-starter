function Form({ handleChange, formInputData, handleSubmit }) {
  return (
    <form>
      <div>
        <input
          onChange={handleChange}
          name="recipe-name"
          placeholder="recipe-name"
        />
      </div>
      <div>
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
