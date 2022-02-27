import React, { useState } from "react";

// var isDone = false;

function App() {
   var [isdone, setStatus] = useState(true);

   function Strike() {
      setStatus((isdone = true));
      console.log(isdone);
   }

   function Unstrike() {
      setStatus((isdone = false));
      console.log(isdone);
   }

   return (
      <div>
         <h1
            style={
               isdone
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
            }
         >
            Buy Mike
         </h1>
         <button onClick={Strike}>Completed</button>
         <button onClick={Unstrike}>Restart </button>
      </div>
   );
}

export default App;
