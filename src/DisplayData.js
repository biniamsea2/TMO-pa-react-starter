function DisplayData({ inputData }) {
  return (
    <div>
      {inputData.map((data, index) => {
        return (
          <li key={index}>
            {data["recipe-name"]} {data["recipe-instructions"]}
          </li>
        );
      })}
    </div>
  );
}

export default DisplayData;
