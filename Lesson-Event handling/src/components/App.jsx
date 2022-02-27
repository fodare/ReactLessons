import React, { useState } from "react";

function App() {
   const [headingText, setHeading] = useState("Hello");
   const [isMousedOver, setMousedOver] = useState(false);
   const [name, setName] = useState("");

   // function handleClick() {
   //    setHeading("Submitted");
   // }

   function handleMouseOver() {
      setMousedOver(true);
   }

   function handleMouseOut() {
      setMousedOver(false);
   }

   function handleChange(event) {
      setHeading(event.target.value);
   }

   function handleClick(event) {
      setName(headingText);

      event.preventDefault();
   }

   return (
      <div className="container">
         <h1>Hello {name}</h1>
         <form onSubmit={handleClick}>
            <input
               onChange={handleChange}
               type="text"
               placeholder="What's your name?"
            />
            <button
               type="submit"
               style={{ backgroundColor: isMousedOver ? "black" : "white" }}
               onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}
            >
               Submit
            </button>
         </form>
      </div>
   );
}

export default App;
