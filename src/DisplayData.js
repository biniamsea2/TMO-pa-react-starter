function DisplayData({ inputData }) {
  return (
    <div>
      {inputData.map((data) => {
        return (
            <li>{data["recipe-name"]}</li>
        );
      })}
    </div>
  );
}

export default DisplayData;
