function DisplayData({ inputData }) {
  return (
    <div>
      {inputData.map((data, index) => {
        return (
          <li key={index}>
            {data.recipeName} {data.recipeInstructions}
          </li>
        );
      })}
    </div>
  );
}

export default DisplayData;
