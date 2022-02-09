function DisplayData({ inputData }) {
  return (
    <div>
      {inputData.map((data, index) => {
        return (
          <ul key={index}>
            <li>{data["recipe-name"]}</li>
            {/* {data["recipe-instructions"]} */}
          </ul>
        );
      })}
    </div>
  );
}

export default DisplayData;
