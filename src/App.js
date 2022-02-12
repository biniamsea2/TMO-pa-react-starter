import "./App.css";
// import React, { useState } from "react";
import HandleForm from "./HandleForm";

function App() {
  // const [open, setItOpen] = useState(false);

  // const openForm = () => {
  //   setItOpen(true);
  // };

  return (
    <div>
      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      <h1>My Recipes</h1>
      {/* {open ? (
        <HandleForm />
      ) : (
        <div>
          <button onClick={openForm}>Add recipe</button>
          <p>There are no recipes to list</p>
        </div>
      )} */}
        <HandleForm />


    </div>
  );
}

export default App;
// import "./App.css";
// import DisplayForm from "./DisplayForm";
// import React, { useState } from "react";

// function App() {
//   const [open, setItOpen] = useState(false);

//   const openForm = () => {
//     setItOpen(true);
//   };

//   return (
//     <div>
//       <h1 className="doNotRemoveMe">Hello world.</h1>
//       {/* ^ Do not remove this element ^ */}
//       <h1>My Recipes</h1>
//       {open ? (
//         <DisplayForm />
//       ) : (
//         <div>
//           There are no recipes to list <br></br>
//           <button onClick={openForm}>Add recipe</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
