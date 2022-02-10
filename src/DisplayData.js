function DisplayData({ inputData }) {
  return (
    <div>
      {inputData.map((data, index) => {
        return (
          <li key={index}>
            {data["/recipe-name/i"]} {data["/recipe-instructions/i"]}
          </li>
        );
      })}
    </div>
  );
}

export default DisplayData;
