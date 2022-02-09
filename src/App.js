import "./App.css";
import DisplayForm from "./DisplayForm";
import React, { useState } from "react";

function App() {
  const [open, setItOpen] = useState(false);

  const openForm = () => {
    setItOpen(true);
  };

  return (
    <div className="home">
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>
      {open ? (
        <DisplayForm />
      ) : (
        <div>
          There are no recipes to list <br></br>
          <button onClick={openForm}>add recipe</button>
        </div>
      )}
    </div>
  );
}

export default App;
