import React from "react";

const ListNew = ({ todoList }) => {
  const displayList = () => {
    return (
      <div>
        {todoList.map((item) => {
          return (
            <div>
              <li>{item.todo}</li>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <ul>{displayList()}</ul>
    </div>
  );
};

export default ListNew;
